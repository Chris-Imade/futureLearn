import React from 'react';

const PlainBtn = ({ title, type }) => {
    if(type === "outline") {
        return (
            <button className='border-solid border-[1px] border-white bg-[#DE00A5] px-3 py-3 font-bold text-white hover:text-[#DE00A5] transition-all duration-1000 ease-in-out hover:bg-white'>
                {title}
            </button>
        );
    } else {
        return (
            <button className='bg-[#DE00A5] px-3 py-3 font-bold text-white transition-all duration-1000 ease-in-out hover:bg-[#2541fc]'>
                {title}
            </button>
        );
    }
    
}

export default PlainBtn;
