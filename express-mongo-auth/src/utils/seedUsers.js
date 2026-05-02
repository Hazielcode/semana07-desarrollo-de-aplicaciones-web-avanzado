import userRepository from '../repositories/UserRepository.js';
import authService from '../services/AuthService.js';

export default async function seedUsers() {
    try {
        const adminEmail = 'admin@empresa.com';
        const existing = await userRepository.findByEmail(adminEmail);
        
        if (!existing) {
            await authService.signUp({
                email: adminEmail,
                password: 'AdminPassword123#',
                name: 'Administrador',
                lastName: 'Principal',
                phoneNumber: '555-0000',
                birthdate: '1980-01-01',
                url_profile: '',
                address: 'Sede Principal, Oficina 101',
                roles: ['admin']
            });
            console.log('Seeded admin user (Admin)');
        }
    } catch (err) {
        console.log('Error seeding user:', err.message);
    }
}
