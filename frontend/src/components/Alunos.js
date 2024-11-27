import React, { useEffect, useState } from "react";
import Form from "./Form"; // Ajuste se você tiver um formulário específico para alunos
import Grid from "./Grid"; // Ajuste se você tiver uma grade específica para alunos
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function Alunos() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/users"); // URL que deve ser ajustada
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error.response?.data || "Erro ao buscar usuários");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Container>
        <Title>Alunos</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer />
    </>
  );
}

export default Alunos;