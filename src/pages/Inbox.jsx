import InboxComponent from '../components/Inbox.component';
import SearchHomePage from '../components/serach/SearchHomePage';

const Inbox = () => {
    return (
        <section className='container ml-auto h-full w-4/5 border-l border-[#F2F2F2]'>
            <SearchHomePage />
            <InboxComponent />
        </section>
    );
};

export default Inbox;
