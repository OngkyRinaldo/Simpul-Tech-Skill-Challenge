import { Link } from 'react-router-dom';
import arrowReturnIcon from '../../assets/icons/buttons/detailButton/arrowReturn.svg';
import closeModalIcon from '../../assets/icons/buttons/detailButton/closeModal.svg';

const HeaderDetailComponent = () => {
    return (
        <div className='flex justify-between items-center  p-5'>
            <div className='flex gap-x-[15px]'>
                <Link to='/messageList'>
                    <img
                        src={arrowReturnIcon}
                        alt='arrowReturn.svg'
                        className='cursor-pointer'
                    />
                </Link>

                <div className=''>
                    <h2 className='font-bold text-primary-blue'>
                        I-589 - AMARKHIL, Obaidullah [Affirmative Filing with
                        ZHN]
                    </h2>
                    <p className='text-main text-sm mt-2'>3 Participant</p>
                </div>
            </div>

            <Link to='/inbox'>
                <img
                    src={closeModalIcon}
                    alt='closeModal.svg'
                    className='cursor-pointer'
                />
            </Link>
        </div>
    );
};

export default HeaderDetailComponent;
