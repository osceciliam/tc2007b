// Dashboard para el rol "lector"

import { List, Datagrid, TextField } from 'react-admin';

const ReaderDashboard = () => (
    <List
        resource="posts"
        bulkActionButtons={false} // Deshabilitar checkbox de selección múltiple para lectores
        actions={null} // Eliminar barra de herramientas superior para lectores
    >
        <Datagrid rowClick="show"> {/* Restringir acción de click en la fila */}
            <TextField source="title" />
            <TextField source="content" />
        </Datagrid>
    </List>
);

export default ReaderDashboard;
