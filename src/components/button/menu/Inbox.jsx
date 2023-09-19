import { useState } from 'react';
import InboxModal from '../../modal/InboxModal';
import inboxIcon from '../../../assets/icons/buttons/inboxIcon.svg';
import Ellipse8Icon from '../../../assets/icons/buttons/Ellipse8.svg';

const Inbox = () => {
    const [showButtons, setShowButtons] = useState(false);
    const handleButtonClick = () => {
        setShowButtons(!showButtons);
    };
    return (
        <div className='flex flex-col '>
            {showButtons && (
                <>
                    <img
                        src={Ellipse8Icon}
                        alt='Ellipse8.svg'
                        className='absolute bottom-0  -right-1 xl:right-1 '
                    />

                    <InboxModal />
                </>
            )}
            <p className='text-[#f2f2f2] mb-4 text-center'>Inbox</p>

            <button
                className={`bg-white text-indicator-Apricot w-12 h-12 xl:w-[60px] xl:h-[60px]  flex items-center justify-center p-[6px] rounded-full ${
                    showButtons ? 'z-10' : 'z-0'
                }`}
                onClick={handleButtonClick}
            >
                <img src={inboxIcon} alt='inboxIcon.svg' />
            </button>
        </div>
    );
};

export default Inbox;
