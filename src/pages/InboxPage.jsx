import Task from '../components/button/menu/Task';
import MainLayout from '../layouts/MainLayout';
import Inbox from '../components/button/menu/Inbox';

const InboxPage = () => {
    return (
        <MainLayout>
            <div className='flex justify-center items-center gap-x-8 absolute bottom-[33px] right-10 '>
                <Task />
                <Inbox />
            </div>
        </MainLayout>
    );
};

export default InboxPage;
