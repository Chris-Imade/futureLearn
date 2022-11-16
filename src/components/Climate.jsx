import React from 'react';
import { climateCards } from '../constants/data';
import {colors } from "../constants/globalStyles";
import PlainBtn from "./PlainBtn"
import Hours from "../assets/hours.svg";
import Time from "../assets/time.svg";
import ImgAction1 from "../assets/future-image-action-1.svg";
import ImgAction2 from "../assets/future-image-action-2.svg";

const Climate = () => {
    return (
        <div
            className="py-12 lg:py-0 lg:h-[414px] min-h-[300px] w-full bg-[#030138] mt-[9.2rem] text-white flex lg:flex-row flex-wrap flex-col justify-around items-center"
        >
            <div className='flex flex-col lg:flex-row'>
                <div className='bg-white hover:bg-gray-100 shadow-lg lg:mt-[-2rem] lg:mr-10 mb-12 lg:mb-0 group h-[447px] hover:cursor-pointer'>
                    <div className='relative overflow-hidden group-hover:cursor-pointer'>
                        <div className='w-full lg:w-[256px] absolute h-full bg-pink-400 opacity-20 group-hover:scale-105 z-20 transition-all duration-500 ease-in-out'></div>
                        <img src={climateCards[0].image} alt="climate" className='w-full lg:w-[256px] group-hover:scale-105 transition-all duration-500 ease-in-out'/>
                        <div className='absolute top-4 right-4 w-[5rem] bg-white rounded-md z-50 shadow-md p-2'><img src={ImgAction1} alt="action tag" /></div>
                    </div>

                    <div className='px-5 my-2'>
                        <h2 className='text-[16px] text-[#787575] mb-2'>
                            Woodwell Climate <br />
                            Reasearch Center
                        </h2>
                        <h4 className='text-[16px] text-[#262424] mb-5 font-semibold'>
                            Thawning Permafrost: <br />
                            Science, Policy, and <br />
                            Environmental Justice in <br />
                            the Artic
                        </h4>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <img width={13} src={Time} alt="time-icon" />
                                <p className='ml-1 text-sm text-slate-800'>{climateCards[0].period}</p>
                            </div>
                            <div className='flex'>
                                <img width={13} src={Hours} alt="clock-icon" />
                                <p className='ml-1 text-sm text-slate-800'>{climateCards[0].time}</p>
                            </div>
                        </div>
                        <button className='mt-[-0rem] lg:mt-5 text-slate-800 px-3 py-2 my-5 font-bold text-lt-[9px] bg-[#C0C0C0]'>{climateCards[0].btnAction}</button>
                    </div>
                </div>


                <div className='bg-white hover:bg-gray-100 shadow-lg lg:mr-10 mb-12 lg:mb-0 group h-[447px] hover:cursor-pointer'>
                    <div className='relative overflow-hidden group-hover:cursor-pointer'>
                        <div className='w-full absolute h-full bg-pink-400 opacity-20 group-hover:scale-105 z-20 transition-all duration-500 ease-in-out'></div>
                        <img src={climateCards[1].image} alt="climate" className='w-full lg:w-[256px] group-hover:scale-105 transition-all duration-500 ease-in-out'/>
                        <div className='absolute top-4 right-4 w-[7rem] bg-white rounded-md z-50 shadow-md p-2'><img src={ImgAction2} alt="action tag" /></div>
                    </div>

                    <div className='px-5 my-2'>
                        <h2 className='text-[16px] text-[#787575] mb-2'>
                            Woodwell Climate <br />
                            Reasearch Center
                        </h2>
                        <h4 className='text-[16px] text-[#262424] mb-5 font-semibold'>
                            Thawning Permafrost: <br />
                            Science, Policy, and <br />
                            Environmental Justice in <br />
                            the Artic
                        </h4>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <img width={13} src={Time} alt="time-icon" />
                                <p className='ml-1 text-sm text-slate-800'>{climateCards[1].period}</p>
                            </div>
                            <div className='flex'>
                                <img width={13} src={Hours} alt="clock-icon" />
                                <p className='ml-1 text-sm text-slate-800'>{climateCards[1].time}</p>
                            </div>
                        </div>
                        <button className='mt-[-0rem] lg:mt-5 text-slate-800 px-3 py-2 my-5 font-bold text-lt-[9px] bg-[#C0C0C0]'>{climateCards[1].btnAction}</button>
                    </div>
                </div>
            </div>
            <div className='mx-12 lg:mx-0'>
                <h1 className='text-4xl'>Empower yourself with <br /> a climate action course</h1>
                <div className='w-[100px] h-[14px] bg-[#DE00A5] my-5'></div>
                <p className='font-semibold text-[20px] mb-5'>Expand your knowledge of environmental issues and discover<br /> how you can make a difference. Explore our most popular<br /> climate action courses today.</p>
                <PlainBtn title={"Learn More"} type={'outline'} />
            </div>
        </div>
    );
}

export default Climate;
