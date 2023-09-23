import { useState } from 'react';
import expandArrow from '../../../assets/icons/modal/expand.svg';

const HeaderTaskModal = () => {
    const [showOption, setShowOption] = useState(false);
    const handleOption = () => {
        setShowOption(!showOption);
    };

    return (
        <div className='w-72 sm:w-96 h-28  md:min-w-[550px]  3xl:w-modalWidth  bg-white p-5 xl:pl-[29px] xl:pr-[22px] xl:pt-[19px] rounded-t-md'>
            <div className='flex justify-between items-center '>
                <div className='w-fit h-fit py-2 px-4  lg:w-[118px] lg:h-40px lg:py-[10px] lg:px-[14px] border border-[#828282] rounded-md'>
                    <div className='flex justify-center items-center gap-x-2'>
                        <p className='text-center text-sm'>My Task</p>

                        <img
                            src={expandArrow}
                            alt='expand.svg'
                            onClick={handleOption}
                            className='cursor-pointer'
                        />
                    </div>
                </div>

                <button className='bg-primary-blue w-fit lg:w-[118px] lg:h-40px py-2 px-4 rounded-md text-white'>
                    New Task
                </button>
            </div>
            {showOption && (
                <>
                    <div className='border border-main rounded-lg w-40 lg:w-72  absolute z-10 bg-white mt-2 cursor-pointer'>
                        <p className='py-2 pl-2 lg:py-4 lg:pl-4 text-sm lg:text-base'>
                            Personal Errands
                        </p>
                        <hr className='border-t-2 border-gray-300' />
                        <p className='py-2 pl-2 lg:py-4 lg:pl-4 text-sm lg:text-base'>
                            Urgent To-Do
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default HeaderTaskModal;
