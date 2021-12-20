import { useParams } from "react-router";
import styled from "styled-components";
import Options from "./components/Options";
import { useEffect, useState } from "react";
import { getProfessorsTests, getSubjectsTests } from "../../services/API";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Subjects from "./components/Subjects";

export default function Tests() {
  const [tests, setTests] = useState([]);
  const { type } = useParams();

  const loadProfessors = () => {
    getProfessorsTests()
      .then((res) => {
        setTests(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao acessar a lista de professores");
      });
  };

  const loadSubjects = () => {
    getSubjectsTests()
      .then((res) => {
        setTests(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao acessar a lista de disciplinas");
      });
  };

  useEffect(type === "professor" ? loadProfessors : loadSubjects, []);

  return (
    <TestsContainer>
      {type === "professor" ? <h1>Professores</h1> : <h1>Disciplinas</h1>}
      <Link to="/">
        <IoChevronBackOutline className="icon" />
      </Link>

      {type === "professor" ? (
        <Lists>
          {tests.map((prof) => (
            <Options name={prof.name} tests={prof.test} type={type} />
          ))}
        </Lists>
      ) : (
        <Subjects tests={tests} type={type} />
      )}
    </TestsContainer>
  );
}

const TestsContainer = styled.div`
  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 50px;
    color: #dddddd;
    margin: 80px 0;
    text-align: center;
  }

  .icon {
    color: #ffffff;
    font-size: 26px;
    cursor: pointer;
    position: fixed;
    top: 50px;
    right: 50px;
  }
`;

const Lists = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    color: #dddddd;
    margin-bottom: 12px;
    text-align: center;

    :hover {
      opacity: 0.8;
    }
  }
`;
