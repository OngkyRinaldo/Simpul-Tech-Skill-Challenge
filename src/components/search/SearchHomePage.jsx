import searchHomePageIcon from '../../assets/icons/Buttons/searchHomePage.svg';

const SearchHomePage = () => {
    return (
        <section className='relative '>
            <input
                type='text'
                className='border-none focus:outline-none  bg-primary-live w-full  h-[58px]'
            />
            <div className='absolute inset-y-0 flex items-center pointer-events-none pl-paddingLeftHomeSearch pt-paddingTopHomeSearch pb-paddingBottomHomeSearch'>
                <img src={searchHomePageIcon} alt='searchHomePage.svg' />
            </div>
        </section>
    );
};

export default SearchHomePage;
