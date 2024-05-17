import { pool } from "../database/connection.js";
import { Cuenta } from "./cuenta.model.js";

const findOne = async (id) => {
    const query = {
        text: "select * from transferencias where cuenta_origen = $1 or cuenta_destino=$1 limit 10",
        values: [id],
    };

    const { rows } = await pool.query(query);
    return rows;
};

const create = async (cuenta_origen, cuenta_destino, monto) => {
    try {
        await pool.query("begin");

        await Cuenta.updateOne(cuenta_origen, -monto);
        await Cuenta.updateOne(cuenta_destino, +monto);

        const query = {
            text: "insert into transferencias (monto, cuenta_origen, cuenta_destino) values ($1, $2, $3) returning *",
            values: [monto, cuenta_origen, cuenta_destino],
        };

        const { rows } = await pool.query(query);
        await pool.query("commit");

        return rows[0];
    } catch (error) {
        console.log("Error====>", error);
        await pool.query("ROLLBACK");
        throw error;
    }
};

export const Transfer = {
    findOne,
    create,
};
