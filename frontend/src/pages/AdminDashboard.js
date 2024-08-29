import { Resource, ListGuesser, EditGuesser, Create, SimpleForm, TextInput } from 'react-admin';

const AdminDashboard = () => (
    <>
        <Resource
            name="posts"
            list={ListGuesser}
            edit={EditGuesser}
            create={() => (
                <Create>
                    <SimpleForm>
                        <TextInput source="title" />
                        <TextInput source="content" />
                    </SimpleForm>
                </Create>
            )}
        />
    </>
);

export default AdminDashboard;
