import express from 'express';
import { deleteUser, getUserById, getUsers, saveUser, updateUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/users', getUsers); // route to get all users
router.get('/users/:id', getUserById);;
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;

// put and patch are similer used to update but if put is used than give all the value, but using patch we only have to give the updated value.