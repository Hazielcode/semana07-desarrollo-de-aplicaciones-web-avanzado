# Portal de Autenticación Corporativo 🛡️

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![MaterializeCSS](https://img.shields.io/badge/Materialize-EE6E73?style=for-the-badge&logo=css3&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

Sistema de autenticación robusto desarrollado en Node.js con Express y MongoDB, orientado a entornos corporativos. Cuenta con renderizado en el servidor mediante plantillas **EJS**, diseño SPA fluido mediante **Materialize CSS**, y un sistema de control de accesos basado en roles (RBAC) asegurado con **JSON Web Tokens (JWT)**.

---

## 🚀 Características Principales

*   **Autenticación Segura (Stateless):** Emisión y validación de tokens JWT gestionados mediante `sessionStorage`.
*   **Control de Acceso Basado en Roles (RBAC):** Roles de `admin` y `user` integrados nativamente.
*   **Dashboards Dedicados:** 
    *   `Dashboard de Usuario`: Panel de bienvenida personalizado.
    *   `Dashboard Administrativo`: Panel con funcionalidad **CRUD completa** para gestión de usuarios.
*   **Seguridad de Contraseñas:** Validaciones por expresiones regulares en tiempo real (Frontend) y pre-guardado (Backend) que exigen: mínimo 8 caracteres, mayúsculas, números y caracteres especiales. Hashing seguro usando `bcrypt`.
*   **Interfaz Dinámica SPA:** Interacciones suaves mediante solicitudes `fetch`, validaciones en vivo y transiciones modernas gracias a un CSS avanzado, sin perder los beneficios de SSR de EJS.
*   **Generación Dinámica de Avatares:** Creación de avatares automáticos con iniciales en caso de no proveer URL de foto de perfil.

## 🛠️ Tecnologías Utilizadas

*   **Backend:** Node.js, Express.js
*   **Base de Datos:** MongoDB, Mongoose ODM
*   **Seguridad:** JSON Web Token (JWT), bcryptjs, CORS
*   **Frontend:** EJS (Embedded JavaScript templating), Materialize CSS, SweetAlert2 (Para alertas interactivas)

## 📋 Requisitos Previos

*   [Node.js](https://nodejs.org/) (v16.x o superior)
*   [MongoDB](https://www.mongodb.com/) (Instalado localmente en el puerto `27017` o un clúster de Atlas)

## ⚙️ Instalación y Uso

1. **Clonar el repositorio**
```bash
git clone https://github.com/Hazielcode/semana07-desarrollo-de-aplicaciones-web-avanzado.git
cd semana07-desarrollo-de-aplicaciones-web-avanzado/express-mongo-auth
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crea un archivo `.env` en la raíz del proyecto basado en `.env.example`:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=TU_SECRETO_SUPER_SEGURO
JWT_EXPIRES_IN=1h
```

4. **Ejecutar en modo Desarrollo**
```bash
npm run dev
```

El servidor inyectará automáticamente los roles base y un usuario administrador predeterminado la primera vez que se ejecute.

## 🔑 Credenciales de Acceso Administrador (Por defecto)
Al iniciar la aplicación por primera vez con la base de datos limpia, se genera el siguiente usuario administrador:

*   **Email:** `admin@empresa.com`
*   **Password:** `AdminPassword123#`

## 🛡️ Rutas de Navegación

| Ruta | Acceso | Descripción |
| :--- | :--- | :--- |
| `/signIn` | Público | Formulario de inicio de sesión |
| `/signUp` | Público | Formulario de registro con validación en tiempo real |
| `/dashboard-user` | Privado (`user`, `admin`) | Panel de bienvenida del usuario normal |
| `/dashboard-admin`| Privado (`admin`) | Panel de control de usuarios (CRUD) |
| `/profile` | Privado | Perfil de cuenta editable |
| `/403` | Público | Página de error: Permisos Insuficientes |
| `/404` | Público | Página de error: Recurso no encontrado |
