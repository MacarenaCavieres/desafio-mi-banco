import "dotenv/config";
import express from "express";
import cuentaRouter from "./routes/cuenta.route.js";
import TransferRouter from "./routes/transferencia.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/accounts", cuentaRouter);
app.use("/api/v1/transfers", TransferRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
