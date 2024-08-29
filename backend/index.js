const express = require('express'); // Framework web para Node.js
const https = require('https'); // Para crear un servidor HTTPS
const fs = require('fs'); // Maneja archivos del sistema
const cors = require('cors'); // Maneja Cross-Origin Resource Sharing (CORS)
const helmet = require('helmet'); // Paquete para manejar encabezados de seguridad
const connectDB = require('./config/db'); // Función para conectar a la base de datos
const userRoutes = require('./routes/userRoutes'); // Rutas para usuarios
const postRoutes = require('./routes/postRoutes'); // Rutas para posts

require('dotenv').config(); // Cargar variables de entorno

// Inicializar aplicación Express
const app = express();
const PORT = process.env.PORT || 5000;


// Conectar a la base de datos
connectDB();

// Middleware de seguridad
/* app.use(helmet()); // Aplicar configuraciones básicas de seguridad
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://localhost:3000"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "https://localhost:5001"],
            connectSrc: ["'self'", "https://localhost:5001"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: [],
        },
    })
); */

// Middleware
app.use(express.json());
console.log('Middleware express.json() configurado correctamente');
app.use(cors({
    origin: 'https://localhost:3000', 
    //origin: 'http://localhost:3000',
    exposedHeaders: ['X-Total-Count'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Ruta para probar el backend en el navegador
//app.get('/', (req, res) => {
//    res.send('Hello World - TC2007B!'); // Mensaje que se verá en la ventana del navegador
//});

app.use((req, res, next) => {
    console.log('Middleware de prueba:');
    console.log('Request Method:', req.method);
    console.log('Request URL:', req.url);
    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body); // Esto debería mostrar el cuerpo de la solicitud
    next();
});

// Rutas
app.use('/api/users', userRoutes); // Prefijo de rutas para usuarios
app.use('/api/posts', postRoutes); // Prefijo de rutas para posts

// Leer certificados SSL
const privateKey = fs.readFileSync('../certs/server.key', 'utf8');
const certificate = fs.readFileSync('../certs/server.crt', 'utf8');
const ca = fs.readFileSync('../certs/ca/ca.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate, ca: ca };

//Servidor HTTPS
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(PORT, () => console.log(`Server running on port ${PORT} with HTTPS`));
//app.listen(PORT, () => console.log(`Server running on port ${PORT} with HTTP`));