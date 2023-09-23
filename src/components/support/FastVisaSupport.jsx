import { Link } from 'react-router-dom';
import Ellipse8Icon from '../../assets/icons/buttons/Ellipse8.svg';
import inboxIcon from '../../assets/icons/buttons/inboxIcon.svg';
import Task from '../button/menu/Task';
import SupportModal from './SupportModal';
import MainLayout from '../../layouts/MainLayout';

const FastVisaSupport = () => {
    return (
        <MainLayout>
            <SupportModal />

            {/* Tampilan menu dan tombol Inbox */}
            <div className='flex justify-center items-center gap-x-8 absolute bottom-[33px] right-10 '>
                {/* Komponen Task */}
                <Task />

                {/* Komponen Inbox */}
                <div className='flex flex-col '>
                    {/* Judul halaman */}
                    <p className='text-[#f2f2f2] mb-4 text-center'>Inbox</p>

                    {/* Tombol kembali ke halaman utama */}
                    <Link to='/'>
                        <img
                            src={Ellipse8Icon}
                            alt='Ellipse8.svg'
                            className='absolute -bottom-1 lg:bottom-0  right-1 xl:right-5  test active
                            w-16  h-14 xl:h-16 '
                        />
                    </Link>

                    {/* Tombol Inbox */}
                    <Link
                        to='/inbox'
                        className='bg-white text-indicator-Apricot w-12 h-12 xl:w-[60px] xl:h-[60px]  flex items-center justify-center p-[6px] rounded-full z-10'
                    >
                        <img src={inboxIcon} alt='inboxIcon.svg' />
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
};

export default FastVisaSupport;
