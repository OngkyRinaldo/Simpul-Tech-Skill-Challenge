import { Link } from 'react-router-dom';
import taskIcon from '../../../assets/icons/buttons/taskIcon.svg';
import { useState } from 'react';
import Ellipse8Icon from '../../../assets/icons/buttons/Ellipse8.svg';
import TaskModal from '../../modal/task/TaskModal';

const Task = () => {
    const [showButtons, setShowButtons] = useState(false);
    const handleButtonClick = () => {
        setShowButtons(!showButtons);
    };
    return (
        <div to='/task' className='flex flex-col '>
            {showButtons && (
                <>
                    <Link to='/'>
                        <img
                            src={Ellipse8Icon}
                            alt='Ellipse8.svg'
                            className='absolute -bottom-1 lg:bottom-0  right-1 xl:right-5  test active
                            w-16  h-14 xl:h-16 '
                        />
                    </Link>
                    <TaskModal />
                </>
            )}
            <p className='text-[#f2f2f2] mb-4 text-center'>Task</p>
            <Link
                to='/task'
                className={`bg-white text-indicator-Apricot w-12 h-12 xl:w-[60px] xl:h-[60px] flex items-center justify-center p-4 rounded-full ${
                    showButtons ? 'z-10' : 'z-0'
                }`}
                onClick={handleButtonClick}
            >
                <img src={taskIcon} alt='taskIcon.svg' />
            </Link>
        </div>
    );
};

export default Task;
