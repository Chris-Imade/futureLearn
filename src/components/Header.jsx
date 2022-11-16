import React from 'react';
import { colors } from '../constants/globalStyles';
import HeaderText from '../assets/header-text.svg';
import HeaderRight from '../assets/header-right.svg';
import PlainBtn from './PlainBtn';



const Header = () => {
    return (
        <div
            style={{ backgroundColor: colors.darkBlue }}
            className={`lg:h-[452px] pb-48 lg:pb-0  pt-12 lg:pt-0 flex flex-row justify-between items-center`}
        >
            <div className='flex flex-col lg:flex-row ml-12 lg:mx-0 lg:ml-24'>
                <img src={HeaderText} alt="HeaderText" className='w-[17rem] lg:w-[592px] lg:h-[272px]' />
                <div className='mb-[-8rem] mt-8 lg:mt-[5rem]'>
                    <p className='font-semibold text-[20px] text-white mb-4'>
                        Learn new skills online with world‑class<br />
                        universities and experts.
                    </p>
                    <PlainBtn title={"Start Learning Now"} type={"outline"} />
                </div>
            </div>
            <img src={HeaderRight} alt="HeaderRight" className='w-[10rem] lg:w-[315.51px] lg:h-[420.21px]' />
        </div>
    );
}

export default Header;
