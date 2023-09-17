const Task = () => {
    return (
        <div className='flex flex-col '>
            <p className='text-[#f2f2f2] mb-4 text-center'>Task</p>
            <button className='bg-white text-indicator-Apricot w-[60px] h-[60px] flex items-center justify-center p-4 rounded-full '>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='28'
                    height='28'
                    viewBox='0 0 28 28'
                    fill='none'
                    className='w-14 h-14'
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M4.11114 4.66675H24.1111C25.3334 4.66675 26.3334 5.66675 26.3334 6.88897V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88897C1.88892 5.66675 2.88892 4.66675 4.11114 4.66675ZM4.11114 6.88897V21.3334H13V6.88897H4.11114ZM24.1111 21.3334H15.2222V6.88897H24.1111V21.3334ZM23 10.7779H16.3334V12.4445H23V10.7779ZM16.3334 13.5556H23V15.2223H16.3334V13.5556ZM23 16.3334H16.3334V18.0001H23V16.3334Z'
                        fill='#F8B76B'
                    />
                </svg>
            </button>
        </div>
    );
};

export default Task;
