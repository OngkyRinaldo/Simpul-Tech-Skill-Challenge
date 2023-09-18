import Menu from '../components/button/menu/Menu';
import SearchHomePage from '../components/serach/SearchHomePage';

const Index = () => {
    return (
        <section className='container ml-auto h-full w-4/5 border-l border-[#F2F2F2]'>
            <SearchHomePage />
            <Menu />
        </section>
    );
};

export default Index;
