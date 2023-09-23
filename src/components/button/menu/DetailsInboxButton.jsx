import { Link } from 'react-router-dom';
import Ellipse8Icon from '../../../assets/icons/buttons/Ellipse8.svg';
import inboxIcon from '../../../assets/icons/buttons/inboxIcon.svg';
import DetailModal from '../../modal/inbox/DetailModal';

const Inbox = () => {
    return (
        <>
            <DetailModal />

            <div className='flex flex-col'>
                <p className='text-[#f2f2f2] mb-4 text-center'>Inbox</p>
                <Link to='/'>
                    <img
                        src={Ellipse8Icon}
                        alt='Ellipse8.svg'
                        className='absolute -bottom-1 lg:bottom-0 right-1 xl:right-5 test active w-16 h-14 xl:h-16'
                    />
                </Link>

                <Link
                    to='/inbox'
                    className='bg-white text-indicator-Apricot w-12 h-12 xl:w-[60px] xl:h-[60px] flex items-center justify-center p-[6px] rounded-full z-10'
                >
                    <img src={inboxIcon} alt='inboxIcon.svg' />
                </Link>
            </div>
        </>
    );
};

export default Inbox;
