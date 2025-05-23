import Fastify from 'fastify';
import formbody from '@fastify/formbody';
import fastifyView from '@fastify/view';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './src/routes/index.js';
import ejs from 'ejs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({ logger: true });
fastify.register(formbody);
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
});
fastify.register(fastifyView, {
  engine: { ejs },
  root: path.join(__dirname, 'src/views'),
});

fastify.register(routes);

fastify.listen({ port: 3000 }, err => {

  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
    fastify.log.info(`Server is running at http://localhost:3000`);
});
