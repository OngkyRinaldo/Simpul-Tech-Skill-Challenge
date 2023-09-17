const SearchModal = () => {
    return (
        <div className='relative p-5'>
            <input
                type='text'
                placeholder='Search...'
                className='border border-gray-300  py-2 pr-10 pl-4 rounded-md focus:outline-none w-full placeholder:text-[#333] '
            />
            <div className='absolute inset-y-0 right-5 pr-3 flex items-center pointer-events-none'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='13'
                    height='12'
                    viewBox='0 0 13 12'
                    fill='none'
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M8.21143 7.54717H8.75345L12.1771 10.9777L11.1548 12L7.72429 8.57633V8.03431L7.53905 7.8422C6.75688 8.51458 5.74145 8.91938 4.63682 8.91938C2.17369 8.91938 0.177124 6.92281 0.177124 4.45969C0.177124 1.99657 2.17369 0 4.63682 0C7.09994 0 9.09651 1.99657 9.09651 4.45969C9.09651 5.56432 8.6917 6.57976 8.01932 7.36192L8.21143 7.54717ZM1.54933 4.4597C1.54933 6.16811 2.92841 7.54718 4.63681 7.54718C6.34522 7.54718 7.72429 6.16811 7.72429 4.4597C7.72429 2.7513 6.34522 1.37222 4.63681 1.37222C2.92841 1.37222 1.54933 2.7513 1.54933 4.4597Z'
                        fill='#333333'
                    />
                </svg>
            </div>
        </div>
    );
};

export default SearchModal;
