import { Transfer } from "../models/transferencia.model.js";

const getOne = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await Transfer.findOne(id);

        return res.json(data);
    } catch (error) {
        console.error("Error===>", error);
        return res.status(500).json({ ok: false });
    }
};

const postOne = async (req, res) => {
    try {
        const { monto, cuenta_origen, cuenta_destino } = req.body;

        const data = await Transfer.create(cuenta_origen, cuenta_destino, monto);

        return res.status(201).json(data);
    } catch (error) {
        console.error("error===>", error);
        return res.status(500).json({ ok: false });
    }
};

export const transferMethod = {
    getOne,
    postOne,
};
