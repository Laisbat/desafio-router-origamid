import React from "react";
import styles from "./Contatos.module.css";
import foto from "../../img/contato.jpg";
import Head from "../Head/Head";

const Contatos = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="maquina" />
      <div className={styles.dados}>
        <h1>Entre em contato</h1>
        <ul>
          <li>teste@contato.com</li>
          <li>61 99999-9999</li>
          <li> Rua X, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contatos;
