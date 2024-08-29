import { usePermissions, Loading } from 'react-admin';
import AdminDashboard from '../pages/AdminDashboard';
import ReaderDashboard from '../pages/ReaderDashboard';

const Dashboard = () => {
    const { permissions, isLoading } = usePermissions();

    if (isLoading) return <Loading />;

    return permissions === 'administrador' ? <AdminDashboard /> : <ReaderDashboard />;
};

export default Dashboard;
