import { API_URL } from '../config';
//import { fetchUtils } from 'react-admin';

const authProvider = {
    login: ({ username, password }) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `${API_URL}/users/login`, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const json = JSON.parse(xhr.responseText); // Parsear la respuesta JSON
                        console.log('Response received:', json);
                        localStorage.setItem('auth', JSON.stringify({ ...json })); // Guardar el token en localStorage
                        resolve(json); // Resolver la promesa con la respuesta JSON
                    } else {
                        console.error('Login failed:', xhr.status, xhr.statusText);
                        reject(new Error('Network error')); // Rechazar la promesa si falla
                    }
                }
            };

            const requestBody = JSON.stringify({ username, password });
            console.log('Request Body:', requestBody); 
            xhr.send(requestBody); // Enviar el cuerpo de la solicitud como JSON
        });
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        return auth ? Promise.resolve(auth.role) : Promise.reject();
    },
};

export default authProvider;
