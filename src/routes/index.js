import { products } from '../models/dataModel.js';

export default async function routes(fastify, options) {

    
  fastify.get('/', async (request, reply) => {
    return reply.view('/index.ejs', { products });
  });

  fastify.get('/about', async (request, reply) => {
    return reply.view('/pages/about.ejs');
  });

  fastify.get('/form', async (request, reply) => {
    return reply.view('/pages/form.ejs');
  });

  fastify.post('/submit', async (request, reply) => {
    const { name, message } = request.body;
    return reply.send({ status: 'Success', name, message });
  });
}
