import sql from './db.js'

import { randomUUID } from "node:crypto"

export class Desenvolvedores {
  
  async list () {
    const desenvolvedores = await sql`
    select
    id,
    nivel,
    nome,
    sexo,
    datanascimento,
    idade,
    hobby
    from desenvolvedores
    ORDER BY lower(nome)
    `
    
    return desenvolvedores
  }
  
  async create(desenvolvedor) {
    const desenvolvedorId = randomUUID();
    await sql`
        INSERT INTO "desenvolvedores" ("id", "nivel", "nome", "sexo", "datanascimento", "idade", "hobby")
        VALUES (
            ${desenvolvedorId},
            ${desenvolvedor.nivel},
            ${desenvolvedor.nome},
            ${desenvolvedor.sexo},
            ${desenvolvedor.datanascimento},
            ${desenvolvedor.idade},
            ${desenvolvedor.hobby}
        );
    `;

    return desenvolvedorId;
}
  
async update(id, desenvolvedor) {
  await sql`
      UPDATE "desenvolvedores" SET
          "nivel" = ${desenvolvedor.nivel},
          "nome" = ${desenvolvedor.nome},
          "sexo" = ${desenvolvedor.sexo},
          "datanascimento" = ${desenvolvedor.datanascimento},
          "idade" = ${desenvolvedor.idade},
          "hobby" = ${desenvolvedor.hobby}
      WHERE "id" = ${id}
  `;
}

  async delete(id) {
    await sql `DELETE FROM "desenvolvedores"
    WHERE "id" = ${id};`

  }
  

  async get(id) {
    const desenvolvedor = await sql`
    select
    id,
    nivel,
    nome,
    sexo,
    datanascimento,
    idade,
    hobby
    from desenvolvedores
    WHERE "id" = ${id};`
    
    return desenvolvedor[0]  
  }

  }