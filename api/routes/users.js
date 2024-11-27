import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "./controllers/user.js";
import { getAvisos, addAviso, updateAviso, deleteAviso } from "./controllers/avisos.js";
import { getAlunos, addAluno, updateAluno, deleteAluno } from "./controllers/alunos.js";
import { getAnotacoes, addAnotacao, updateAnotacao, deleteAnotacao } from "./controllers/anotacoes.js";

const router = express.Router();

// Rotas para usuários
router.get("/users", getUsers);
router.post("/users", addUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

// Rotas para avisos
router.get("/avisos", getAvisos);
router.post("/avisos", addAviso);
router.put("/avisos/:id", updateAviso);
router.delete("/avisos/:id", deleteAviso);

// Rotas para alunos
router.get("/alunos", getAlunos);
router.post("/alunos", addAluno);
router.put("/alunos/:id", updateAluno);
router.delete("/alunos/:id", deleteAluno);

// Rotas para anotações
router.get("/anotacoes", getAnotacoes);
router.post("/anotacoes", addAnotacao);
router.put("/anotacoes/:id", updateAnotacao);
router.delete("/anotacoes/:id", deleteAnotacao);

export default router;