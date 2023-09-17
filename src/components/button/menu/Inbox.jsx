const Inbox = () => {
    return (
        <div className='flex flex-col '>
            <p className='text-[#f2f2f2] mb-4 text-center'>Inbox</p>
            <button className='bg-white text-indicator-Apricot w-[60px] h-[60px]  flex items-center justify-center p-[6px] rounded-full '>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='23'
                    viewBox='0 0 24 23'
                    fill='none'
                    className='w-[26px] h-[26px]'
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M16.4443 0.110657H1.99984C1.38873 0.110657 0.888733 0.610657 0.888733 1.22177V16.7773L5.33318 12.3329H16.4443C17.0554 12.3329 17.5554 11.8329 17.5554 11.2218V1.22177C17.5554 0.610657 17.0554 0.110657 16.4443 0.110657ZM15.3332 2.3328V10.1106H4.41097L3.75541 10.7661L3.11097 11.4106V2.3328H15.3332ZM19.7776 4.55512H21.9998C22.611 4.55512 23.111 5.05512 23.111 5.66623V22.3329L18.6665 17.8885H6.44429C5.83317 17.8885 5.33317 17.3885 5.33317 16.7773V14.5551H19.7776V4.55512Z'
                        fill='#8885FF'
                    />
                </svg>
            </button>
        </div>
    );
};

export default Inbox;
