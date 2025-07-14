import express from 'express';
import { getUsers } from '../controllers/UserController.js';

const router = express.Router();

router.get('/users', getUsers); // route to get all users
// router.get('/users/:id', getUserById);;
// router.post('/users', saveUser);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

export default router;