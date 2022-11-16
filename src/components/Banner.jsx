import React from 'react';
import { banner } from '../constants/data';

const Banner = () => {
    return (
        <div className='overflow-x-auto no-scrollbar move'>
            <div className='pl-[-7rem] flex justify-between space-x-5 bg-transparent ml-[-1rem] w-full'>
                {/* First Row */}
                {banner.firstRow.map((item, index) => (
                    <div className={`${item.type === "large" ? `min-w-[227px] h-[97.44px]` : `min-w-[100px] h-[100px]`} flex justify-center items-center rounded-[14.4px] shadow-md`} key={item.id} style={{ backgroundColor: item.bgColor }}>
                        <img className={`${item.type === "large" ? `min-w-[193px] h-[60px]` : `min-w-[82px] h-[82px]`} px-4`} src={item.image} alt={item.id} />
                    </div>
                ))}
            </div>
            <div className='pl-[-7rem] flex justify-between space-x-5 bg-transparent ml-10 mt-5'>
                {/* Second Row */}
                {banner.secondRow.map((item, index) => (
                    <div className={`min-w-[227px] h-[97.44px] flex justify-center items-center rounded-[14.4px] shadow-md`} key={item.id} style={{ backgroundColor: item.bgColor }}>
                        <img className={`min-w-[193px] h-[60px] px-4`} src={item.image} alt={item.id} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banner;
