import Inbox from '../components/button/menu/Inbox';
import Task from '../components/button/menu/Task';
import MainLayout from '../layouts/MainLayout';

const TaskPage = () => {
    return (
        <MainLayout>
            <div className='flex justify-center items-center gap-x-8 absolute bottom-[33px] right-10 '>
                <Inbox />
                <Task />
            </div>
        </MainLayout>
    );
};

export default TaskPage;
