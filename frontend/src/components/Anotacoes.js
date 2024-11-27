import React, { useEffect, useState } from "react";
import Form from "./Form"; // Substitua pelo componente correto para Anotações
import Grid from "./Grid"; // Substitua pelo componente correto para Anotações
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

function Anotacoes() {
  const [anotacoes, setAnotacoes] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getAnotacoes = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/anotacoes");
      setAnotacoes(res.data);
    } catch (error) {
      toast.error(error.response?.data || "Erro ao buscar anotações");
    }
  };

  useEffect(() => {
    getAnotacoes();
  }, []);

  return (
    <>
      <Container>
        <Title>Anotações</Title>
        <Form setAnotacoes={setAnotacoes} onEdit={onEdit} setOnEdit={setOnEdit} />
        <Grid anotacoes={anotacoes} setAnotacoes={setAnotacoes} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer />
    </>
  );
}

export default Anotacoes;