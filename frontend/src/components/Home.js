import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2c73d2;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Bem-vindo ao Gerenciador de Escola</h1>
      <Button onClick={() => navigate("/alunos")}>Alunos</Button>
      <Button onClick={() => navigate("/anotacoes")}>Anotações</Button>
      <Button onClick={() => navigate("/avisos")}>Avisos</Button>
    </Container>
  );
};

export default Home;