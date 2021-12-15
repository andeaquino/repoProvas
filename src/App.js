import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./shared/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
