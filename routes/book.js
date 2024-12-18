import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { title, author, categoryId } = req.body;
  const book = await Book.create({ title, author, categoryId });
  res.json(book);
});

router.get('/', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

export default router;
