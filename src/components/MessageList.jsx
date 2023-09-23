import inboxIcon from '../assets/icons/buttons/inboxIcon.svg';
import Ellipse8Icon from '../assets/icons/buttons/Ellipse8.svg';
import { Link } from 'react-router-dom';
import Modal from './modal/inbox/InboxModal';
import Task from './button/menu/Task';
import MainLayout from '../layouts/MainLayout';

const MessageList = () => {
    return (
        <MainLayout>
            {/* Container untuk tombol Task dan tombol Inbox */}
            <section className='flex justify-center items-center gap-x-8 absolute bottom-[33px] right-10 '>
                {/* Tombol Task */}
                <Task />

                <div className='flex flex-col '>
                    {/* Modal Inbox */}
                    <Modal />

                    {/* Tombol Kembali ke Halaman Utama */}
                    <Link to='/'>
                        <img
                            src={Ellipse8Icon}
                            alt='Ellipse8.svg'
                            className='absolute -bottom-1 lg:bottom-0  right-1 xl:right-5  test active
                            w-16  h-14 xl:h-16 '
                        />
                    </Link>

                    {/* Judul Halaman */}
                    <p className='text-[#f2f2f2] mb-4 text-center'>Inbox</p>

                    {/* Tombol Inbox */}
                    <Link
                        to='/inbox'
                        className={`bg-white text-indicator-Apricot w-12 h-12 xl:w-[60px] xl:h-[60px]  flex items-center justify-center p-[6px] rounded-full  z-10
                }`}
                    >
                        <img src={inboxIcon} alt='inboxIcon.svg' />
                    </Link>
                </div>
            </section>
        </MainLayout>
    );
};

export default MessageList;
