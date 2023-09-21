import { useState } from 'react';
import chatOptions from '../../../assets/icons/buttons/chats/3dots.svg';
import { Link } from 'react-router-dom';

const BodyDetailComponent = () => {
    const [showButtons, setShowButtons] = useState(true);
    const [newMessage, setNewMessage] = useState(false);
    const handleButtonClick = () => {
        setShowButtons(!showButtons);
    };
    const handleNewMessage = () => {
        setNewMessage(!newMessage);
    };
    return (
        <div className='max-h-64 3xl:max-h-[554px] overflow-scroll flex flex-col items-between font-Lato px-5'>
            <div className='text-start ml-auto'>
                <h2 className=' text-right text-chats-lavenderIndigo'>You</h2>

                <div className='flex items-start justify-end gap-4 max-w-[411px]'>
                    <div className='cursor-pointer'>
                        <img src={chatOptions} alt='3dots.svg' />
                    </div>

                    <div className='max-w-[70%] bg-chats-lavenderMist rounded-lg px-2 py-4 text-slate-600'>
                        <p className='pt-2'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ipsam, in.
                        </p>
                        <p className='pt-2 text-xs'>19:32</p>
                    </div>
                </div>
            </div>
            <div className='mt-5 w-full relative flex items-center'>
                <div className='flex-1 h-0.5 bg-gray-300'></div>
                <h3 className='mx-4 text-gray-600 font-bold'>
                    Today June 09,2021
                </h3>
                <div className='flex-1 h-0.5 bg-gray-300'></div>
            </div>
            <div className='mr-auto  '>
                <h2 className=' text-left text-chats-indianYellow'>
                    Mary Hilda
                </h2>
                <div className='flex items-start justify-start gap-4 '>
                    <div className='w-2/3 bg-chats-oasis rounded-lg px-2 py-2 text-slate-600'>
                        <p className='pt-2'>
                            Hello Obaidullah, I will be your case advisor for
                            case #029290. I have assigned some homework for you
                            to fill. Please keep up with the due dates. Should
                            you have any questions, you can message me anytime.
                            Thanks.
                        </p>
                        <p className='pt-2 text-xs'>19:32</p>
                    </div>

                    <div className='cursor-pointer'>
                        <img src={chatOptions} alt='3dots.svg' />
                    </div>
                </div>
            </div>

            <div className='text-start ml-auto'>
                <h2 className=' text-right text-chats-lavenderIndigo'>You</h2>

                <div className='flex items-start justify-end gap-4 relative '>
                    {showButtons && (
                        <div className='absolute right-20 top-5 md:right-64 md:top-4 3xl:right-96 3xl:top-6 z-10 w-[126px] shadow bg-white border text-center '>
                            <Link className='p-2 text-primary-blue'>Edit</Link>
                            <hr />
                            <Link className='p-2 text-[#EB5757]'>Delete</Link>
                        </div>
                    )}
                    <div className='cursor-pointer '>
                        <img
                            src={chatOptions}
                            alt='3dots.svg'
                            onClick={handleButtonClick}
                        />
                    </div>
                    <div className='w-2/3 bg-chats-lavenderMist rounded-lg px-2 text-slate-600 p-3'>
                        <p className='pt-2'>
                            Please contact Mary for questions regarding the case
                            bcs she will be managing your forms from now on!
                            Thanks Mary.
                        </p>
                        <p className='pt-2 text-xs'>19:32</p>
                    </div>
                </div>
            </div>

            <div className='mr-auto  '>
                <h2 className=' text-left text-chats-indianYellow'>
                    Mary Hilda
                </h2>
                <div className='flex items-start justify-start gap-4 '>
                    <div className='w-fit bg-chats-oasis rounded-lg px-2 py-2 text-slate-600'>
                        <p className='pt-2'>Sure thing, Claren</p>
                        <p className='pt-2 text-xs'>19:32</p>
                    </div>
                    <div className='cursor-pointer'>
                        <img src={chatOptions} alt='3dots.svg' />
                    </div>
                </div>
            </div>

            <div className='mx-auto mt-3 py-5'>
                <button
                    className='py-2 px-3 bg-[#E9F3FF] text-primary-blue cursor-pointer'
                    onClick={handleNewMessage}
                >
                    New Message
                </button>
            </div>

            {newMessage && (
                <>
                    <div className='mt-5 w-full relative flex items-center'>
                        <div className='flex-1 h-0.5 bg-[#EB5757]'></div>
                        <h3 className='mx-4 text-[#EB5757] font-bold'>
                            New Message
                        </h3>
                        <div className='flex-1 h-0.5 bg-[#EB5757]'></div>
                    </div>

                    <div className='mr-auto  '>
                        <h2 className=' text-left text-chats-mint'>
                            Obaidullah Amarkhil
                        </h2>
                        <div className='flex items-start justify-start gap-4 '>
                            <div className='w-full bg-chats-mintTulip rounded-lg px-2 py-2 text-slate-600'>
                                <p className='pt-2'>
                                    Morning. I’ll try to do them. Thanks
                                </p>
                                <p className='pt-2 text-xs'>19:32</p>
                            </div>
                            <div className='cursor-pointer'>
                                <img src={chatOptions} alt='3dots.svg' />
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className=' flex justify-between items-center mt-5 gap-x-4'>
                <input
                    type='text'
                    className='w-[580px] h-10 border border-primary-BattleshipGrey focus:outline-none text-main font-bold py-2 pl-4 rounded-lg'
                    placeholder='Type a new message'
                />

                <button className='px-4 py-2 bg-primary-blue text-white rounded-lg'>
                    Send
                </button>
            </div>
        </div>
    );
};

export default BodyDetailComponent;
