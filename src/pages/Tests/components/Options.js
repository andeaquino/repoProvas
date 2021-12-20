import { useState } from "react";
import styled from "styled-components";
import TestModal from "./TestModal";

export default function Options({ name, tests, type }) {
  const [testModal, setTestModal] = useState(false);

  return (
    <OptionsContainer>
      <p onClick={() => setTestModal(true)}>
        {type === "professor"
          ? `Prof. ${name}: ${tests.length} prova(s)`
          : `Disc. ${name}: ${tests.length} prova(s)`}
      </p>
      <TestModal
        testModal={testModal}
        setTestModal={setTestModal}
        tests={tests}
      />
    </OptionsContainer>
  );
}

const OptionsContainer = styled.li`
  margin: 0 auto;
`;
