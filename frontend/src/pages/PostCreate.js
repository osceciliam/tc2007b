// Componente para crear posts (sólo administradores)

import { usePermissions, Create, SimpleForm, TextInput, useRedirect } from 'react-admin';
import { useEffect } from 'react';

const PostCreate = (props) => {
    const { permissions } = usePermissions();
    const redirect = useRedirect();

    useEffect(() => {
        if (permissions !== 'administrador') {
            redirect('/'); // Redirigir a la página principal si no es administrador
        }
    }, [permissions, redirect]);

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <TextInput source="content" />
            </SimpleForm>
        </Create>
    );
};

export default PostCreate;
