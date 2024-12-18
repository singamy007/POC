import express from 'express';
import fastify from 'fastify';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import bookRoutes from './routes/book.js';
import categoryRoutes from './routes/category.js';
import sequelize from './config/database.js';
import './models/user.js';          // Import User model
import './models/bookCategory.js';  // Import BookCategory model
import './models/Book.js';          // Import Book model

// Sync database schema
sequelize.sync({ force: true }) // Use `force: true` for development to drop and recreate tables
  .then(() => console.log('Database synchronized'))
  .catch((err) => console.error('Error syncing database:', err));


dotenv.config();

const app = express();  // Express app
const fastifyServer = fastify();  // Fastify app

// Middleware for Express
app.use(bodyParser.json());

// Routes for Express
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/categories', categoryRoutes);

// Start Express Server
const EXPRESS_PORT = process.env.EXPRESS_PORT || 5000;
app.listen(EXPRESS_PORT, () => {
  console.log(`Express server running on port ${EXPRESS_PORT}`);
});

// Fastify Configuration: Use Fastify for specific routes
fastifyServer.post('/api/fastify-example', async (request, reply) => {
  const { data } = request.body;
  return { message: `Fastify received: ${data}` };
});

// Start Fastify Server
const FASTIFY_PORT = process.env.FASTIFY_PORT || 3000;
fastifyServer.listen({ port: FASTIFY_PORT }, (err) => {
  if (err) {
    fastifyServer.log.error(err);
    process.exit(1);
  }
  console.log(`Fastify server running on port ${FASTIFY_PORT}`);
});
