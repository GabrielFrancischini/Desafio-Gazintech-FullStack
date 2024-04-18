import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const redirectToDesenvolvedores = () => {
    navigate(`/desenvolvedores`);
  };

  return (
    <div className={styles.home}>
      <h1> Olá, seja bem vindo ao Desafio-FullStack da Gazin! </h1>
      <p>
        Neste projeto, contruímos um Projeto de cadastro de Desenvolvedores.
      </p>
      <p>
        O projeto consiste em uma API RESTFUL que é um SPA interligada à API
      </p>
      <p> Veja os desenvolvedores cadastrados clicando no botão a seguir: </p>

      <button
        className={styles.Desenvolvedores}
        onClick={redirectToDesenvolvedores}
      >
        Lista de Desenvolvedores
      </button>
    </div>
  );
}
