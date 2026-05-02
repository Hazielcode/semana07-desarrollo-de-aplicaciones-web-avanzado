import express from 'express';
import UserController from '../controllers/UserController.js';
import authenticate from '../middlewares/authenticate.js';
import authorize from '../middlewares/authorize.js';

const router = express.Router();

// GET /api/users (solo el rol admin)
router.get('/', authenticate, authorize(['admin']), UserController.getAll);

// GET /api/users/me (cualquier usuario autenticado)
router.get('/me', authenticate, authorize([]), UserController.getMe);

// PUT /api/users/me (actualizar datos)
router.put('/me', authenticate, authorize([]), UserController.updateMe);

// PUT /api/users/:id (admin actualizar cualquier usuario)
router.put('/:id', authenticate, authorize(['admin']), UserController.updateUser);

// DELETE /api/users/:id (admin eliminar usuario)
router.delete('/:id', authenticate, authorize(['admin']), UserController.deleteUser);

export default router;
