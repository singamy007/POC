import express from 'express';
import BookCategory from '../models/bookCategory.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name } = req.body;
  const category = await BookCategory.create({ name });
  res.json(category);
});

router.get('/', async (req, res) => {
  const categories = await BookCategory.findAll();
  res.json(categories);
});

export default router;
