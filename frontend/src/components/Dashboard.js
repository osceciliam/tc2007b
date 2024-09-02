// Este archivo gestiona las redirecciones según el tipo de rol "administrador" o "lector"

import { usePermissions, Loading } from 'react-admin';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { permissions, isLoading } = usePermissions();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading) {
            if (permissions === 'administrador') {
                navigate('/admin-dashboard'); // Redirigir a AdminDashboard
            } else if (permissions === 'lector') {
                navigate('/reader-dashboard'); // Redirigir a ReaderDashboard
            } else {
                navigate('/'); // O cualquier otra ruta de fallback
            }
        }
    }, [isLoading, permissions, navigate]);

    if (isLoading) return <Loading />;
    return null; // No mostrar nada mientras se completa la redirección
};

export default Dashboard;
