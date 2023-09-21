import SearchHomePage from '../components/search/SearchHomePage';

const InboxLayout = ({ children }) => {
    return (
        <section className='container ml-auto h-full w-4/5 border-l border-[#F2F2F2]'>
            <SearchHomePage />

            {children}
        </section>
    );
};

export default InboxLayout;
