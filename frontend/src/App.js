// Aplicación principal
import './App.css';
import * as React from 'react';
import { Admin, Resource, CustomRoutes } from 'react-admin';
import authProvider from './utils/authProvider';
import dataProvider from './dataProvider/dataProvider';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import { Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import ReaderDashboard from './pages/ReaderDashboard';
import PostEdit from './pages/PostEdit'; 
import PostCreate from './pages/PostCreate'; 

const App = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}
        loginPage={LoginPage}
    >
        <CustomRoutes>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/reader-dashboard" element={<ReaderDashboard />} />
        </CustomRoutes>
        <Resource 
            name="posts"
            edit={PostEdit} 
            create={PostCreate} 
        />
    </Admin>
);

export default App;
