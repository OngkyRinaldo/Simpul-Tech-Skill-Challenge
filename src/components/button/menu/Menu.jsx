import Inbox from './Inbox';
import Start from './Start';
import Task from './Task';

const Menu = () => {
    return (
        <section className='flex justify-center items-center gap-x-8 absolute bottom-[27px] right-[61px] '>
            <Task />
            <Inbox />
            <Start />
        </section>
    );
};

export default Menu;
