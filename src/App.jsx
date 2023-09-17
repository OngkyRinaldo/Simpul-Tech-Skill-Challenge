import Test from './components/Test';

import Menu from './components/button/menu/Menu';
import SearchHomePage from './components/serach/SearchHomePage';

function App() {
    return (
        <main className='h-screen w-screen  bg-main'>
            <section className='container ml-auto h-full w-4/5 border-l border-[#F2F2F2]'>
                <SearchHomePage />
                <Menu />
                {/* <Test /> */}
            </section>
        </main>
    );
}

export default App;
