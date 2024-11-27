import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa o Router e as Rotas
import GlobalStyle from "./styles/global";
import Home from "./components/Home"; // Importe o novo componente Home
import Alunos from "./components/Alunos"; // Importar o componente Alunos
import Anotacoes from "./components/Anotacoes"; // Importar o componente Anotacoes
import Avisos from "./components/Avisos"; // Importar o componente Avisos

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/anotacoes" element={<Anotacoes />} />
        <Route path="/avisos" element={<Avisos />} />
      </Routes>
    </Router>
  );
}

export default App;