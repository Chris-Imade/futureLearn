import React from 'react';
import PlainBtn from "./PlainBtn";

const Explore = () => {
    return (
        <div className='bg-[#030138] py-24'>
            <h3 className='text-white text-center text-4xl font-bold mb-12'>Explore top subjects</h3>
            <div className='flex flex-col flex-wrap lg:flex-row justify-center items-center'>
                <div className='mb-4 group mx-3 hover:cursor-pointer rounded-lg p-8 lg:max-w-[369px] bg-white'>
                    <h3 className='font-bold text-[#DE00A5] text-xl transition-all duration-500 ease-in-out group-hover:text-slate-800'>Business & Management</h3>
                    <p className='text-xl'>Further your career with an online communication, leadership, or business management course.</p>
                    <div className='w-full text-right'>&rarr;</div>
                </div>
                <div className='mb-4 group mx-3 hover:cursor-pointer rounded-lg p-8 lg:max-w-[369px] bg-white'>
                    <h3 className='font-bold text-[#DE00A5] text-xl transition-all duration-500 ease-in-out group-hover:text-slate-800'>Business & Management</h3>
                    <p className='text-xl'>Further your career with an online communication, leadership, or business management course.</p>
                    <div className='w-full text-right'>&rarr;</div>
                </div>
                <div className='mb-4 group mx-3 hover:cursor-pointer rounded-lg p-8 lg:max-w-[369px] bg-white'>
                    <h3 className='font-bold text-[#DE00A5] text-xl transition-all duration-500 ease-in-out group-hover:text-slate-800'>Business & Management</h3>
                    <p className='text-xl'>Further your career with an online communication, leadership, or business management course.</p>
                    <div className='w-full text-right'>&rarr;</div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center mt-5'>
                <PlainBtn type={"outline"} title={"View all subjects"} />
            </div>
        </div>
    );
}

export default Explore;
