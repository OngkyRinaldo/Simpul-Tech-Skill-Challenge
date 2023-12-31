import DetailsInboxButton from '../components/button/menu/DetailsInboxButton';
import Task from '../components/button/menu/Task';
import MainLayout from '../layouts/MainLayout';

const InboxDetails = () => {
    return (
        <MainLayout>
            <div className='flex justify-center items-center gap-x-8 absolute bottom-[33px] right-10 '>
                <Task />
                <DetailsInboxButton />
            </div>
        </MainLayout>
    );
};

export default InboxDetails;
