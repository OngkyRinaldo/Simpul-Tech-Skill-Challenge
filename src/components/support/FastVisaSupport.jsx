import { Link } from 'react-router-dom';
import Ellipse8Icon from '../../assets/icons/buttons/Ellipse8.svg';
import inboxIcon from '../../assets/icons/buttons/inboxIcon.svg';
import Task from '../button/menu/Task';
import SupportModal from './SupportModal';
import SearchHomePage from '../search/SearchHomePage';

const FastVisaSupport = () => {
    return (
        <section className='container ml-auto h-full w-4/5 border-l border-[#F2F2F2]'>
            <SearchHomePage />

            <SupportModal />
            <div className='flex justify-center items-center gap-x-8 absolute bottom-[33px] right-10 '>
                <Task />
                <div className='flex flex-col '>
                    <p className='text-[#f2f2f2] mb-4 text-center'>Inbox</p>
                    <img
                        src={Ellipse8Icon}
                        alt='Ellipse8.svg'
                        className='absolute bottom-0  -right-1 xl:right-1'
                    />

                    <Link
                        to='/inbox'
                        className='bg-white text-indicator-Apricot w-12 h-12 xl:w-[60px] xl:h-[60px]  flex items-center justify-center p-[6px] rounded-full z-10'
                    >
                        <img src={inboxIcon} alt='inboxIcon.svg' />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FastVisaSupport;
