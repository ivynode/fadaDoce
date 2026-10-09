import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer'

import Error from './pages/404'
import Quemsomos from "./pages/Quemsomos";
import Inicio from "./pages/Inicio";
import Contatos from "./pages/Contatos";
import Cardapio from "./pages/Cardapio";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quemsomos" element={<Quemsomos />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}