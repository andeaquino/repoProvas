import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <HomeContainer>
      <h1>Bem vindo ao RepoProvas</h1>
      <h2>Compartilhe e acesse provas para um melhor futuro</h2>
      <Link to="/provas">Ver provas</Link>
      <Link to="/enviar">Enviar prova</Link>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #142e54;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 40px;
    color: #dddddd;
    margin-bottom: 80px;
    text-align: center;
  }

  h2 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 30px;
    color: #dddddd;
    margin-bottom: 80px;
    text-align: center;
  }

  a {
    width: 300px;
    height: 50px;
    line-height: 50px;
    border-radius: 8px;
    margin-bottom: 16px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    color: #142e54;
    background-color: #dddddd;
    text-align: center;

    :hover {
      opacity: 0.8;
    }
  }
`;
