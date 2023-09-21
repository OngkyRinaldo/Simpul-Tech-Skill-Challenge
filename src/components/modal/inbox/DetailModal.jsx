import BodyDetailComponent from './BodyDetailComponent';
import HeaderDetailComponent from './HeaderDetailComponent';

const DetailModal = () => {
    return (
        <div className='absolute  bottom-16 sm:bottom-16 xl:bottom-20  -right-10 sm:right-0'>
            <div className='w-80 3xl:min-h-[726px] lg:w-[600px]  3xl:w-modalWidth  bg-white rounded-lg p-3'>
                <HeaderDetailComponent />
                <hr className='font-bold sm:mt-2 xl:pt-4' />
                <BodyDetailComponent />
            </div>
        </div>
    );
};

export default DetailModal;