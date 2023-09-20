import DetailsInboxButton from './button/menu/DetailsInboxButton';

import Task from './button/menu/Task';

const DetailsComponent = () => {
    return (
        <div className='flex justify-center items-center gap-x-8 absolute bottom-[33px] right-10 '>
            <Task />
            <DetailsInboxButton />
        </div>
    );
};

export default DetailsComponent;
