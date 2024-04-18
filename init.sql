
CREATE TABLE IF NOT EXISTS "desenvolvedores" (
    "id" uuid,
    "nivel" character varying,
    "nome" character varying,
    "sexo" character varying,
    "datanascimento" date,
    "idade" integer,
    "hobby" character varying,
    primary key (id)
);