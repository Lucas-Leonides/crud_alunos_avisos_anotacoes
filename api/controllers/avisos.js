import { db } from "../db.js";

export const getAvisos = (_, res) => {
  const q = "SELECT * FROM avisos_gerais"; 
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addAviso = (req, res) => {
  const q =
    "INSERT INTO avisos_gerais(`titulo`, `conteudo`, `data`) VALUES(?)";

  const values = [
    req.body.titulo,
    req.body.conteudo,
    req.body.data,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Aviso criado com sucesso.");
  });
};

export const updateAviso = (req, res) => {
  const q =
    "UPDATE avisos_gerais SET `titulo` = ?, `conteudo` = ?, `data` = ? WHERE `id` = ?";

  const values = [
    req.body.titulo,
    req.body.conteudo,
    req.body.data,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Aviso atualizado com sucesso.");
  });
};

export const deleteAviso = (req, res) => {
  const q = "DELETE FROM avisos_gerais WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Aviso deletado com sucesso.");
  });
};