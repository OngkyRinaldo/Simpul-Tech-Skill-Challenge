import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Inbox from './pages/Inbox';
import NotFound from './pages/404';
import InboxDetails from './pages/InboxDetail';

function App() {
    return (
        <main className='h-screen w-screen bg-main 3xl:h-screen 3xl:w-screen  '>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='inbox' element={<Inbox />} />
                <Route path='detailMessage' element={<InboxDetails />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default App;
