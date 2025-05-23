import { products } from '../models/products.js';
import { messages } from '../models/messages.js';

export default async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return reply.view('/index.ejs', { products, messages });
  });

  fastify.get('/products', async (request, reply) => {
    return reply.view('/pages/products.ejs');
  });

  fastify.get('/form', async (request, reply) => {
    return reply.view('/pages/form.ejs');
  });

  fastify.post('/submit', async (request, reply) => {
    const { name, message } = request.body;

    if (name && message) {
      messages.push({ name, message });
    }

    return reply.redirect('/');
  });

   fastify.post('/add-product', async (request, reply) => {
  let { name, description, price, category, stock } = request.body;

  if (!name || !description || !price || !category || !stock) {
    return reply.code(400).send({ error: 'Missing required fields' });
  }

  const newProduct = {
    name,
    description,
    category,
    price: parseFloat(price),
    stock: parseInt(stock),
  };

  products.push(newProduct);
  return reply.redirect('/');
});

}
