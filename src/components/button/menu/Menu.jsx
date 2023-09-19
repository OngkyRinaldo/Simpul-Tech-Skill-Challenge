import { useState } from 'react';
import Task from './Task';
import Inbox from './Inbox';
import { Link } from 'react-router-dom';
import menuIcon from '../../../assets/icons/buttons/menuIcon.svg';

const Menu = () => {
    const [showButtons, setShowButtons] = useState(false);
    const handleButtonClick = () => {
        setShowButtons(!showButtons);
    };

    return (
        <section className='flex justify-center items-center gap-x-8 absolute bottom-[33px] right-10 '>
            {showButtons && (
                <div className='flex justify-center items-center gap-x-8'>
                    <Task />
                    <Link to='/inbox'>
                        <Inbox />
                    </Link>
                </div>
            )}

            <button
                className={`bg-primary-blue text-white w-12 h-12 xl:w-16 xl:h-16 flex items-center justify-center p-2 rounded-full ${
                    showButtons ? 'mt-10' : 'mt-0'
                }`}
                onClick={handleButtonClick}
            >
                <img src={menuIcon} alt='menuIcon.svg' />
            </button>
        </section>
    );
};

export default Menu;
