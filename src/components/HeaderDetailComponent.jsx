import { Link } from 'react-router-dom';

const HeaderDetailComponent = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-x-[15px]'>
                <Link to='/inbox'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                    >
                        <path
                            d='M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z'
                            fill='#333333'
                        />
                    </svg>
                </Link>

                <div className=''>
                    <h2 className='font-bold text-primary-blue'>
                        Lorem ipsum dolor sit, amet consectetur
                    </h2>
                    <p className='text-main font-sm'>3 Participant</p>
                </div>
            </div>

            <Link to='/inbox'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                >
                    <path
                        d='M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z'
                        fill='#333333'
                    />
                </svg>
            </Link>
        </div>
    );
};

export default HeaderDetailComponent;
