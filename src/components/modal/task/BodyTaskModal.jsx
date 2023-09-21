import { useEffect, useState } from 'react';
import arrowExpand from '../../../assets/icons/modal/expand.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchTaskDataLocally,
    selectAllTaskData,
    selectStatusTaskData,
} from '../../../feature/taskSlice';
import chatOptions from '../../../assets/icons/buttons/chats/3dots.svg';
import schedule from '../../../assets/icons/schedule_24px.svg';
import pencil from '../../../assets/icons/pencil.svg';
import mainLoading from '../../../assets/icons/main-loading.svg';

const BodyTaskModal = () => {
    const dispatch = useDispatch();
    const taskData = useSelector(selectAllTaskData);
    const status = useSelector(selectStatusTaskData);

    // Initialize isOpen as an array with the same length as taskData
    const [isOpen, setIsOpen] = useState(
        new Array(taskData.length).fill(false)
    );

    useEffect(() => {
        dispatch(fetchTaskDataLocally());
    }, [dispatch]);

    const toggleAccordion = (index) => {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    };

    return (
        <div className='w-72 h-96 sm:w-96 md:min-w-[550px] 3xl:w-modalWidth 3xl:h-modalHeight bg-white p-5 xl:pl-[29px] xl:pr-[22px] xl:pt-[19px] rounded-b-md overflow-scroll'>
            {status === 'loading' ? (
                <div className='w-full flex justify-center items-center mt-2 3xl:mt-64'>
                    <img src={mainLoading} alt='main-loading.svg' />
                </div>
            ) : (
                <>
                    {taskData.slice(0, 3).map((task, index) => (
                        <div className='mt-6' key={task.id}>
                            <div className='flex justify-between items-center '>
                                <div className='flex justify-center items-center gap-x-1 lg:gap-x-3'>
                                    <input type='checkbox' />
                                    <p className='w-1/4 text-xs sm:text-sm text-primary-live font-semibold xl:max-w-[336px] 2xl:w-[336px] '>
                                        {task.title}
                                    </p>
                                    <p className='text-[#EB5757] text-xs sm:text-sm w-1/4 lg:w-36'>
                                        {task.deadlineDate}
                                    </p>
                                    <p className='text-[#4F4F4F] text-xs sm:text-sm w-1/4'>
                                        {task.date}
                                    </p>
                                    <img
                                        src={arrowExpand}
                                        alt='expand.svg'
                                        className={`lg:w-6 h-6 transform transition-transform cursor-pointer  w-1/4 ${
                                            isOpen[index] ? 'rotate-180' : ''
                                        }`}
                                        onClick={() => toggleAccordion(index)}
                                    />
                                    <img src={chatOptions} alt='3dots.svg' />
                                </div>
                            </div>

                            <div className='p-4'>
                                {isOpen[index] && (
                                    <>
                                        <div className='p-2 flex flex-col gap-y-4'>
                                            <div className='flex justify-start items-center gap-x-[18px]'>
                                                <img
                                                    src={schedule}
                                                    alt='schedule_24px.svg'
                                                />
                                                <input
                                                    type='date'
                                                    className='w-[193px] h-10 py-4 px-3 border border-primary-BattleshipGrey rounded-lg text-primary-live'
                                                    value={task.date}
                                                />
                                            </div>
                                            <div className='flex justify-start items-center gap-x-[18px]'>
                                                <img
                                                    src={pencil}
                                                    alt='pencil.svg'
                                                />
                                                <p className='text-primary-live text-sm'>
                                                    {task.task}
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                    {taskData.slice(3, 5).map((task, index) => (
                        <div className='mt-6' key={task.id}>
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-center items-center gap-x-3'>
                                    <input type='checkbox' checked />
                                    <p className='w-1/4 text-xs sm:text-sm text-primary-live font-semibold xl:max-w-[336px] 2xl:w-[336px] task-done'>
                                        {task.title}
                                    </p>
                                    <p className='text-[#EB5757] text-xs sm:text-sm w-1/4 lg:w-36'>
                                        {task.deadlineDate}
                                    </p>
                                    <p className='text-[#4F4F4F] text-xs sm:text-sm w-1/4'>
                                        {task.date}
                                    </p>
                                    <img
                                        src={arrowExpand}
                                        alt='expand.svg'
                                        className={`w-6 h-6 transform transition-transform cursor-pointer ${
                                            isOpen[index] ? 'rotate-180' : ''
                                        }`}
                                        onClick={() => toggleAccordion(index)}
                                    />
                                    <img src={chatOptions} alt='3dots.svg' />
                                </div>
                            </div>

                            <div className='p-4'>
                                {isOpen[index] && (
                                    <>
                                        <div className='p-2 flex flex-col gap-y-4 '>
                                            <div className='flex justify-start items-center gap-x-[18px]'>
                                                <img
                                                    src={schedule}
                                                    alt='schedule_24px.svg'
                                                />
                                                <input
                                                    type='date'
                                                    className='w-[193px] h-10 py-4 px-3 border border-primary-BattleshipGrey rounded-lg text-primary-live'
                                                    value={task.date}
                                                />
                                            </div>
                                            <div className='flex justify-start items-center gap-x-[18px]'>
                                                <img
                                                    src={pencil}
                                                    alt='pencil.svg'
                                                />
                                                <p className='text-primary-live'>
                                                    {task.task}
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default BodyTaskModal;
