import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Inbox from './pages/Inbox';

function App() {
    return (
        <main className='h-screen w-screen  bg-main'>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/inbox' element={<Inbox />} />
            </Routes>
        </main>
    );
}

export default App;
