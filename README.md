# Desafio-Full-Stack-Gazin-Tech

Este é um desafio FullStack da GazinTech, neste projeto, contruímos um Projeto de cadastro de Desenvolvedores. O projeto consiste em uma API RESTFUL que é um SPA interligada à API.

## Requisitos

Para rodar este projeto, você deve ter as seguintes ferramentas instaladas:

- [Docker](https://docs.docker.com/engine/install/)
- [Docker-Compose](https://docs.docker.com/compose/install/)

## Como iniciar o projeto

Para iniciar o projeto, frontend, backend e o banco de dados,
navegue até a pasta Desafio-Gazintech-FullStack e execute o comando:

```
docker-compose up -d --build
```

Após a execução terminar, as aplicações estarão disponíveis em:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Tecnologias utilizadas no projeto:

O Frontend foi desenvolvido com React e Axios.

O Backend foi desenvolvido em JavaScprit com Nodejs, o Framework utilizado foi o Fastify.

O Banco de dados utilizado para esta aplicação foi o PostgreSQL.

## Documentação API (Backend)

### GET `/desenvolvedores` Retorna todos os desenvolvedores

### GET `/desenvolvedores/:id` Retorna um desenvolvedor pelo id

### POST `/desenvolvedores` Cadastra um novo desenvolvedor

#### Parameters

| name           | data type         |
| -------------- | ----------------- |
| nivel          | string            |
| nome           | string            |
| sexo           | string            |
| datanascimento | date (DD-MM-AAAA) |
| idade          | number            |
| hobby          | string            |

### PUT `/desenvolvedores/:id` Edita um desenvolvedor existente

#### Parameters

| name           | data type           |
| -------------- | ------------------- |
| nivel          | string              |
| nome           | string              |
| sexo           | string              |
| datanascimento | string (DD-MM-AAAA) |
| idade          | number              |
| hobby          | string              |

### DELETE `/desenvolvedores/:id` Delete um desenvolvedor existente
