import Test from './components/Test';

import Menu from './components/button/menu/Menu';

function App() {
    return (
        <main className='h-screen w-screen bg-main '>
            <section className='container mx-auto h-full w-full'>
                <Menu />
                <Test />
            </section>
        </main>
    );
}

export default App;
