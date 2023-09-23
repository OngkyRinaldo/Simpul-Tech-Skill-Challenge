import searchModalIcon from '../../assets/icons/modal/searchModalIcon.svg';
const SearchModal = ({ searchUser, setSearchUser }) => {
    return (
        <div className='relative'>
            {/* Input pencarian */}
            <input
                type='text'
                placeholder='Search...'
                className='border border-gray-300 py-2 pr-10 pl-3 lg:pl-16 rounded-md focus:outline-none w-full placeholder:text-main'
                onChange={(e) => setSearchUser(e.target.value)} // Menggunakan fungsi onChange untuk memperbarui nilai pencarian saat pengguna mengetik.
                value={searchUser} // Nilai input diatur berdasarkan 'searchUser' prop.
            />

            {/* Icon pencarian */}
            <div className='absolute inset-y-0 right-5 lg:pr-3 flex items-center pointer-events-none'>
                <img src={searchModalIcon} alt='searchModalIcon.svg' />
            </div>
        </div>
    );
};

export default SearchModal;
