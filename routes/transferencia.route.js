import { Router } from "express";
import { transferMethod } from "../controllers/transferencia.controller.js";

const router = Router();

router.get("/:id", transferMethod.getOne);
router.post("/", transferMethod.postOne);

export default router;
