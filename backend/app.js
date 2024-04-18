import Fastify from 'fastify'
import cors from '@fastify/cors'
import { Desenvolvedores } from './desenvolvedores.js';

const fastify = Fastify({
  logger: true
})

await fastify.register(cors, {
  origin: "*",
  methods: ["GET","POST","PUT","PATCH","DELETE"]
})

const database = new Desenvolvedores() 

  fastify.get('/desenvolvedores', async (request, reply) => {
   const desenvolvedores = await database.list();
   return reply.send( desenvolvedores );
 });



 fastify.post('/desenvolvedores', async (request, reply) => {
   const { nivel, nome, sexo, idade, datanascimento, hobby } = request.body;
  
  
  const desenvolvedorId = await database.create({
    nivel,
    nome,
    sexo,
    idade,
    datanascimento,
    hobby,
  });

  return reply.status(200).send({desenvolvedorId});
 });


 fastify.put('/desenvolvedores/:id', async (request, reply) => {
  const desenvolvedorId = request.params.id;
  const { nivel, nome, sexo, idade, datanascimento, hobby } = request.body;

  await database.update(desenvolvedorId, {
    nivel,
    nome,
    sexo,
    idade,
    datanascimento,
    hobby,
  });

  reply.status(200).send();
});


 fastify.delete('/desenvolvedores/:id', async (request, reply) => {
   const desenvolvedorId = request.params.id;

   await database.delete(desenvolvedorId);

   return reply.status(200).send();
 });


 fastify.get('/desenvolvedores/:id', async (request, reply) => {
  const desenvolvedorId = request.params.id;

  const desenvolvedor = await database.get(desenvolvedorId);

  return reply.status(200).send(desenvolvedor);
});


export default fastify