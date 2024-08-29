import './App.css';
import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import authProvider from './utils/authProvider';
import dataProvider from './dataProvider/dataProvider';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import history from './utils/history';

const App = () => (
    <Admin
        history={history}
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}
        loginPage={LoginPage}  // Aquí aseguramos que se utilice nuestra página de login
    >
        {/* Añadir un recurso mínimo para evitar el mensaje de bienvenida predeterminado */}
        <Resource name="posts" /> 
    </Admin>
);

export default App;
