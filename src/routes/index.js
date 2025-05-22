import { items } from '../models/dataModel.js';

export default async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return reply.view('/views/index.ejs', { items });
  });

  fastify.get('/about', async (request, reply) => {
    return reply.view('/views/about.ejs');
  });

  fastify.get('/form', async (request, reply) => {
    return reply.view('/views/form.ejs');
  });

  fastify.post('/submit', async (request, reply) => {
    const { name, message } = request.body;
    return reply.send({ status: 'Success', name, message });
  });
}
