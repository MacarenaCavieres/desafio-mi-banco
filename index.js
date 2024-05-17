import "dotenv/config";

import express from "express";

const app = express();

// app.use("/api/v1/accounts",)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
