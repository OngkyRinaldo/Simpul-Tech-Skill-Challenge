import Inbox from './button/menu/Inbox';
import Task from './button/menu/Task';

const InboxComponent = () => {
    return (
        <section className='flex justify-center items-center gap-x-8 absolute bottom-[33px] right-10 '>
            <Task />
            <Inbox />
        </section>
    );
};

export default InboxComponent;
