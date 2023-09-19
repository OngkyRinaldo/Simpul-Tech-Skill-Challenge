import DetailsComponent from '../components/DetailsComponent';
import SearchHomePage from '../components/serach/SearchHomePage';

const InboxDetails = () => {
    return (
        <section className='container ml-auto h-full w-4/5 border-l border-[#F2F2F2]'>
            <SearchHomePage />
            <DetailsComponent />
        </section>
    );
};

export default InboxDetails;
