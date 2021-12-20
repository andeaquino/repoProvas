import Modal from "react-modal";
import styled from "styled-components";
import { Link } from "react-router-dom";

Modal.setAppElement(document.getElementById("root"));

export default function HomeModal({ homeModal, setHomeModal }) {
  const customStyles = {
    overlay: { background: "rgba(255, 255, 255, 0.9)" },
    content: {
      top: "15vh",
      left: "14vw",
      width: "70vw",
      height: "70vh",
      background: "#142e54",
      borderRadius: "12px",
      boxShadow: " 4px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  };

  return (
    <Modal isOpen={homeModal} style={customStyles}>
      <Container>
        <Link to="/provas/professor">Ver provas por professor</Link>
        <Link to="/provas/disciplina">Ver provas por disciplina</Link>
        <button onClick={() => setHomeModal(false)}>x</button>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  button {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: #dddddd;
    border-radius: 35px;
    color: #142e54;
    font-size: 20px;

    :hover {
      opacity: 0.8;
    }
  }
`;
