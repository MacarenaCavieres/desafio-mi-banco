import { pool } from "../database/connection.js";

const findOne = async (id) => {
    const query = {
        text: "select * from cuentas where id = $1",
        values: [id],
    };

    const { rows } = await pool.query(query);
    return rows[0];
};

const updateOne = async (monto, id) => {
    const query = {
        text: "update cuentas set saldo = saldo + $1 where id = $2 returning *",
        values: [monto, id],
    };

    const { rows } = await pool.query(query);
    return rows[0];
};

export const Cuenta = {
    findOne,
    updateOne,
};
