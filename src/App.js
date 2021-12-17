import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./shared/GlobalStyle";
import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enviar" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
