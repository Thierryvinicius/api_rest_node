// server.js
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/usuarios", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
