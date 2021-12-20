import Modal from "react-modal";
import { useParams } from "react-router";
import styled from "styled-components";
import { categorizeTests } from "../../../services/categorizeTests";

Modal.setAppElement(document.getElementById("root"));

export default function TestModal({ testModal, setTestModal, tests }) {
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
  const { type } = useParams();
  const categorizedTests = categorizeTests(tests);

  return (
    <Modal isOpen={testModal} style={customStyles}>
      <Container>
        <dl>
          <dt>P1</dt>
          {categorizedTests.P1.map((test) => (
            <dd>
              <a href={test.pdf}>
                {test.name} |
                {type === "professor"
                  ? ` Disciplina: ${test.subject?.name}`
                  : ` Prof.: ${test.professor?.name}`}
              </a>
            </dd>
          ))}
        </dl>
        <dl>
          <dt>P2</dt>
          {categorizedTests.P2.map((test) => (
            <dd>
              <a href={test.pdf}>
                {test.name} |{" "}
                {type === "professor"
                  ? ` Disciplina: ${test.subject?.name}`
                  : ` Prof.: ${test.professor?.name}`}
              </a>
            </dd>
          ))}
        </dl>
        <dl>
          <dt>P3</dt>
          {categorizedTests.P3.map((test) => (
            <dd>
              <a href={test.pdf}>
                {test.name} |{" "}
                {type === "professor"
                  ? ` Disciplina: ${test.subject?.name}`
                  : ` Prof.: ${test.professor?.name}`}
              </a>
            </dd>
          ))}
        </dl>
        <dl>
          <dt>2ch</dt>
          {categorizedTests.ch.map((test) => (
            <dd>
              <a href={test.pdf}>
                {test.name} |{" "}
                {type === "professor"
                  ? ` Disciplina: ${test.subject?.name}`
                  : ` Prof.: ${test.professor?.name}`}
              </a>
            </dd>
          ))}
        </dl>
        <dl>
          <dt>Outras</dt>
          {categorizedTests.Outras.map((test) => (
            <dd>
              <a href={test.pdf}>
                {test.name} |{" "}
                {type === "professor"
                  ? ` Disciplina: ${test.subject?.name}`
                  : ` Prof.: ${test.professor?.name}`}
              </a>
            </dd>
          ))}
        </dl>
        <button onClick={() => setTestModal(false)}>x</button>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 40px;
  justify-content: center;
  align-items: center;

  a {
    color: inherit;
  }

  dt {
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    color: #dddddd;
    margin-bottom: 12px;
    text-align: center;
  }

  dd {
    font-family: "Lexend Deca", sans-serif;
    font-size: 15px;
    color: #dddddd;
    margin-bottom: 12px;
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
