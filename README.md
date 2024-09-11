# Proyecto TC2007B - Backend con Node.js y MongoDB + Frontend en React-Admin

Este proyecto es un ejemplo práctico para mostrar a los alumnos de la materia **TC2007B** cómo implementar un **backend con Node.js** que se conecta a una base de datos **MongoDB**, así como la creación de un **frontend con React-Admin**. El proyecto incluye autenticación mediante **JWT**, control de acceso, gestión de roles, seguridad en tránsito con **HTTPS** usando certificados autofirmados, y otras prácticas de seguridad como el **hasheo de contraseñas**.

## Tabla de Contenidos
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requerimientos](#requerimientos)
- [Instalación](#instalación)
- [Variables de Entorno](#variables-de-entorno)
- [Ejecución](#ejecución)
- [Ramas y Funcionalidades](#ramas-y-funcionalidades)

## Descripción del Proyecto

El propósito de este proyecto es enseñar a los estudiantes cómo integrar un backend en Node.js que interactúe con una base de datos MongoDB, implementar un frontend con React-Admin, gestionar el acceso a recursos a través de autenticación y roles, y mejorar la seguridad del proyecto usando certificados autofirmados para HTTPS, entre otros elementos.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

Carpeta-raíz/
├── frontend/            # Código del frontend construido con React-Admin
└── backend/             # Código del backend en Node.js y MongoDB

### Estructura del backend:

backend/
├── config/              # Configuraciones (como conexión a la base de datos)
├── controllers/         # Lógica de los controladores (CRUD, autenticación)
├── middlewares/         # Middlewares (como verificación JWT)
├── models/              # Modelos de datos (Post, User)
├── routes/              # Definición de rutas (endpoints API)
├── .env                 # Variables de entorno
└── index.js             # Entrada principal del servidor

### Estructura del frontend:

frontend/
├── src/
│   ├── components/      # Componentes principales (Dashboard, Login)
│   ├── pages/           # Páginas para diferentes roles (Admin, Lector)
│   ├── utils/           # Proveedores de datos y autenticación
│   ├── App.js           # Aplicación principal de React-Admin
│   └── config.js        # Configuraciones (como la URL del API)
└── package.json         # Dependencias del frontend

## Requerimientos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- **Node.js** v14 o superior
- **MongoDB** v4.4 o superior
- **Git**
- **npm** (generalmente incluido con Node.js)

## Instalación

### Paso 1: Clonar el repositorio

Clona el repositorio desde GitHub:
```bash
git clone https://github.com/osceciliam/tc2007b.git
```

Asegurate de estar dentro de la carpeta raíz del proyecto clonado. Deberás poder ver las carpetas "backend" y "frontend":
```bash
cd tc2007b
ls -l
``` 

Ejecuta el siguiente comando dentro de la carpeta raíz del proyecto clonado, esto te descargará todas las ramas:
```bash
git fetch --all
```

Verifica que ya tengas todas las ramas:
```bash
git branch -a
```

### Paso 2: Instalar las dependencias

#### Backend:
Navega a la carpeta del backend e instala las dependencias:

```bash
cd backend
npm install
```

#### Frontend:
Luego, instala las dependencias del frontend:

```bash
cd ../frontend
npm install
```

### Variables de Entorno

Asegúrate de configurar las variables de entorno necesarias en el archivo `.env` del backend. Aquí tienes un ejemplo de las variables que debes definir:

MONGO_URI=mongodb://localhost:27017/tc2007b
PORT=5001
JWT_SECRET=my_super_secret_key_tcb2007b

En el frontend, la URL del backend ya está configurada en el archivo `src/config.js`:

export const API_URL = 'https://localhost:5001/api';  // o http para las ramas main y certificados

## Ejecución

### Backend:

Para ejecutar el backend, ve a la carpeta `backend` y utiliza el siguiente comando:

```bash
cd backend
node idex.js
```

Esto iniciará el servidor en `https://localhost:5001`. El backend está protegido con HTTPS utilizando certificados autofirmados para las ramas certificados y login.

### Frontend:

Para ejecutar el frontend, navega a la carpeta `frontend` y usa el siguiente comando:

```bash
cd ../frontend
npm start
```

Esto iniciará el frontend en `https://localhost:3000`, donde React-Admin interactuará con el backend.

### Probar el proyecto:

Una vez que ambas partes estén ejecutándose, puedes probar el funcionamiento desde el navegador visitando el frontend en `https://localhost:3000`. Inicia sesión con las credenciales que hayas registrado y prueba las funcionalidades de acuerdo al rol (administrador o lector).

Si tienes dudas o quieres crear tus propios usuarios, revisa el archivo auxiliar del Modulo 2 que se encuentra en Canvas.

## Ramas y Funcionalidades

El proyecto tiene varias ramas en Git que ilustran diferentes etapas de desarrollo:

- **main**: Incluye la funcionalidad básica del CRUD entre frontend y backend.
- **certificados**: Agrega soporte para HTTPS utilizando certificados autofirmados.
- **login**: Implementa autenticación, autorización, y gestión de roles. El código en esta rama corresponde al proyecto que incluye todas las funcionalidades descritas.

Puedes cambiar entre ramas utilizando el siguiente comando:

git checkout <nombre-de-la-rama>



---

Este proyecto está diseñado con fines educativos y será ampliado con más elementos de seguridad.
