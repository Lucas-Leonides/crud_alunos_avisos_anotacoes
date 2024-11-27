import express from "express";
import userRoutes from "./routes/users.js"; // Importando as rotas de usuários
import cors from "cors"; // Para permitir CORS

const app = express();

// Middleware
app.use(cors()); // Permitir requisições CORS
app.use(express.json()); // Para fazer parse de JSON no corpo das requisições

// Usando as rotas de usuários sob o prefixo /api
app.use("/api", userRoutes); // Acesse suas rotas através de http://localhost:8800/api/users

// Iniciando o servidor
app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800"); // Mensagem de confirmação
});