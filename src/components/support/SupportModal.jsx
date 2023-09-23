import arrowReturnIcon from '../../assets/icons/buttons/detailButton/arrowReturn.svg';
import closeModalIcon from '../../assets/icons/buttons/detailButton/closeModal.svg';
import chatOptions from '../../assets/icons/buttons/chats/3dots.svg';
import { Link } from 'react-router-dom';
import loading from '../../assets/icons/Loading.svg';

const SupportModal = () => {
    return (
        <div className='absolute bottom-16 sm:bottom-40 3xl:bottom-19 right-0'>
            <div className='w-80 3xl:min-h-[726px] lg:w-[600px] 3xl:w-modalWidth bg-white rounded-md'>
                {/* Header */}
                <div className='flex justify-between items-center p-5'>
                    <div className='flex gap-x-15'>
                        {/* Tombol Kembali ke Daftar Pesan */}
                        <Link to='/messageList'>
                            <img
                                src={arrowReturnIcon}
                                alt='arrowReturn.svg'
                                className='cursor-pointer'
                            />
                        </Link>

                        {/* Judul FastVisa Support */}
                        <div>
                            <h2 className='font-bold text-primary-blue'>
                                FastVisa Support
                            </h2>
                        </div>
                    </div>

                    {/* Tombol Tutup Modal */}
                    <Link to='/inbox'>
                        <img
                            src={closeModalIcon}
                            alt='closeModal.svg'
                            className='cursor-pointer'
                        />
                    </Link>
                </div>

                {/* Garis pemisah */}
                <hr className='font-bold sm:mt-2 xl:pt-4' />

                {/* Konten Pesan */}
                <div className='max-h-64 3xl:max-h-[554px] overflow-scroll flex flex-col items-between font-Lato px-5'>
                    {/* Pesan FastVisa Support */}
                    <div className='mr-auto'>
                        <h2 className='text-left text-primary-blue'>
                            FastVisa Support
                        </h2>
                        <div className='flex items-start justify-start gap-4'>
                            <div className='w-2/3 bg-chats-oasis rounded-lg px-2 py-2 text-slate-600'>
                                <p className='pt-2'>
                                    Hey there. Welcome to your inbox! Contact us
                                    for more information and help about
                                    anything! We&apos;ll send you a response as
                                    soon as possible.
                                </p>
                                <p className='pt-2 text-xs'>19:32</p>
                            </div>

                            <div className='cursor-pointer'>
                                <img src={chatOptions} alt='3dots.svg' />
                            </div>
                        </div>
                    </div>

                    {/* Pesan Pengguna */}
                    <div className='text-start ml-auto'>
                        <h2 className='text-right text-chats-lavenderIndigo'>
                            You
                        </h2>

                        <div className='flex items-start justify-end gap-4 max-w-[411px]'>
                            <div className='cursor-pointer'>
                                <img src={chatOptions} alt='3dots.svg' />
                            </div>

                            <div className='w-fit bg-chats-lavenderMist rounded-lg px-2 py-4 text-slate-600'>
                                <p className='pt-2'>
                                    Hi, I need help with something. Can you help
                                    me?
                                </p>
                                <p className='pt-2 text-xs'>19:32</p>
                            </div>
                        </div>
                    </div>

                    {/* Pesan Loading */}
                    <div className='bg-[#E9F3FF] flex justify-start items-center p-3 mt-48'>
                        <img src={loading} alt='Loading.svg' />
                        <p>
                            Please wait while we connect you with one of our
                            team...
                        </p>
                    </div>

                    {/* Input Pesan */}
                    <div className='flex justify-between items-center mt-3 gap-x-4'>
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
            </div>
        </div>
    );
};

export default SupportModal;
