import { Resource, ListGuesser } from 'react-admin';

const ReaderDashboard = () => (
    <>
        <Resource name="posts" list={ListGuesser} />
    </>
);

export default ReaderDashboard;
