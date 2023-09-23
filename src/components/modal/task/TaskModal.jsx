import HeaderTaskModal from './HeaderTaskModal';
import BodyTaskModal from './BodyTaskModal';

const TaskModal = () => {
    return (
        <div className='absolute bottom-16 sm:bottom-16 xl:bottom-20 -right-10 sm:right-0'>
            {/* Bagian Header Task Modal */}
            <HeaderTaskModal />

            {/* Bagian Body Task Modal */}
            <BodyTaskModal />
        </div>
    );
};

export default TaskModal;
