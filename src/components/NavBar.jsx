import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Search from "../assets/search.png";
import PlainBtn from './PlainBtn';
import styles from "./Navbar.module.css";
import { navCourses } from '../constants/data';

const NavBar = () => {
    const [activeTab, setActiveTab] = useState({
        current: "",
        active: false
    });
    const [displaySearch, setDisplaySearch] = useState(false);

     

    
    return (
        <>
            <div className='hidden lg:block'>
                <nav className='flex justify-between items-center mx-4  transition-all duration-[300ms] ease-in'>
                    <div>
                        {/* Logo */}
                        <img src={Logo} alt="logo" width={114.67} height={40.07} />
                    </div>

                    <div>
                        {/* links */}
                        <ul className='flex transition-all duration-700 ease-in-out'>
                            <li 
                                onClick={() => setActiveTab({ current: "tab1", active: !activeTab.active})}
                                className={`${activeTab.current === "tab1" && activeTab.active ? `transition-all duration-700 ease-in-out border-x-[1px] z-10 bg-[#FAFAFA]` : ``} py-8 group hover:cursor-pointer hover:text-[#2541fc] font-bold text-[#DE00A5] px-6 flex justify-between items-center`}>
                                Subject
                                <svg className={`ml-3 fill-[#DE00A5] group-hover:fill-[#2541fc] ${activeTab.current === "tab1" && activeTab.active ? `rotate-180` : `` }`} width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path className={``} fill='' d="M10.1025513,12.7783485 L16.8106554,6.0794438 C17.0871744,5.80330401 17.5303978,5.80851813 17.8006227,6.09108986 C18.0708475,6.37366159 18.0657451,6.82658676 17.7892261,7.10272655 L10.5858152,14.2962587 C10.3114043,14.5702933 9.87226896,14.5675493 9.60115804,14.2901058 L2.2046872,6.72087106 C1.93149355,6.44129625 1.93181183,5.98834118 2.20539811,5.7091676 C2.47898439,5.42999401 2.92223711,5.43031926 3.19543076,5.70989407 L10.1025513,12.7783485 Z"/>
                                </svg>
                                {/* <img src={DropDArr} alt="DropDArr" width={24} height={24} className={`ml-3 hover:fill-[#2541fc] ${styles.svg}`} /> */}
                            </li>
                            <li 
                                onClick={() => setActiveTab({ current: "tab2", active: !activeTab.active})}
                                className={`${activeTab.current === "tab2" && activeTab.active ? `transition-all duration-700 ease-in-out border-x-[1px] z-10 bg-[#FAFAFA]` : ``} py-8 h-full group hover:cursor-pointer hover:text-[#2541fc] font-bold text-[#DE00A5] px-6 flex justify-between items-center`}>
                                Courses
                                <svg className={`ml-3 fill-[#DE00A5] group-hover:fill-[#2541fc] ${activeTab.current === "tab2" && activeTab.active ? `rotate-180` : `` }`} width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path className={``} fill='' d="M10.1025513,12.7783485 L16.8106554,6.0794438 C17.0871744,5.80330401 17.5303978,5.80851813 17.8006227,6.09108986 C18.0708475,6.37366159 18.0657451,6.82658676 17.7892261,7.10272655 L10.5858152,14.2962587 C10.3114043,14.5702933 9.87226896,14.5675493 9.60115804,14.2901058 L2.2046872,6.72087106 C1.93149355,6.44129625 1.93181183,5.98834118 2.20539811,5.7091676 C2.47898439,5.42999401 2.92223711,5.43031926 3.19543076,5.70989407 L10.1025513,12.7783485 Z"/>
                                </svg>
                                {/* <img src={DropDArr} alt="DropDArr" width={24} height={24} className={`ml-3 hover:fill-[#2541fc] ${styles.svg}`} /> */}
                            </li>
                            <li className='py-8 hover:cursor-pointer hover:text-[#2541fc] font-bold text-[#DE00A5] px-6'>FutureLearn For Business</li>
                        </ul>
                    </div>

                    <div className='flex justify-between items-center'>
                        {/* action */}
                        <form className='relative flex justify-end'>
                            <input className='border-solid border-[1px] border-[#959595] pr-12 pl-4 py-2 outline-[#DE00A5]' type="text" placeholder='Search Online Courses' />
                            <button className='absolute bg-[#DE00A5] w-[44px] h-full flex items-center justify-center transition-all duration-1000 ease-in-out hover:bg-[#2541fc]' type='submit'>
                                <img src={Search} alt="search-icon" />
                            </button>
                        </form>

                        <a className='mx-6 text-[#DE00A5] font-bold hover:text-[#2541fc]' href="#">Sign in</a>

                        <PlainBtn title={"Register"} />
                    </div>
                </nav>



                {activeTab.current === "tab1" && activeTab.active && (
                    <div className={`${activeTab.current === "tab1" && activeTab.active ? styles.navTab : styles.closeNavTab} lg:pl-0 pl-20 lg:ml-0 space-x-5 py-12 flex no-scrollbar  overflow-x-auto justify-center items-center transition-all duration-[300ms] ease-in bg-[#FAFAFA] mt-[-1px] border-[1px] border-slate-200 border-solid`}>
                        {navCourses.map((item) => (
                            <div key={item.id} className={`transition-all duration-[300ms] ease-in lg:max-w-[240px] min-w-[240px] h-[120px] p-3 border-[1px] bg-white border-slate-600`}>
                                <img src={item.image} alt={item.title} />
                                <h2>{item.tilte}</h2>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                )}


                {activeTab.current === "tab2" && activeTab.active && (
                    <div className={`${activeTab.current === "tab2" && activeTab.active ? styles.navTab : styles.closeNavTab} lg:pl-0 pl-20 lg:ml-0 space-x-5 py-12 flex no-scrollbar  overflow-x-auto justify-center items-center transition-all duration-[300ms] ease-in bg-[#FAFAFA] mt-[-1px] border-[1px] border-slate-200 border-solid`}>
                        {navCourses.map((item) => (
                            <div key={item.id} className={`transition-all duration-[300ms] ease-in lg:max-w-[240px] min-w-[240px] h-[120px] p-3 border-[1px] bg-white border-slate-600`}>
                                <img src={item.image} alt={item.title} />
                                <h2>{item.tilte}</h2>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='lg:hidden transition-all duration-700 ease-in-out'>
                <div>
                    {displaySearch && (
                    <div className={`${!displaySearch && styles.moveMobileSearch} ${displaySearch && styles.mobileSearch} p-5 items-center flex w-full bg-slate-300`}>
                        <form className='flex-1 relative flex justify-end'>
                            <input className='border-solid border-[1px] border-[#959595] w-full pr-12 pl-4 py-2 outline-[#DE00A5]' type="text" placeholder='Search Online Courses' />
                            <button className='absolute bg-[#DE00A5] w-[44px] h-full flex items-center justify-center transition-all duration-1000 ease-in-out hover:bg-[#2541fc]' type='submit'>
                                <img src={Search} alt="search-icon" />
                            </button>
                        </form>
                        <div className='ml-5'>
                            <svg 
                            onClick={() => setDisplaySearch(false)}
                            className={`${styles.closeSearch} hover:fill-[#2541fc] w-5`} xmlns="http://www.w3.org/2000/svg" class="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizemedium__1Rx0M" height="32" viewBox="0 0 32 32" width="32" aria-hidden="false"><path d="M25.98 3.98l-9.95 9.95L6.05 3.9 3.92 6.02l9.99 10.03-9.94 9.94 2.12 2.12 9.92-9.92 9.86 9.92 2.14-2.1-9.88-9.94L28.1 6.1l-2.12-2.12z"></path></svg>
                        </div>
                    </div>
                    )}

                    <div className='flex justify-between items-center py-5 px-5'>
                        <div>
                            {/* Logo */}
                            <img src={Logo} alt="logo" width={80} height={28} />
                        </div>
                        <div className='flex'>
                            <span className='hover:cursor-pointer'>
                                <svg
                                onClick={() => setDisplaySearch(!displaySearch)} 
                                className={`${styles.svgSearch} hover:fill-[#2541fc]`} xmlns="http://www.w3.org/2000/svg" class="Icon-module_icon__23Vv4" height="32" viewBox="0 0 32 32" width="32" aria-hidden="false"><path d="M28 26.07l-6.9-6.85a9.56 9.56 0 10-1.36 1.46l6.8 6.81zM6.11 13.53a7.39 7.39 0 117.39 7.39 7.4 7.4 0 01-7.39-7.39z"></path></svg>
                            </span>
                            <span className=''>
                                
                            </span>
                            <button className='bg-[#DE00A5] ml-3 text-xs px-2 py-2 font-bold text-white transition-all duration-1000 ease-in-out hover:bg-[#2541fc]'>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
