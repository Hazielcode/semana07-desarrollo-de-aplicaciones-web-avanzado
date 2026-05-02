import userRepository from '../repositories/UserRepository.js';

class UserService {

    async getAll() {
        return userRepository.getAll();
    }

    async getById(id) {
        const user = await userRepository.findById(id);
        if (!user) {
            const err = new Error('Usuario no encontrado');
            err.status = 404;
            throw err;
        }
        return {
            id: user._id,
            email: user.email,
            name: user.name,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            birthdate: user.birthdate,
            url_profile: user.url_profile,
            address: user.address,
            roles: user.roles.map(r => r.name)
        };
    }

    async update(id, payload) {
        // Evitamos que se actualice la contraseña o roles desde este método
        const { password, roles, _id, email, ...updateData } = payload;
        
        const updatedUser = await userRepository.update(id, updateData);
        if (!updatedUser) {
            const err = new Error('Usuario no encontrado');
            err.status = 404;
            throw err;
        }
        return this.getById(id);
    }

    async delete(id) {
        const deletedUser = await userRepository.delete(id);
        if (!deletedUser) {
            const err = new Error('Usuario no encontrado');
            err.status = 404;
            throw err;
        }
        return deletedUser;
    }
}

export default new UserService();
