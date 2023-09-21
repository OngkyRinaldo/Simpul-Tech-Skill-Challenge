import inboxIcon from '../assets/icons/buttons/inboxIcon.svg';

import Ellipse8Icon from '../assets/icons/buttons/Ellipse8.svg';
import { Link } from 'react-router-dom';
import Modal from '../components/modal/InboxModal';
import InboxLayout from '../layouts/InboxLayout';
import Task from './button/menu/Task';

const MessageList = () => {
    return (
        <InboxLayout>
            <section className='flex justify-center items-center gap-x-8 absolute bottom-[33px] right-10 '>
                <Task />
                <div className='flex flex-col '>
                    <Modal />

                    <Link to='/'>
                        <img
                            src={Ellipse8Icon}
                            alt='Ellipse8.svg'
                            className='absolute bottom-0  -right-1 xl:right-1 test active'
                        />
                    </Link>
                    <p className='text-[#f2f2f2] mb-4 text-center'>Inbox</p>

                    <Link
                        to='/inbox'
                        className={`bg-white text-indicator-Apricot w-12 h-12 xl:w-[60px] xl:h-[60px]  flex items-center justify-center p-[6px] rounded-full  z-10
                }`}
                    >
                        <img src={inboxIcon} alt='inboxIcon.svg' />

                        <p></p>
                    </Link>
                </div>
            </section>
        </InboxLayout>
    );
};

export default MessageList;
