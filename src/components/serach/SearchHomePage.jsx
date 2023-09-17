const SearchHomePage = () => {
    return (
        <section className='relative '>
            <input
                type='text'
                className='border border-gray-300  py-2 pl-10 pr-4 focus:outline-none bg-[#4f4f4f] w-full'
            />
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M10.7124 10.0629H11.4351L16 14.6369L14.6369 16L10.0629 11.4351V10.7124L9.81589 10.4563C8.77301 11.3528 7.4191 11.8925 5.94625 11.8925C2.66209 11.8925 0 9.23042 0 5.94625C0 2.66209 2.66209 0 5.94625 0C9.23042 0 11.8925 2.66209 11.8925 5.94625C11.8925 7.4191 11.3528 8.77301 10.4563 9.81589L10.7124 10.0629ZM1.82959 5.94554C1.82959 8.22342 3.66835 10.0622 5.94623 10.0622C8.2241 10.0622 10.0629 8.22342 10.0629 5.94554C10.0629 3.66767 8.2241 1.82891 5.94623 1.82891C3.66835 1.82891 1.82959 3.66767 1.82959 5.94554Z'
                        fill='#F2F2F2'
                    />
                </svg>
            </div>
        </section>
    );
};

export default SearchHomePage;
