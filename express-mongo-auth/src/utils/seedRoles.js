import roleRepository from '../repositories/RoleRepository.js';

export default async function seedRoles() {
    const existing = await roleRepository.getAll();
    const userExists = existing.some(r => r.name === 'user');
    const adminExists = existing.some(r => r.name === 'admin');

    if (!userExists) {
        await roleRepository.create({ name: 'user' });
        console.log('Seeded role: user');
    }
    if (!adminExists) {
        await roleRepository.create({ name: 'admin' });
        console.log('Seeded role: admin');
    }
}
