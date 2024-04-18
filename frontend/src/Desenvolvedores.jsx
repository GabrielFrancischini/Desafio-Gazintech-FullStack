import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Desenvolvedores.module.css";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs/esm/index.js";

const FormatarDataBR = (data) => {
  return dayjs(data).format("DD/MM/YYYY");
};

export default function Desenvolvedores() {
  const navigate = useNavigate();
  const [desenvolvedores, setDesenvolvedores] = useState([]);
  const [menuIndex, setMenuIndex] = useState(null); // Para controlar qual linha está com o menu aberto

  const getDesenvolvedores = async () => {
    try {
      const response = await axios.get("http://localhost:3000/desenvolvedores");
      setDesenvolvedores(response.data);
    } catch (error) {
      console.error("Erro ao obter desenvolvedores:", error);
    }
  };

  useEffect(() => {
    getDesenvolvedores();
  }, []);

  const redirectToCriar = () => {
    navigate(`/desenvolvedores/criar`);
  };

  const redirectToEditar = (id) => {
    navigate(`/desenvolvedores/editar/${id}`);
  };

  const handleExcluir = async (id) => {
    const confirmacao = window.confirm(
      "Tem certeza que deseja excluir este desenvolvedor?"
    );
    if (confirmacao) {
      try {
        await axios.delete(`http://localhost:3000/desenvolvedores/${id}`);
        getDesenvolvedores();
      } catch (error) {
        console.error("Erro ao excluir desenvolvedor:", error);
      }
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.header}>
            <h1>Lista de Desenvolvedores</h1>
            <button
              className={styles.AdicionarDesenvolvedor}
              onClick={redirectToCriar} 
            >
              Novo desenvolvedor
            </button>
          </div>

          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th className={styles.titulonome}>Nome</th>
                  <th className={styles.titulonivel}>Nível</th>
                  <th className={styles.tituloidade}>Idade</th>
                  <th className={styles.titulosexo}>Sexo</th>
                  <th className={styles.titulodata}>Data de Nascimento</th>
                  <th className={styles.titulohobby}>Hobby</th>
                  <th></th> {/* Espaço para os botões */}
                </tr>
              </thead>

              <tbody>
                {desenvolvedores.length === 0 ? (
                  <tr>
                    <td className={styles.semcadastro} colSpan="7">
                      Você ainda não cadastrou nenhum desenvolvedor
                    </td>
                  </tr>
                ) : (
                  desenvolvedores.map((desenvolvedor, index) => (
                    <tr key={index}>
                      <td className={styles.nome}>{desenvolvedor.nome}</td>
                      <td className={styles.nivel}>{desenvolvedor.nivel}</td>
                      <td className={styles.idade}>{desenvolvedor.idade}</td>
                      <td className={styles.sexo}>{desenvolvedor.sexo}</td>
                      <td className={styles.data}>
                        {FormatarDataBR(desenvolvedor.datanascimento)}
                      </td>
                      <td className={styles.hobby}>{desenvolvedor.hobby}</td>
                      <td>
                        <div className={styles.botao}>
                          <button
                            title="Editar"
                            className={styles.Editar}
                            onClick={() => redirectToEditar(desenvolvedor.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              fill="none"
                              viewBox="0 0 24 25"
                            >
                              <mask
                                id="mask0_86_51"
                                style={{ maskType: "alpha" }}
                                width="24"
                                height="25"
                                x="0"
                                y="0"
                                maskUnits="userSpaceOnUse"
                              >
                                <path
                                  fill="#D9D9D9"
                                  d="M0 0.5H24V24.5H0z"
                                ></path>
                              </mask>
                              <g mask="url(#mask0_86_51)">
                                <path
                                  fill="#666"
                                  d="M5 19.5h1.425L16.2 9.725 14.775 8.3 5 18.075V19.5zm-1 2a.967.967 0 01-.712-.288A.968.968 0 013 20.5v-2.425a1.975 1.975 0 01.575-1.4L16.2 4.075c.2-.183.42-.325.663-.425.241-.1.495-.15.762-.15s.525.05.775.15c.25.1.467.25.65.45l1.375 1.4c.2.183.346.4.438.65a2.165 2.165 0 010 1.512 1.874 1.874 0 01-.438.663l-12.6 12.6a1.975 1.975 0 01-1.4.575H4zM15.475 9.025l-.7-.725L16.2 9.725l-.725-.7z"
                                ></path>
                              </g>
                            </svg>
                          </button>
                          <button
                            title="Excluir"
                            className={styles.Excluir}
                            onClick={() => handleExcluir(desenvolvedor.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="19"
                              fill="none"
                              viewBox="0 0 16 19"
                            >
                              <path
                                fill="#666"
                                d="M3 18.5c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 011 16.5v-13a.968.968 0 01-.713-.288A.968.968 0 010 2.5c0-.283.096-.52.287-.712A.968.968 0 011 1.5h4c0-.283.096-.52.287-.713A.968.968 0 016 .5h4c.283 0 .52.096.713.287.191.192.287.43.287.713h4c.283 0 .52.096.713.288.191.191.287.429.287.712s-.096.52-.287.712A.968.968 0 0115 3.5v13c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0113 18.5H3zm10-15H3v13h10v-13zm-7 11c.283 0 .52-.096.713-.287A.968.968 0 007 13.5v-7a.968.968 0 00-.287-.713A.968.968 0 006 5.5a.968.968 0 00-.713.287A.968.968 0 005 6.5v7c0 .283.096.52.287.713.192.191.43.287.713.287zm4 0c.283 0 .52-.096.713-.287A.968.968 0 0011 13.5v-7a.967.967 0 00-.287-.713A.968.968 0 0010 5.5a.968.968 0 00-.713.287A.968.968 0 009 6.5v7c0 .283.096.52.287.713.192.191.43.287.713.287z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
