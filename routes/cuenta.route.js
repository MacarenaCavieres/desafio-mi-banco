import { Router } from "express";
import { cuentaMethod } from "../controllers/cuenta.controller.js";

const router = Router();

router.get("/:id", cuentaMethod.getOne);

export default router;
