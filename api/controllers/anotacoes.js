import { db } from "../db.js";

export const getAnotacoes = (_, res) => {
  const q = "SELECT * FROM anotacoes"; // Certifique-se de que a tabela exista

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addAnotacao = (req, res) => {
  const q =
    "INSERT INTO anotacoes(`titulo`, `conteudo`, `data`, `id_aula`) VALUES(?)";

  const values = [
    req.body.titulo,
    req.body.conteudo,
    req.body.data,
    req.body.id_aula,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Anotação criada com sucesso.");
  });
};

export const updateAnotacao = (req, res) => {
  const q =
    "UPDATE anotacoes SET `titulo` = ?, `conteudo` = ?, `data` = ? WHERE `id` = ?";

  const values = [
    req.body.titulo,
    req.body.conteudo,
    req.body.data,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Anotação atualizada com sucesso.");
  });
};

export const deleteAnotacao = (req, res) => {
  const q = "DELETE FROM anotacoes WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Anotação deletada com sucesso.");
  });
};