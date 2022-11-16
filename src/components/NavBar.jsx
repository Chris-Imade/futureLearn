import React from 'react';
import Logo from '../assets/logo.svg';
import Search from "../assets/search.png";
import PlainBtn from './PlainBtn';

const NavBar = () => {
    return (
        <nav className='h-[90px] flex justify-between items-center mx-4'>
            <div>
                {/* Logo */}
                <img src={Logo} alt="logo" width={114.67} height={40.07} />
            </div>

            <div>
                {/* links */}
                <ul className='flex'>
                    <li className='group hover:cursor-pointer hover:text-[#2541fc] font-bold text-[#DE00A5] px-6 flex justify-between items-center'>
                        Subject
                        <svg className={`ml-3 fill-[#DE00A5] group-hover:fill-[#2541fc]`} width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path className={``} fill='' d="M10.1025513,12.7783485 L16.8106554,6.0794438 C17.0871744,5.80330401 17.5303978,5.80851813 17.8006227,6.09108986 C18.0708475,6.37366159 18.0657451,6.82658676 17.7892261,7.10272655 L10.5858152,14.2962587 C10.3114043,14.5702933 9.87226896,14.5675493 9.60115804,14.2901058 L2.2046872,6.72087106 C1.93149355,6.44129625 1.93181183,5.98834118 2.20539811,5.7091676 C2.47898439,5.42999401 2.92223711,5.43031926 3.19543076,5.70989407 L10.1025513,12.7783485 Z"/>
                        </svg>
                        {/* <img src={DropDArr} alt="DropDArr" width={24} height={24} className={`ml-3 hover:fill-[#2541fc] ${styles.svg}`} /> */}
                    </li>
                    <li className='group hover:cursor-pointer hover:text-[#2541fc] font-bold text-[#DE00A5] px-6 flex justify-between items-center'>
                        Courses
                        <svg className={`ml-3 fill-[#DE00A5] group-hover:fill-[#2541fc]`} width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path className={``} fill='' d="M10.1025513,12.7783485 L16.8106554,6.0794438 C17.0871744,5.80330401 17.5303978,5.80851813 17.8006227,6.09108986 C18.0708475,6.37366159 18.0657451,6.82658676 17.7892261,7.10272655 L10.5858152,14.2962587 C10.3114043,14.5702933 9.87226896,14.5675493 9.60115804,14.2901058 L2.2046872,6.72087106 C1.93149355,6.44129625 1.93181183,5.98834118 2.20539811,5.7091676 C2.47898439,5.42999401 2.92223711,5.43031926 3.19543076,5.70989407 L10.1025513,12.7783485 Z"/>
                        </svg>
                        {/* <img src={DropDArr} alt="DropDArr" width={24} height={24} className={`ml-3 hover:fill-[#2541fc] ${styles.svg}`} /> */}
                    </li>
                    <li className='hover:cursor-pointer hover:text-[#2541fc] font-bold text-[#DE00A5] px-6'>FutureLearn For Business</li>
                </ul>
            </div>

            <div className='flex justify-between items-center'>
                {/* action */}
                <form className='relative flex justify-end'>
                    <input className='border-solid border-[1px] border-[#959595] pr-12 pl-4 py-2 outline-none' type="text" placeholder='Search Online Courses' />
                    <button className='absolute bg-[#DE00A5] w-[44px] h-full flex items-center justify-center transition-all duration-1000 ease-in-out hover:bg-[#2541fc]' type='submit'>
                        <img src={Search} alt="search-icon" />
                    </button>
                </form>

                <a className='mx-6 text-[#DE00A5] font-bold hover:text-[#2541fc]' href="#">Sign in</a>

                <PlainBtn title={"Register"} />
            </div>
        </nav>
    );
}

export default NavBar;
