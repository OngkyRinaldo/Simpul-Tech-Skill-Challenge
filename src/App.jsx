import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import InboxPage from './pages/InboxPage';
import NotFound from './pages/404';
import InboxDetails from './pages/InboxDetail';
import FastVisaSupport from './components/support/FastVisaSupport';
import MessageList from './components/MessageList';
import Task from './pages/Task';

function App() {
    return (
        <main className='h-screen w-screen bg-main 3xl:h-screen 3xl:w-screen  '>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='inbox' element={<InboxPage />} />
                <Route path='messageList' element={<MessageList />} />
                <Route path='detailMessage' element={<InboxDetails />} />
                <Route path='fastVisaSupport' element={<FastVisaSupport />} />
                <Route path='task' element={<Task />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default App;
