import HeaderTaskModal from './HeaderTaskModal';
import BodyTaskModal from './BodyTaskModal';

const TaskModal = () => {
    return (
        <div className='absolute  bottom-16 sm:bottom-16 xl:bottom-20 -right-10 sm:right-0'>
            <HeaderTaskModal />
            <BodyTaskModal />
        </div>
    );
};

export default TaskModal;
