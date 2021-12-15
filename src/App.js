import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./shared/GlobalStyle";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
