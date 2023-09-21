import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const NotFound = () => {
    return (
        <MainLayout>
            <div className='text-center '>
                <h2 className='text-3xl text-red-800'>Pages NotFound</h2>
                <Link to='/' className=' text-white underline cursor-pointer'>
                    Back to Home Page
                </Link>
            </div>
        </MainLayout>
    );
};

export default NotFound;
