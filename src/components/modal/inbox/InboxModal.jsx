import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchUsers,
    selectAllUserData,
    selectStatusUserData,
} from '../../../feature/inboxSlice';
import SearchModal from '../../search/SearchModal';
import { Link } from 'react-router-dom';
import grayPersonIcon from '../../../assets/icons/modal/grayPerson.svg';
import redDotIcon from '../../../assets/icons/modal/redDot.svg';
import bluePersonIcon from '../../../assets/icons/modal/bluePerson.svg';
import fIcon from '../../../assets/icons/modal/F.svg';
import mainLoading from '../../../assets/icons/main-loading.svg';

const Modal = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUserData);
    const [searchUser, setSearchUser] = useState('');

    const status = useSelector(selectStatusUserData);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const filteredUsers = users.filter((user) =>
        user.email.toLowerCase().includes(searchUser.toLowerCase())
    );

    return (
        <div className='absolute  bottom-16 sm:bottom-16 xl:bottom-20 -right-10 sm:right-0'>
            <div className='w-fit sm:w-96 h-fit  md:min-w-[550px]  3xl:w-modalWidth 3xl:h-modalHeight bg-white  p-5 rounded-lg'>
                <SearchModal
                    searchUser={searchUser}
                    setSearchUser={setSearchUser}
                />
                {status === 'loading' ? (
                    <div className='w-full flex justify-center items-center mt-2 3xl:mt-64'>
                        <img src={mainLoading} alt='main-loading.svg' />
                    </div>
                ) : (
                    <>
                        {filteredUsers.slice(0, 1).map((user) => {
                            return (
                                <Link to='/detailMessage' key={user.id}>
                                    <div className='mt-3 gap-x-8 3xl:mt-[26px] flex justify-start items-center 3xl:gap-x-8'>
                                        <div className='flex   sm:gap-x-2 relative'>
                                            <div className='w-[34px] h-[34px] bg-primary-LavenderPinocchio flex justify-center items-center rounded-full  '>
                                                <img
                                                    src={grayPersonIcon}
                                                    alt='grayPerson.svg'
                                                />
                                            </div>
                                            <div className='w-[34px] h-[34px] bg-primary-blue flex justify-center items-center rounded-full z-10 absolute left-4'>
                                                <img
                                                    src={bluePersonIcon}
                                                    alt='bluePerson.svg'
                                                />
                                            </div>
                                        </div>
                                        <div className=' font-Lato'>
                                            <div className='flex items-center flex-col md:flex-row sm:gap-x-2 3xl:gap-x-[17px] cursor-pointer'>
                                                <p className='text-sm md:text-md  font-bold text-primary-blue '>
                                                    {user.name}
                                                </p>
                                                <p className='mr-auto text-xs md:text-md  text-primary-live'>
                                                    January 1,2021 19:30
                                                </p>
                                            </div>
                                            <p className='text-primary-live font-bold text-sm md:text-md '>
                                                {user.email}
                                            </p>
                                            <p className='text-primary-live text-sm md:text-md '>
                                                {user.body.substring(0, 30)}
                                            </p>
                                        </div>
                                        <div className='ml-auto mt-auto'>
                                            <img
                                                src={redDotIcon}
                                                alt='redDot.svg'
                                            />
                                        </div>
                                    </div>
                                    <hr className='text-primary-BattleshipGrey sm:mt-2 3xl:mt-[37px]' />
                                </Link>
                            );
                        })}
                        {filteredUsers.slice(1, 3).map((user) => {
                            return (
                                <Link to='/detailMessage' key={user.id}>
                                    <div className='mt-2 3xl:mt-[23px] flex justify-start items-center gap-x-8'>
                                        <div className='flex justify-center items-center relative '>
                                            <div className='w-[34px] h-[34px] bg-primary-blue flex justify-center items-center rounded-full absolute left-4'>
                                                <img
                                                    src={bluePersonIcon}
                                                    alt='bluePerson.svg'
                                                />
                                            </div>
                                            <div className='w-[34px] h-[34px] bg-primary-LavenderPinocchio flex justify-center items-center rounded-full '>
                                                <img
                                                    src={grayPersonIcon}
                                                    alt='grayPerson.svg'
                                                />
                                            </div>
                                        </div>
                                        <div className=' font-Lato'>
                                            <div className=' flex items-center gap-x-2 cursor-pointer flex-col lg:flex-row'>
                                                <p className=' text-xs sm:text-sm 3xl:text-md font-bold text-primary-blue'>
                                                    {user.name}
                                                </p>
                                                <p className='mr-auto text-xs text-primary-live'>
                                                    02/06/2021 10:45
                                                </p>
                                            </div>
                                            <p className='text-primary-live font-bold text-sm'>
                                                {user.email}
                                            </p>
                                            <p className='text-primary-live text-sm'>
                                                {user.body.substring(0, 30)}
                                            </p>
                                        </div>
                                    </div>
                                    <hr className='text-primary-BattleshipGrey sm:mt-2 3xl:mt-[37px]' />
                                </Link>
                            );
                        })}

                        {filteredUsers.slice(3, 4).map((user) => {
                            return (
                                <Link to='/FastVisaSupport' key={user.id}>
                                    <div className='mt-2 3xl:mt-[23px] flex justify-start items-center gap-x-16'>
                                        <div className='flex justify-center items-center relative '>
                                            <div className='w-[34px] h-[34px] bg-primary-blue flex justify-center items-center rounded-full absolute left-4'>
                                                <img src={fIcon} alt='F.svg' />
                                            </div>
                                        </div>
                                        <div className=' font-Lato'>
                                            <div className='flex items-center flex-col lg:flex-row gap-x-2 cursor-pointer'>
                                                <p className='mr-auto text-xs sm:text-sm 3xl:text-md font-bold text-primary-blue'>
                                                    FastVisa Support
                                                </p>
                                                <p className='mr-auto text-xs text-primary-live'>
                                                    01/06/2021 12:19
                                                </p>
                                            </div>

                                            <p className='text-primary-live text-sm'>
                                                Hey there! Welcome to your
                                                inbox.
                                            </p>
                                        </div>
                                    </div>
                                    <hr className='text-primary-BattleshipGrey sm:mt-2 3xl:mt-[37px]' />
                                </Link>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
