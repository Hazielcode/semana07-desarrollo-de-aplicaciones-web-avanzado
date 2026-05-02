import userService from '../services/UserService.js';

class UserController {

    async getAll(req, res, next) {
        try {
            const users = await userService.getAll();
            res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    }

    async getMe(req, res, next) {
        try {
            const user = await userService.getById(req.userId);
            res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    }

    async updateMe(req, res, next) {
        try {
            const user = await userService.update(req.userId, req.body);
            res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    }

    async updateUser(req, res, next) {
        try {
            const user = await userService.update(req.params.id, req.body);
            res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    }

    async deleteUser(req, res, next) {
        try {
            await userService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            next(err);
        }
    }
}

export default new UserController();
