import BodyDetailComponent from './BodyDetailComponent';
import HeaderDetailComponent from './HeaderDetailComponent';

const DetailModal = () => {
    return (
        <div className='absolute  bottom-16 sm:bottom-40 3xl:bottom-20 right-0 '>
            <div className='w-80 3xl:min-h-[726px] lg:w-[600px]  3xl:w-modalWidth  bg-white rounded-lg '>
                <HeaderDetailComponent />
                <hr className='font-bold sm:mt-2 xl:pt-4' />
                <BodyDetailComponent />
            </div>
        </div>
    );
};

export default DetailModal;
