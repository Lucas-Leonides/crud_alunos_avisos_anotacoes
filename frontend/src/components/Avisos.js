import React, { useEffect, useState } from "react";
import Form from "./Form"; // Substitua pelo componente correto para Avisos
import Grid from "./Grid"; // Substitua pelo componente correto para Avisos
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

function Avisos() {
  const [avisos, setAvisos] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getAvisos = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/avisos");
      setAvisos(res.data);
    } catch (error) {
      toast.error(error.response?.data || "Erro ao buscar avisos");
    }
  };

  useEffect(() => {
    getAvisos();
  }, []);

  return (
    <>
      <Container>
        <Title>Avisos</Title>
        <Form setAvisos={setAvisos} onEdit={onEdit} setOnEdit={setOnEdit} />
        <Grid avisos={avisos} setAvisos={setAvisos} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer />
    </>
  );
}

export default Avisos;