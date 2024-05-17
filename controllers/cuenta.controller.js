import { Cuenta } from "../models/cuenta.model.js";

const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Cuenta.findOne(id);

        return res.json(data);
    } catch (error) {
        console.error("Error===>", error);
        return res.status(500).json({ ok: false });
    }
};

export const cuentaMethod = {
    getOne,
};
