import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Inbox from './pages/Inbox';
import NotFound from './pages/404';
import InboxDetails from './pages/InboxDetail';
import FastVisaSupport from './components/support/FastVisaSupport';
import MessageList from './components/MessageList';

function App() {
    return (
        <main className='h-screen w-screen bg-main 3xl:h-screen 3xl:w-screen  '>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='inbox' element={<Inbox />} />
                <Route path='messageList' element={<MessageList />} />
                <Route path='detailMessage' element={<InboxDetails />} />
                <Route path='fastVisaSupport' element={<FastVisaSupport />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default App;
