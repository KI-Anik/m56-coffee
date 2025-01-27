import { Outlet } from 'react-router';
import Header from './Header';

const Layout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;