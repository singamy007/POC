import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';  // Rename import to User (capitalized)

const router = express.Router();

// Sign Up
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({ name, email, password: hashedPassword });  // Rename variable to newUser
    res.json(newUser);
  } catch (error) {
    console.error('Error during sign up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Sign In
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });  // Rename variable to existingUser
    if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
      const token = jwt.sign({ id: existingUser.id }, process.env.JWT_SECRET);
      res.json({ token });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error('Error during sign in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
