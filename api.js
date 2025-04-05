import express from "express";

const app = express();
const PORT = 3000;
const arrResponse = [
  { name: "João", age: 31 },
  { name: "Maria", age: 28 },
];

app.get("/", (req, res) => {
  res.json(arrResponse);
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`)); //qual porta a API está escutando
