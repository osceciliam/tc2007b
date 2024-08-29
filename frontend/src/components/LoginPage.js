import { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { TextField, Button } from '@mui/material';
import history from '../utils/history';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleLogin = () => {
        login({ username, password })
            .then((response) => {
                const auth = JSON.parse(localStorage.getItem('auth'));
                const userRole = auth.role;

                // Redirigir basado en el rol usando el historial personalizado
                if (userRole === 'administrador') {
                    history.push('/admin-dashboard'); // Redirigir a AdminDashboard
                } else if (userRole === 'lector') {
                    history.push('/reader-dashboard'); // Redirigir a ReaderDashboard
                }
            })
            .catch(() => {
                notify('Credenciales inválidas', { type: 'warning' });
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
};

export default LoginPage;
