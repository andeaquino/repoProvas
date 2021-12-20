import { useParams } from "react-router";
import styled from "styled-components";

export default function Tests() {
  const { type } = useParams();
  console.log(type);
  return <TestsContainer></TestsContainer>;
}

const TestsContainer = styled.div`
  height: 40px;
  width: 70px;
  background: crimson;
`;
