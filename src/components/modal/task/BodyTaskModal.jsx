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

    // State untuk mengelola tombol Delete
    const [deleteOptions, setDeleteOptions] = useState(
        new Array(taskData.length).fill(false)
    );

    // State untuk mengelola status tampilan ekspansi
    const [isOpen, setIsOpen] = useState(
        new Array(taskData.length).fill(false)
    );

    // State untuk mengelola status checkbox
    const [taskStatus, setTaskStatus] = useState(
        new Array(taskData.length).fill('not done')
    );

    useEffect(() => {
        dispatch(fetchTaskDataLocally());
    }, [dispatch]);

    const toggleAccordion = (index) => {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    };

    const handleCheckList = (index) => {
        const newTaskStatus = [...taskStatus];
        newTaskStatus[index] =
            newTaskStatus[index] === 'done' ? 'not done' : 'done';
        setTaskStatus(newTaskStatus);
    };

    const handleDelete = (index) => {
        const newDeleteOptions = [...deleteOptions];
        newDeleteOptions[index] = !newDeleteOptions[index];
        setDeleteOptions(newDeleteOptions);
    };

    return (
        <div className='w-72 h-96 sm:w-96 md:min-w-[550px] 3xl:w-modalWidth 3xl:h-modalHeight bg-white xl:pl-[29px] xl:pr-[22px] lg:pt-4 3xl:pt-[19px] rounded-b-md overflow-scroll'>
            {status === 'loading' ? (
                <div className='w-full flex justify-center items-center mt-2 3xl:mt-64'>
                    <img src={mainLoading} alt='main-loading.svg' />
                </div>
            ) : (
                <>
                    {taskData.map((task, index) => (
                        <div className='mt-2 p-2' key={task.id}>
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-center items-center gap-x-3'>
                                    {/* Checkbox */}
                                    <input
                                        type='checkbox'
                                        checked={taskStatus[index] === 'done'}
                                        onChange={() => handleCheckList(index)}
                                    />
                                    {/* Judul Tugas */}
                                    <p
                                        className={`w-1/4 text-xs sm:text-sm text-primary-live font-semibold xl:max-w-[336px] 2xl:w-[336px] ${
                                            taskStatus[index] === 'done'
                                                ? 'task-done'
                                                : ''
                                        }`}
                                    >
                                        {task.title}
                                    </p>
                                    {/* Deadline Tugas */}
                                    <p className='text-[#EB5757] text-xs sm:text-sm w-1/4 lg:w-36'>
                                        {task.deadlineDate}
                                    </p>
                                    {/* Tanggal Tugas */}
                                    <p className='text-[#4F4F4F] text-xs sm:text-sm w-1/4'>
                                        {task.date}
                                    </p>
                                    {/* Tombol Ekspansi */}
                                    <img
                                        src={arrowExpand}
                                        alt='expand.svg'
                                        className={`w-6 h-6 transform transition-transform cursor-pointer ${
                                            isOpen[index] ? 'rotate-180' : ''
                                        }`}
                                        onClick={() => toggleAccordion(index)}
                                    />
                                    {/* Tombol Edit */}
                                    <img
                                        src={chatOptions}
                                        alt='3dots.svg'
                                        onClick={() => handleDelete(index)}
                                        className='cursor-pointer'
                                    />
                                </div>
                            </div>

                            <hr className='border-t-2 border-gray-300 my-4' />

                            <div className='px-4 py-1'>
                                {isOpen[index] && (
                                    <>
                                        <div className='p-2 flex flex-col gap-y-4'>
                                            <div className='flex justify-start items-center gap-x-[18px]'>
                                                {/* Ikon Schedule */}
                                                <img
                                                    src={schedule}
                                                    alt='schedule_24px.svg'
                                                />
                                                {/* Input Tanggal */}
                                                <input
                                                    type='date'
                                                    className='w-[193px] h-10 py-4 px-3 border border-primary-BattleshipGrey rounded-lg text-primary-live'
                                                    value={task.date}
                                                />
                                                {deleteOptions[index] && (
                                                    <>
                                                        {/* Tombol Delete (hanya tampil jika checkbox belum selesai) */}
                                                        {taskStatus[index] !==
                                                            'done' && (
                                                            <div
                                                                className={`ml-auto text-center border border-main py-2 px-5 rounded-lg lg:w-32 ${
                                                                    deleteOptions[
                                                                        index
                                                                    ]
                                                                        ? 'hide'
                                                                        : ''
                                                                }`}
                                                            >
                                                                <button
                                                                    className='text-[#EB5757]'
                                                                    onClick={() =>
                                                                        handleCheckList(
                                                                            index
                                                                        )
                                                                    }
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                            <div className='flex justify-start items-center gap-x-[18px]'>
                                                {/* Ikon Pencil */}
                                                <img
                                                    src={pencil}
                                                    alt='pencil.svg'
                                                />
                                                {/* Isi Tugas (dapat diedit) */}
                                                <p className='text-sm lg:text-base text-primary-live'>
                                                    {task.task}
                                                </p>
                                            </div>
                                        </div>
                                        <hr className='border-t-2 border-gray-300 my-4' />
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
