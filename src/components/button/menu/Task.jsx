import { Link } from 'react-router-dom';
import taskIcon from '../../../assets/icons/buttons/taskIcon.svg';

const Task = () => {
    return (
        <Link to='/task' className='flex flex-col '>
            <p className='text-[#f2f2f2] mb-4 text-center'>Task</p>
            <button className='bg-white text-indicator-Apricot w-12 h-12 xl:w-[60px] xl:h-[60px] flex items-center justify-center p-4 rounded-full '>
                <img src={taskIcon} alt='taskIcon.svg' />
            </button>
        </Link>
    );
};

export default Task;
