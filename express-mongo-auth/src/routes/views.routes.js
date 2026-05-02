import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.redirect('/signIn'));

router.get('/signIn', (req, res) => {
    res.render('signIn', { title: 'Iniciar Sesión' });
});

router.get('/signUp', (req, res) => {
    res.render('signUp', { title: 'Registro' });
});

router.get('/profile', (req, res) => {
    res.render('profile', { title: 'Mi Cuenta' });
});

router.get('/dashboard-user', (req, res) => {
    res.render('dashboard-user', { title: 'Panel de Usuario' });
});

router.get('/dashboard-admin', (req, res) => {
    res.render('dashboard-admin', { title: 'Panel de Administración' });
});

router.get('/403', (req, res) => {
    res.status(403).render('403', { title: 'Acceso Denegado' });
});

router.use((req, res) => {
    res.status(404).render('404', { title: 'Página no encontrada' });
});

export default router;
