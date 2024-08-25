//Este código debe de ir en src/App.js dentro de la carpeta de frontend

// Bibliotecas necesarias de React y React-Admin
import './App.css';
import * as React from 'react'; // Importa todas las funciones de React
import { Admin, Resource, ListGuesser, EditGuesser, Create, SimpleForm, TextInput } from 'react-admin'; // Componentes principales de React-Admin
import jsonServerProvider from 'ra-data-json-server'; // Proveedor de datos para conectarse a una API RESTful

// Configura el proveedor de datos para conectarse a la API del backend
const dataProvider = jsonServerProvider('http://localhost:5001/api');

// Componente para crear un nuevo post
const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" /> {/* Campo para el título del post */}
            <TextInput source="content" /> {/* Campo para el contenido del post */}
        </SimpleForm>
    </Create>
);

// Componente principal de la aplicación
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="posts" // Nombre del recurso que coincide con la colección en MongoDB
            list={ListGuesser} // Componente para listar los posts
            edit={EditGuesser} // Componente para editar un post
            create={PostCreate} // Componente para crear un nuevo post
        />
    </Admin>
);


export default App;