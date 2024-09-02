// Componente para editar posts (sólo administradores)

import { usePermissions, Edit, SimpleForm, TextInput, useRedirect } from 'react-admin';
import { useEffect } from 'react';

const PostEdit = (props) => {
    const { permissions } = usePermissions();
    const redirect = useRedirect();

    useEffect(() => {
        if (permissions !== 'administrador') {
            redirect('/'); // Redirigir a la página principal si no es administrador
        }
    }, [permissions, redirect]);

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <TextInput source="content" />
            </SimpleForm>
        </Edit>
    );
};

export default PostEdit;
