import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contatos from "./components/Contatos/Contatos.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Produtos from "./components/Produtos/Produtos.js";
import Produto from "./components/Produto/Produto";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contatos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
