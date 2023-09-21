import expandArrow from '../../../assets/icons/modal/expand.svg';

const HeaderTaskModal = () => {
    return (
        <div className='w-72 sm:w-96 h-full  md:min-w-[550px]  3xl:w-modalWidth  bg-white p-5 xl:pl-[29px] xl:pr-[22px] xl:pt-[19px] rounded-t-md'>
            <div className='flex justify-between items-center '>
                <div className='w-fit h-fit py-2 px-4  lg:w-[118px] lg:h-40px lg:py-[10px] lg:px-[14px] border border-[#828282] rounded-md'>
                    <div className='flex justify-center items-center gap-x-2'>
                        <p className='text-center text-sm'>My Task</p>
                        <img src={expandArrow} alt='expand.svg' />
                    </div>
                </div>

                <button className='bg-primary-blue w-fit lg:w-[118px] lg:h-40px py-2 px-4 rounded-md text-white'>
                    New Task
                </button>
            </div>
        </div>
    );
};

export default HeaderTaskModal;
