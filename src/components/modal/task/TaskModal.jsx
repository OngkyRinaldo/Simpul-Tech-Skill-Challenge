import { useDispatch, useSelector } from 'react-redux';
import HeaderTaskModal from './HeaderTaskModal';
import {
    fetchTaskDataLocally,
    selectAllTaskData,
    selectStatusTaskData,
} from '../../../feature/taskSlice';
import { useEffect } from 'react';

const TaskModal = () => {
    const dispatch = useDispatch();
    const taskData = useSelector(selectAllTaskData);
    const taskStatus = useSelector(selectStatusTaskData);

    useEffect(() => {
        dispatch(fetchTaskDataLocally);
    }, [dispatch]);
    return (
        <div className='absolute  bottom-16 sm:bottom-16 xl:bottom-20 -right-10 sm:right-0'>
            <HeaderTaskModal />

            <div className='bg-white w-full'>
                <div className='flex'>
                    <input type='checkbox' />

                    <h2>Close off Case #012920- RODRIGUES, Amiguel</h2>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
