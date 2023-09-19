import HeaderDetailComponent from '../HeaderDetailComponent';

const DetailModal = () => {
    return (
        <div className='absolute  bottom-16 sm:bottom-40 3xl:bottom-20 right-0'>
            <div className='w-80 h-fit lg:w-[600px]  3xl:w-modalWidth 3xl:h-modalHeight bg-white  p-5'>
                <HeaderDetailComponent />
                <hr />
            </div>
        </div>
    );
};

export default DetailModal;
