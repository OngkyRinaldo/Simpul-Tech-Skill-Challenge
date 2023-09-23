import SearchHomePage from '../components/search/SearchHomePage';

const MainLayout = ({ children }) => {
    return (
        // Container untuk layout utama
        <section className='container ml-auto h-full w-4/5 border-l border-[#F2F2F2]'>
            {/* Komponen pencarian di bagian atas layout */}
            <SearchHomePage />

            {/* Konten */}
            {children}
        </section>
    );
};

export default MainLayout;
