import styled from "styled-components";
import Options from "./Options";

export default function Subjects({ tests, type }) {
  const periods = [
    "1º sem",
    "2º sem",
    "3º sem",
    "4º sem",
    "5º sem",
    "6º sem",
    "7º sem",
    "8º sem",
  ];

  return (
    <SubjectsContainer>
      {periods.map((per) => (
        <dl>
          <dt>{per}</dt>
          {tests.map((test) =>
            test.period.name === per ? (
              <dd>
                <Options name={test.name} tests={test.test} type={type} />
              </dd>
            ) : (
              ""
            )
          )}
        </dl>
      ))}
    </SubjectsContainer>
  );
}

const SubjectsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 40px;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin: 0 auto;

  dt {
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    color: #dddddd;
    margin-bottom: 12px;
    text-align: center;
  }

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
