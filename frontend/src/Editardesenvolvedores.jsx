import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Editardesenvolvedores.module.css";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs/esm/index.js";

const FormatarData = (data) => {
  return dayjs(data).format("YYYY-MM-DD");
};

export default function Editardesenvolvedores() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [nivel, setNivel] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [hobby, setHobby] = useState("");

  const getDesenvolvedor = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/desenvolvedores/${id}`
      );
      const desenvolvedor = response.data;
      setNome(desenvolvedor.nome);
      setNivel(desenvolvedor.nivel);
      setIdade(desenvolvedor.idade);
      setSexo(desenvolvedor.sexo);
      setDataNascimento(desenvolvedor.datanascimento);
      setHobby(desenvolvedor.hobby);
    } catch (error) {
      console.error("Erro ao obter desenvolvedor:", error);
    }
  };

  useEffect(() => {
    getDesenvolvedor();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/desenvolvedores/${id}`, {
        nome,
        nivel,
        idade,
        sexo,
        datanascimento: dataNascimento,
        hobby,
      });
      alert("Desenvolvedor atualizado com sucesso!");
      navigate(`/desenvolvedores`);
    } catch (error) {
      console.error("Erro ao atualizar desenvolvedor:", error);
    }
  };

  const handleVoltar = () => {
    navigate(`/desenvolvedores`);
  };

  return (
    <div>
      <div className={styles.form}>
        <h1>Editar Desenvolvedor</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Nome:</p>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label>
            <p>Nível:</p>
            <select value={nivel} onChange={(e) => setNivel(e.target.value)}>
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
              onChange={(e) => setIdade(e.target.value)}
            />
          </label>
          <label>
            <p>Sexo:</p>
            <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Masculino"> Masculino</option>
              <option value="Feminino"> Feminino</option>
            </select>
          </label>
          <label>
            <p>Data de Nascimento:</p>
            <input
              type="date"
              value={FormatarData(dataNascimento)}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
          </label>
          <label>
            <p>Hobby:</p>
            <input
              type="text"
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
          <button className={styles.Salvar} type="submit">
            {" "}
            Salvar Alterações{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
