import React, { useState } from "react";
import axios from "axios";
import styles from "./Criardesenvolvedores.module.css";
import { useNavigate } from "react-router-dom";

export default function CriarDesenvolvedores() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [nivel, setNivel] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [hobby, setHobby] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/desenvolvedores",
        {
          nome,
          nivel,
          idade,
          sexo,
          datanascimento: dataNascimento,
          hobby,
        }
      );
      console.log("Desenvolvedor criado com sucesso:", response.data);
      navigate(`/desenvolvedores`);
    } catch (error) {
      console.error("Erro ao criar desenvolvedor:", error);
    }
  };

  const handleVoltar = () => {
    // Redirecionar para a página de visualização dos desenvolvedores
    navigate(`/desenvolvedores`);
  };

  return (
    <div>
      <div className={styles.form}>
        <h1>Criar Novo Desenvolvedor</h1>

        <form onSubmit={handleSubmit}>
          <label>
            <p>Nome:</p>
            <input
              type="text"
              value={nome}
              placeholder="Digite seu Nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label>
            <p>Nível:</p>
            <select onChange={(e) => setNivel(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Júnior"> Júnior</option>
              <option value="Pleno"> Pleno</option>
              <option value="Sênior"> Sênior</option>
            </select>
          </label>
          <label>
            <p>Idade:</p>
            <input
              type="number"
              min="1"
              value={idade}
              placeholder="Digite sua Idade"
              onChange={(e) => setIdade(e.target.value)}
            />
          </label>
          <label>
            <p>Sexo:</p>
            <select onChange={(e) => setSexo(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Masculino"> Masculino</option>
              <option value="Feminino"> Feminino</option>
            </select>
          </label>
          <label>
            <p>Data de Nascimento:</p>
            <input
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
          </label>
          <label>
            <p>Hobby:</p>
            <input
              type="text"
              placeholder="Digite seu Hobby"
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
            />
          </label>
          <button
            className={styles.Voltar}
            type="button"
            onClick={handleVoltar}
          >
            {" "}
            Voltar{" "}
          </button>
          <button className={styles.CadastrarDesenvolvedor} type="submit">
            {" "}
            Cadastrar Desenvolvedor{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
