import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Components } from "./pages/Components.js";
import { Login } from "./pages/Login.js";
import { Cadastro } from "./pages/Cadastro.js";
import { Home } from "./pages/Home.js";
import { Consulta } from "./pages/Consulta.js";
import { ConsultaVeiculo } from "./pages/CadastroVeiculo.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />}>
          <Route path="components" element={<Components />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="home" element={<Home />} />
          <Route path="consulta" element={<Consulta />} />
          <Route path="consulta-veiculo" element={<ConsultaVeiculo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
