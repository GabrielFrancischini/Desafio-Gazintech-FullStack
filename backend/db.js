import postgres from 'postgres'

const sql = postgres('postgres://postgres:example@db:5432/postgres')

export default sql
