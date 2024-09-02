// Dashboard para el rol "administrador"

import { List, Datagrid, TextField, TopToolbar, CreateButton } from 'react-admin';
import { EditButton, DeleteButton } from 'react-admin';

// Componente para mostrar las acciones de administrador (botón de crear)
const AdminActions = () => (
    <TopToolbar>
        <CreateButton /> {/* Mostrar botón de creación sólo para 'administrador' */}
    </TopToolbar>
);

const AdminDashboard = () => {
    return (
        <List
            resource="posts"
            actions={<AdminActions />} // Mostrar acciones de administrador
        >
            <Datagrid>
                <TextField source="title" />
                <TextField source="content" />
                <EditButton /> {/* Mostrar botón de editar para 'administrador' */}
                <DeleteButton /> {/* Mostrar botón de eliminar para 'administrador' */}
            </Datagrid>
        </List>
    );
};

export default AdminDashboard;
