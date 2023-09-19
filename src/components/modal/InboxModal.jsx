import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchUsers,
    selectAllUserData,
    selectStatusUserData,
} from '../../feature/inboxSlice';
import SearchModal from '../serach/SearchModal';
import { Link } from 'react-router-dom';
import grayPersonIcon from '../../assets/icons/modal/grayPerson.svg';
import redDotIcon from '../../assets/icons/modal/redDot.svg';
import bluePersonIcon from '../../assets/icons/modal/bluePerson.svg';

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
        <div className='absolute  bottom-16 sm:bottom-40 3xl:bottom-20 right-0'>
            <div className='w-80 h-fit lg:w-[600px]  3xl:w-modalWidth 3xl:h-modalHeight bg-white  p-5'>
                <SearchModal
                    searchUser={searchUser}
                    setSearchUser={setSearchUser}
                />
                {status === 'loading' ? (
                    <div className='w-full flex justify-center items-center mt-28 3xl:mt-64'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='114'
                            height='113'
                            viewBox='0 0 114 113'
                            fill='none'
                        >
                            <path
                                d='M2.31997 108.224H6.95197V110H0.167969V98.432H2.31997V108.224Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M11.5287 101.664C12.1421 101.664 12.6967 101.763 13.1927 101.96C13.6941 102.157 14.1207 102.437 14.4727 102.8C14.8247 103.163 15.0967 103.605 15.2887 104.128C15.4807 104.651 15.5767 105.235 15.5767 105.88C15.5767 106.531 15.4807 107.117 15.2887 107.64C15.0967 108.163 14.8247 108.608 14.4727 108.976C14.1207 109.344 13.6941 109.627 13.1927 109.824C12.6967 110.021 12.1421 110.12 11.5287 110.12C10.9154 110.12 10.3581 110.021 9.85672 109.824C9.35539 109.627 8.92605 109.344 8.56872 108.976C8.21672 108.608 7.94205 108.163 7.74472 107.64C7.55272 107.117 7.45672 106.531 7.45672 105.88C7.45672 105.235 7.55272 104.651 7.74472 104.128C7.94205 103.605 8.21672 103.163 8.56872 102.8C8.92605 102.437 9.35539 102.157 9.85672 101.96C10.3581 101.763 10.9154 101.664 11.5287 101.664ZM11.5287 108.6C12.2114 108.6 12.7154 108.371 13.0407 107.912C13.3714 107.453 13.5367 106.781 13.5367 105.896C13.5367 105.011 13.3714 104.336 13.0407 103.872C12.7154 103.408 12.2114 103.176 11.5287 103.176C10.8354 103.176 10.3234 103.411 9.99272 103.88C9.66205 104.344 9.49672 105.016 9.49672 105.896C9.49672 106.776 9.66205 107.448 9.99272 107.912C10.3234 108.371 10.8354 108.6 11.5287 108.6Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M23.5505 110H22.6625C22.4758 110 22.3291 109.973 22.2225 109.92C22.1158 109.861 22.0358 109.747 21.9825 109.576L21.8065 108.992C21.5985 109.179 21.3931 109.344 21.1905 109.488C20.9931 109.627 20.7878 109.744 20.5745 109.84C20.3611 109.936 20.1345 110.008 19.8945 110.056C19.6545 110.104 19.3878 110.128 19.0945 110.128C18.7478 110.128 18.4278 110.083 18.1345 109.992C17.8411 109.896 17.5878 109.755 17.3745 109.568C17.1665 109.381 17.0038 109.149 16.8865 108.872C16.7691 108.595 16.7105 108.272 16.7105 107.904C16.7105 107.595 16.7905 107.291 16.9505 106.992C17.1158 106.688 17.3878 106.416 17.7665 106.176C18.1451 105.931 18.6491 105.728 19.2785 105.568C19.9078 105.408 20.6891 105.317 21.6225 105.296V104.816C21.6225 104.267 21.5051 103.861 21.2705 103.6C21.0411 103.333 20.7051 103.2 20.2625 103.2C19.9425 103.2 19.6758 103.237 19.4625 103.312C19.2491 103.387 19.0625 103.472 18.9025 103.568C18.7478 103.659 18.6038 103.741 18.4705 103.816C18.3371 103.891 18.1905 103.928 18.0305 103.928C17.8971 103.928 17.7825 103.893 17.6865 103.824C17.5905 103.755 17.5131 103.669 17.4545 103.568L17.0945 102.936C18.0385 102.072 19.1771 101.64 20.5105 101.64C20.9905 101.64 21.4171 101.72 21.7905 101.88C22.1691 102.035 22.4891 102.253 22.7505 102.536C23.0118 102.813 23.2091 103.147 23.3425 103.536C23.4811 103.925 23.5505 104.352 23.5505 104.816V110ZM19.7105 108.768C19.9131 108.768 20.0998 108.749 20.2705 108.712C20.4411 108.675 20.6011 108.619 20.7505 108.544C20.9051 108.469 21.0518 108.379 21.1905 108.272C21.3345 108.16 21.4785 108.029 21.6225 107.88V106.496C21.0465 106.523 20.5638 106.573 20.1745 106.648C19.7905 106.717 19.4811 106.808 19.2465 106.92C19.0118 107.032 18.8438 107.163 18.7425 107.312C18.6465 107.461 18.5985 107.624 18.5985 107.8C18.5985 108.147 18.6998 108.395 18.9025 108.544C19.1105 108.693 19.3798 108.768 19.7105 108.768Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M31.2695 110C31.0135 110 30.8455 109.88 30.7655 109.64L30.6055 108.848C30.4348 109.04 30.2561 109.213 30.0695 109.368C29.8828 109.523 29.6801 109.656 29.4615 109.768C29.2481 109.88 29.0161 109.965 28.7655 110.024C28.5201 110.088 28.2535 110.12 27.9655 110.12C27.5175 110.12 27.1068 110.027 26.7335 109.84C26.3601 109.653 26.0375 109.384 25.7655 109.032C25.4988 108.675 25.2908 108.235 25.1415 107.712C24.9975 107.189 24.9255 106.592 24.9255 105.92C24.9255 105.312 25.0081 104.747 25.1735 104.224C25.3388 103.701 25.5761 103.248 25.8855 102.864C26.1948 102.48 26.5655 102.181 26.9975 101.968C27.4295 101.749 27.9148 101.64 28.4535 101.64C28.9121 101.64 29.3041 101.715 29.6295 101.864C29.9548 102.008 30.2455 102.203 30.5015 102.448V98.112H32.4775V110H31.2695ZM28.6375 108.552C29.0481 108.552 29.3975 108.467 29.6855 108.296C29.9735 108.125 30.2455 107.883 30.5015 107.568V103.888C30.2775 103.616 30.0321 103.424 29.7655 103.312C29.5041 103.2 29.2215 103.144 28.9175 103.144C28.6188 103.144 28.3468 103.2 28.1015 103.312C27.8615 103.424 27.6561 103.595 27.4855 103.824C27.3201 104.048 27.1921 104.336 27.1015 104.688C27.0108 105.035 26.9655 105.445 26.9655 105.92C26.9655 106.4 27.0028 106.808 27.0775 107.144C27.1575 107.475 27.2695 107.747 27.4135 107.96C27.5575 108.168 27.7335 108.32 27.9415 108.416C28.1495 108.507 28.3815 108.552 28.6375 108.552Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M36.7225 101.792V110H34.7465V101.792H36.7225ZM37.0185 99.4C37.0185 99.5707 36.9838 99.7307 36.9145 99.88C36.8451 100.029 36.7518 100.16 36.6345 100.272C36.5225 100.384 36.3891 100.475 36.2345 100.544C36.0798 100.608 35.9145 100.64 35.7385 100.64C35.5678 100.64 35.4051 100.608 35.2505 100.544C35.1011 100.475 34.9705 100.384 34.8585 100.272C34.7465 100.16 34.6558 100.029 34.5865 99.88C34.5225 99.7307 34.4905 99.5707 34.4905 99.4C34.4905 99.224 34.5225 99.0587 34.5865 98.904C34.6558 98.7493 34.7465 98.616 34.8585 98.504C34.9705 98.392 35.1011 98.304 35.2505 98.24C35.4051 98.1707 35.5678 98.136 35.7385 98.136C35.9145 98.136 36.0798 98.1707 36.2345 98.24C36.3891 98.304 36.5225 98.392 36.6345 98.504C36.7518 98.616 36.8451 98.7493 36.9145 98.904C36.9838 99.0587 37.0185 99.224 37.0185 99.4Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M38.9622 110V101.792H40.1702C40.4262 101.792 40.5942 101.912 40.6742 102.152L40.8102 102.8C40.9756 102.629 41.1489 102.475 41.3302 102.336C41.5169 102.197 41.7116 102.077 41.9142 101.976C42.1222 101.875 42.3436 101.797 42.5782 101.744C42.8129 101.691 43.0689 101.664 43.3462 101.664C43.7942 101.664 44.1916 101.741 44.5382 101.896C44.8849 102.045 45.1729 102.259 45.4022 102.536C45.6369 102.808 45.8129 103.136 45.9302 103.52C46.0529 103.899 46.1142 104.317 46.1142 104.776V110H44.1382V104.776C44.1382 104.275 44.0209 103.888 43.7862 103.616C43.5569 103.339 43.2102 103.2 42.7462 103.2C42.4049 103.2 42.0849 103.277 41.7862 103.432C41.4876 103.587 41.2049 103.797 40.9382 104.064V110H38.9622Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M50.896 101.648C51.248 101.648 51.5786 101.685 51.888 101.76C52.1973 101.829 52.48 101.933 52.736 102.072H55.096V102.808C55.096 102.931 55.064 103.027 55 103.096C54.936 103.165 54.8266 103.213 54.672 103.24L53.936 103.376C53.9893 103.515 54.0293 103.661 54.056 103.816C54.088 103.971 54.104 104.133 54.104 104.304C54.104 104.709 54.0213 105.077 53.856 105.408C53.696 105.733 53.472 106.011 53.184 106.24C52.9013 106.469 52.5626 106.648 52.168 106.776C51.7786 106.899 51.3546 106.96 50.896 106.96C50.5866 106.96 50.2853 106.931 49.992 106.872C49.736 107.027 49.608 107.2 49.608 107.392C49.608 107.557 49.6826 107.68 49.832 107.76C49.9866 107.835 50.1866 107.888 50.432 107.92C50.6826 107.952 50.9653 107.973 51.28 107.984C51.5946 107.989 51.9173 108.005 52.248 108.032C52.5786 108.059 52.9013 108.107 53.216 108.176C53.5306 108.24 53.8106 108.344 54.056 108.488C54.3066 108.632 54.5066 108.829 54.656 109.08C54.8106 109.325 54.888 109.643 54.888 110.032C54.888 110.395 54.7973 110.747 54.616 111.088C54.44 111.429 54.1813 111.733 53.84 112C53.504 112.267 53.0906 112.48 52.6 112.64C52.1093 112.805 51.5493 112.888 50.92 112.888C50.296 112.888 49.7546 112.827 49.296 112.704C48.8373 112.587 48.456 112.427 48.152 112.224C47.8533 112.027 47.6293 111.797 47.48 111.536C47.3306 111.275 47.256 111.003 47.256 110.72C47.256 110.336 47.3733 110.013 47.608 109.752C47.8426 109.491 48.168 109.283 48.584 109.128C48.3813 109.016 48.2186 108.867 48.096 108.68C47.9733 108.493 47.912 108.251 47.912 107.952C47.912 107.829 47.9333 107.704 47.976 107.576C48.0186 107.443 48.0826 107.312 48.168 107.184C48.2586 107.056 48.3706 106.936 48.504 106.824C48.6373 106.707 48.7946 106.603 48.976 106.512C48.56 106.288 48.232 105.989 47.992 105.616C47.7573 105.243 47.64 104.805 47.64 104.304C47.64 103.899 47.72 103.533 47.88 103.208C48.0453 102.877 48.272 102.597 48.56 102.368C48.8533 102.133 49.1973 101.955 49.592 101.832C49.992 101.709 50.4266 101.648 50.896 101.648ZM53.064 110.368C53.064 110.208 53.016 110.077 52.92 109.976C52.824 109.875 52.6933 109.797 52.528 109.744C52.3626 109.685 52.168 109.643 51.944 109.616C51.7253 109.589 51.4906 109.571 51.24 109.56C50.9946 109.544 50.7386 109.531 50.472 109.52C50.2106 109.504 49.9573 109.48 49.712 109.448C49.488 109.571 49.3066 109.717 49.168 109.888C49.0346 110.053 48.968 110.245 48.968 110.464C48.968 110.608 49.0026 110.741 49.072 110.864C49.1466 110.992 49.2613 111.101 49.416 111.192C49.576 111.283 49.7813 111.352 50.032 111.4C50.2826 111.453 50.5893 111.48 50.952 111.48C51.32 111.48 51.6373 111.451 51.904 111.392C52.1706 111.339 52.3893 111.261 52.56 111.16C52.736 111.064 52.864 110.947 52.944 110.808C53.024 110.675 53.064 110.528 53.064 110.368ZM50.896 105.696C51.1413 105.696 51.3546 105.664 51.536 105.6C51.7173 105.531 51.8666 105.437 51.984 105.32C52.1066 105.203 52.1973 105.061 52.256 104.896C52.32 104.731 52.352 104.549 52.352 104.352C52.352 103.947 52.2293 103.627 51.984 103.392C51.744 103.152 51.3813 103.032 50.896 103.032C50.4106 103.032 50.0453 103.152 49.8 103.392C49.56 103.627 49.44 103.947 49.44 104.352C49.44 104.544 49.4693 104.723 49.528 104.888C49.592 105.053 49.6826 105.197 49.8 105.32C49.9226 105.437 50.0746 105.531 50.256 105.6C50.4426 105.664 50.656 105.696 50.896 105.696Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M67.495 107.272C67.6123 107.272 67.7136 107.317 67.799 107.408L68.647 108.328C68.1776 108.909 67.599 109.355 66.911 109.664C66.2283 109.973 65.407 110.128 64.447 110.128C63.5883 110.128 62.815 109.981 62.127 109.688C61.4443 109.395 60.8603 108.987 60.375 108.464C59.8896 107.941 59.5163 107.317 59.255 106.592C58.999 105.867 58.871 105.075 58.871 104.216C58.871 103.347 59.015 102.552 59.303 101.832C59.591 101.107 59.9963 100.483 60.519 99.96C61.0416 99.4373 61.6656 99.032 62.391 98.744C63.1216 98.4507 63.927 98.304 64.807 98.304C65.6656 98.304 66.415 98.4427 67.055 98.72C67.7003 98.992 68.2523 99.3547 68.711 99.808L67.991 100.808C67.9483 100.872 67.8923 100.928 67.823 100.976C67.759 101.024 67.6683 101.048 67.551 101.048C67.4283 101.048 67.303 101 67.175 100.904C67.047 100.808 66.8843 100.704 66.687 100.592C66.4896 100.48 66.239 100.376 65.935 100.28C65.6363 100.184 65.255 100.136 64.791 100.136C64.247 100.136 63.7456 100.232 63.287 100.424C62.8336 100.611 62.4416 100.88 62.111 101.232C61.7856 101.584 61.5296 102.013 61.343 102.52C61.1616 103.021 61.071 103.587 61.071 104.216C61.071 104.867 61.1616 105.445 61.343 105.952C61.5296 106.459 61.7803 106.885 62.095 107.232C62.4096 107.579 62.7803 107.845 63.207 108.032C63.6336 108.213 64.0923 108.304 64.583 108.304C64.8763 108.304 65.1403 108.288 65.375 108.256C65.615 108.224 65.8336 108.173 66.031 108.104C66.2336 108.035 66.423 107.947 66.599 107.84C66.7803 107.728 66.959 107.592 67.135 107.432C67.1883 107.384 67.2443 107.347 67.303 107.32C67.3616 107.288 67.4256 107.272 67.495 107.272Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M70.1653 110V98.112H72.1413V102.68C72.4613 102.376 72.8133 102.131 73.1973 101.944C73.5813 101.757 74.032 101.664 74.5493 101.664C74.9973 101.664 75.3947 101.741 75.7413 101.896C76.088 102.045 76.376 102.259 76.6053 102.536C76.84 102.808 77.016 103.136 77.1333 103.52C77.256 103.899 77.3173 104.317 77.3173 104.776V110H75.3413V104.776C75.3413 104.275 75.224 103.888 74.9893 103.616C74.76 103.339 74.4133 103.2 73.9493 103.2C73.608 103.2 73.288 103.277 72.9893 103.432C72.6907 103.587 72.408 103.797 72.1413 104.064V110H70.1653Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M85.6911 110H84.8031C84.6164 110 84.4698 109.973 84.3631 109.92C84.2564 109.861 84.1764 109.747 84.1231 109.576L83.9471 108.992C83.7391 109.179 83.5338 109.344 83.3311 109.488C83.1338 109.627 82.9284 109.744 82.7151 109.84C82.5018 109.936 82.2751 110.008 82.0351 110.056C81.7951 110.104 81.5284 110.128 81.2351 110.128C80.8884 110.128 80.5684 110.083 80.2751 109.992C79.9818 109.896 79.7284 109.755 79.5151 109.568C79.3071 109.381 79.1444 109.149 79.0271 108.872C78.9098 108.595 78.8511 108.272 78.8511 107.904C78.8511 107.595 78.9311 107.291 79.0911 106.992C79.2564 106.688 79.5284 106.416 79.9071 106.176C80.2858 105.931 80.7898 105.728 81.4191 105.568C82.0484 105.408 82.8298 105.317 83.7631 105.296V104.816C83.7631 104.267 83.6458 103.861 83.4111 103.6C83.1818 103.333 82.8458 103.2 82.4031 103.2C82.0831 103.2 81.8164 103.237 81.6031 103.312C81.3898 103.387 81.2031 103.472 81.0431 103.568C80.8884 103.659 80.7444 103.741 80.6111 103.816C80.4778 103.891 80.3311 103.928 80.1711 103.928C80.0378 103.928 79.9231 103.893 79.8271 103.824C79.7311 103.755 79.6538 103.669 79.5951 103.568L79.2351 102.936C80.1791 102.072 81.3178 101.64 82.6511 101.64C83.1311 101.64 83.5578 101.72 83.9311 101.88C84.3098 102.035 84.6298 102.253 84.8911 102.536C85.1524 102.813 85.3498 103.147 85.4831 103.536C85.6218 103.925 85.6911 104.352 85.6911 104.816V110ZM81.8511 108.768C82.0538 108.768 82.2404 108.749 82.4111 108.712C82.5818 108.675 82.7418 108.619 82.8911 108.544C83.0458 108.469 83.1924 108.379 83.3311 108.272C83.4751 108.16 83.6191 108.029 83.7631 107.88V106.496C83.1871 106.523 82.7044 106.573 82.3151 106.648C81.9311 106.717 81.6218 106.808 81.3871 106.92C81.1524 107.032 80.9844 107.163 80.8831 107.312C80.7871 107.461 80.7391 107.624 80.7391 107.8C80.7391 108.147 80.8404 108.395 81.0431 108.544C81.2511 108.693 81.5204 108.768 81.8511 108.768Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M90.3301 110.128C89.6208 110.128 89.0741 109.928 88.6901 109.528C88.3061 109.123 88.1141 108.565 88.1141 107.856V103.272H87.2821C87.1754 103.272 87.0821 103.237 87.0021 103.168C86.9274 103.099 86.8901 102.995 86.8901 102.856V102.072L88.2101 101.856L88.6261 99.616C88.6474 99.5093 88.6954 99.4267 88.7701 99.368C88.8501 99.3093 88.9488 99.28 89.0661 99.28H90.0901V101.864H92.2501V103.272H90.0901V107.72C90.0901 107.976 90.1541 108.176 90.2821 108.32C90.4101 108.464 90.5808 108.536 90.7941 108.536C90.9168 108.536 91.0181 108.523 91.0981 108.496C91.1834 108.464 91.2554 108.432 91.3141 108.4C91.3781 108.368 91.4341 108.339 91.4821 108.312C91.5301 108.28 91.5781 108.264 91.6261 108.264C91.6848 108.264 91.7328 108.28 91.7701 108.312C91.8074 108.339 91.8474 108.381 91.8901 108.44L92.4821 109.4C92.1941 109.64 91.8634 109.821 91.4901 109.944C91.1168 110.067 90.7301 110.128 90.3301 110.128Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M98.6936 103.392C98.6403 103.477 98.5843 103.539 98.5256 103.576C98.4669 103.608 98.3923 103.624 98.3016 103.624C98.2056 103.624 98.1016 103.597 97.9896 103.544C97.8829 103.491 97.7576 103.432 97.6136 103.368C97.4696 103.299 97.3043 103.237 97.1176 103.184C96.9363 103.131 96.7203 103.104 96.4696 103.104C96.0803 103.104 95.7736 103.187 95.5496 103.352C95.3256 103.517 95.2136 103.733 95.2136 104C95.2136 104.176 95.2696 104.325 95.3816 104.448C95.4989 104.565 95.6509 104.669 95.8376 104.76C96.0296 104.851 96.2456 104.933 96.4856 105.008C96.7256 105.077 96.9709 105.155 97.2216 105.24C97.4723 105.325 97.7176 105.424 97.9576 105.536C98.1976 105.643 98.4109 105.781 98.5976 105.952C98.7896 106.117 98.9416 106.317 99.0536 106.552C99.1709 106.787 99.2296 107.069 99.2296 107.4C99.2296 107.795 99.1576 108.16 99.0136 108.496C98.8696 108.827 98.6589 109.115 98.3816 109.36C98.1043 109.6 97.7603 109.789 97.3496 109.928C96.9443 110.061 96.4776 110.128 95.9496 110.128C95.6669 110.128 95.3896 110.101 95.1176 110.048C94.8509 110 94.5923 109.931 94.3416 109.84C94.0963 109.749 93.8669 109.643 93.6536 109.52C93.4456 109.397 93.2616 109.264 93.1016 109.12L93.5576 108.368C93.6163 108.277 93.6856 108.208 93.7656 108.16C93.8456 108.112 93.9469 108.088 94.0696 108.088C94.1923 108.088 94.3069 108.123 94.4136 108.192C94.5256 108.261 94.6536 108.336 94.7976 108.416C94.9416 108.496 95.1096 108.571 95.3016 108.64C95.4989 108.709 95.7469 108.744 96.0456 108.744C96.2803 108.744 96.4803 108.717 96.6456 108.664C96.8163 108.605 96.9549 108.531 97.0616 108.44C97.1736 108.349 97.2536 108.245 97.3016 108.128C97.3549 108.005 97.3816 107.88 97.3816 107.752C97.3816 107.56 97.3229 107.403 97.2056 107.28C97.0936 107.157 96.9416 107.051 96.7496 106.96C96.5629 106.869 96.3469 106.789 96.1016 106.72C95.8616 106.645 95.6136 106.565 95.3576 106.48C95.1069 106.395 94.8589 106.296 94.6136 106.184C94.3736 106.067 94.1576 105.92 93.9656 105.744C93.7789 105.568 93.6269 105.352 93.5096 105.096C93.3976 104.84 93.3416 104.531 93.3416 104.168C93.3416 103.832 93.4083 103.512 93.5416 103.208C93.6749 102.904 93.8696 102.64 94.1256 102.416C94.3869 102.187 94.7096 102.005 95.0936 101.872C95.4829 101.733 95.9309 101.664 96.4376 101.664C97.0029 101.664 97.5176 101.757 97.9816 101.944C98.4456 102.131 98.8323 102.376 99.1416 102.68L98.6936 103.392Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M103.428 108.912C103.428 108.747 103.457 108.589 103.516 108.44C103.58 108.291 103.665 108.163 103.772 108.056C103.884 107.949 104.014 107.864 104.164 107.8C104.313 107.736 104.473 107.704 104.644 107.704C104.809 107.704 104.966 107.736 105.116 107.8C105.265 107.864 105.393 107.949 105.5 108.056C105.606 108.163 105.692 108.291 105.756 108.44C105.82 108.589 105.852 108.747 105.852 108.912C105.852 109.083 105.82 109.243 105.756 109.392C105.692 109.536 105.606 109.661 105.5 109.768C105.393 109.875 105.265 109.957 105.116 110.016C104.966 110.08 104.809 110.112 104.644 110.112C104.473 110.112 104.313 110.08 104.164 110.016C104.014 109.957 103.884 109.875 103.772 109.768C103.665 109.661 103.58 109.536 103.516 109.392C103.457 109.243 103.428 109.083 103.428 108.912Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M107.021 108.912C107.021 108.747 107.051 108.589 107.109 108.44C107.173 108.291 107.259 108.163 107.365 108.056C107.477 107.949 107.608 107.864 107.757 107.8C107.907 107.736 108.067 107.704 108.237 107.704C108.403 107.704 108.56 107.736 108.709 107.8C108.859 107.864 108.987 107.949 109.093 108.056C109.2 108.163 109.285 108.291 109.349 108.44C109.413 108.589 109.445 108.747 109.445 108.912C109.445 109.083 109.413 109.243 109.349 109.392C109.285 109.536 109.2 109.661 109.093 109.768C108.987 109.875 108.859 109.957 108.709 110.016C108.56 110.08 108.403 110.112 108.237 110.112C108.067 110.112 107.907 110.08 107.757 110.016C107.608 109.957 107.477 109.875 107.365 109.768C107.259 109.661 107.173 109.536 107.109 109.392C107.051 109.243 107.021 109.083 107.021 108.912Z'
                                fill='#4F4F4F'
                            />
                            <path
                                d='M110.615 108.912C110.615 108.747 110.645 108.589 110.703 108.44C110.767 108.291 110.853 108.163 110.959 108.056C111.071 107.949 111.202 107.864 111.351 107.8C111.501 107.736 111.661 107.704 111.831 107.704C111.997 107.704 112.154 107.736 112.303 107.8C112.453 107.864 112.581 107.949 112.687 108.056C112.794 108.163 112.879 108.291 112.943 108.44C113.007 108.589 113.039 108.747 113.039 108.912C113.039 109.083 113.007 109.243 112.943 109.392C112.879 109.536 112.794 109.661 112.687 109.768C112.581 109.875 112.453 109.957 112.303 110.016C112.154 110.08 111.997 110.112 111.831 110.112C111.661 110.112 111.501 110.08 111.351 110.016C111.202 109.957 111.071 109.875 110.959 109.768C110.853 109.661 110.767 109.536 110.703 109.392C110.645 109.243 110.615 109.083 110.615 108.912Z'
                                fill='#4F4F4F'
                            />
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M26.8009 60.5045L76.6057 24.9025L76.6796 25.0058C76.6551 24.9713 76.6306 24.9369 76.606 24.9025C66.7747 11.1492 47.6557 7.96983 33.9024 17.8011C20.1492 27.6323 16.9698 46.7513 26.8009 60.5045Z'
                                fill='#C4C4C4'
                            />
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M76.6058 24.9025L26.8009 60.5047L26.7771 60.4715C26.785 60.4826 26.7929 60.4936 26.8008 60.5047C36.6321 74.2579 55.7511 77.4373 69.5044 67.6061C83.2577 57.7748 86.4371 38.6557 76.6058 24.9025Z'
                                fill='#F8F8F8'
                            />
                            <path
                                d='M35.3985 59.0807C35.3985 61.4391 33.4866 63.351 31.1282 63.351C28.7697 63.351 26.8578 61.4391 26.8578 59.0807C26.8578 56.7222 28.7697 54.8103 31.1282 54.8103C33.4866 54.8103 35.3985 56.7222 35.3985 59.0807Z'
                                fill='#C4C4C4'
                            />
                            <path
                                d='M77.3256 27.2472C77.3256 29.6056 75.4137 31.5175 73.0553 31.5175C70.6968 31.5175 68.7849 29.6056 68.7849 27.2472C68.7849 24.8887 70.6968 22.9768 73.0553 22.9768C75.4137 22.9768 77.3256 24.8887 77.3256 27.2472Z'
                                fill='#C4C4C4'
                            />
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M33.1859 55.9403C40.4963 66.1671 54.7131 68.5313 64.9399 61.2208C75.1666 53.9104 77.5308 39.6937 70.2204 29.4669C62.9099 19.2401 48.6932 16.8759 38.4664 24.1864C28.2396 31.4968 25.8755 45.7135 33.1859 55.9403Z'
                                fill='white'
                            />
                        </svg>
                    </div>
                ) : (
                    <></>
                )}

                {filteredUsers.slice(0, 1).map((user) => {
                    return (
                        <Link to='/detailMessage' key={user.id}>
                            <div className='mt-3 gap-x-8 3xl:mt-[26px] flex justify-start items-center 3xl:gap-x-8'>
                                <div className='flex justify-between items-center sm:gap-x-2 relative'>
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
                                    <div className='flex items-center sm:gap-x-2 3xl:gap-x-[17px] cursor-pointer'>
                                        <p className='text-sm 3xl:text-md font-bold text-primary-blue '>
                                            {user.name}
                                        </p>
                                        <p className='text-xs text-primary-live'>
                                            January 1,2021
                                        </p>
                                        <p className='text-xs text-primary-live'>
                                            19:30
                                        </p>
                                    </div>
                                    <p className='text-primary-live font-bold text-md'>
                                        {user.email}
                                    </p>
                                    <p className='text-primary-live text-sm'>
                                        {user.body.substring(0, 30)}
                                    </p>
                                </div>
                                <div className='ml-auto mt-auto'>
                                    <img src={redDotIcon} alt='redDot.svg' />
                                </div>
                            </div>
                            <hr className='text-primary-BattleshipGrey sm:mt-2 3xl:mt-[37px]' />
                        </Link>
                    );
                })}

                {filteredUsers.slice(1, 4).map((user) => {
                    return (
                        <div key={user.id}>
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
                                    <div className='flex items-center gap-x-2 cursor-pointer'>
                                        <p className='text-xs sm:text-sm 3xl:text-md font-bold text-primary-blue'>
                                            {user.name}
                                        </p>
                                        <p className='text-xs text-primary-live'>
                                            02/06/2021
                                        </p>
                                        <p className='text-xs text-primary-live'>
                                            10:45
                                        </p>
                                    </div>
                                    <p className='text-primary-live font-bold text-md'>
                                        {user.email}
                                    </p>
                                    <p className='text-primary-live text-sm'>
                                        {user.body.substring(0, 30)}
                                    </p>
                                </div>
                            </div>
                            <hr className='text-primary-BattleshipGrey sm:mt-2 3xl:mt-[37px]' />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Modal;
