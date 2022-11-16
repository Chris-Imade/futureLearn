import React from 'react';
import images from "../constants/data";
import { colors } from '../constants/globalStyles';
import PlainBtn from "./PlainBtn";

const Plan = () => {
    return (
        <div className='mx-12 lg:mx-0 lg:ml-24 mt-24'>
            <img className='invisible lg:visible absolute right-36 top-[33.5rem] -z-10' src={images.FutureLine} alt="" />
            <div className='flex justify-between flex-col lg:flex-row'>
                <div className='mb-12 lg:mb-0'>
                    <h3 
                        style={{ color: colors.darkBlue }}
                        className='text-[38px]'>FutureLearn <span className='font-semibold'>Unlimited</span></h3>
                    <div className='w-[64px] h-[8px] bg-[#DE00A5] my-3'></div>
                    <h5 
                        style={{ color: colors.darkBlue }}
                        className='font-semibold text-[20px] mb-3'>
                        Subscribe now for limitless learning, whenever and <br />
                        wherever suits you.
                    </h5>
                    <p 
                        style={{ color: colors.darkBlue }}
                        className='text-[16px] mb-3 font-semibold'>
                        Earn CV-ready certificates, learn at your own pace and get long-term <br />
                        access to thousands of high-quality short courses.
                    </p>
                    <button className='font-bold hover:text-white text-[#DE00A5] border-[2px] border-solid hover:border-none hover:bg-[#DE00A5] border-[#DE00A5] px-3 py-2 transition-all duration-500 ease-in-out'>
                        Learn More
                    </button>
                </div>

                <div 
                    style={{ backgroundColor: colors.darkBlue }}
                    className="max-w-[508px] py-12 flex flex-col justify-center items-center rounded-md px-12 lg:mr-[15rem] lg:mt-[5rem]"
                >
                    <h1 className='font-semibold text-white text-2xl text-center'>Unlimited Monthly</h1>
                    <ul className=''>
                        <li className='text-white text-[20px] font-light'>✅ Limitless short courses*</li>
                        <li className='text-white text-[20px] font-light'>✅ CV-boosting certificates</li>
                        <li className='text-white text-[20px] font-light'>✅ Flexible learning</li>
                    </ul>
                    <h2 className='text-white  font-bold text-center my-5'>$27.99/month</h2>
                    <div  className='w-full text-center'><PlainBtn title={"Start Learning Now"} type={"outline"} /></div>
                    <p className='font-bold text-center text-white mt-5'>
                        *Some short courses are exempt. Does not include <br />
                        Microcredentials or ExpertTracks.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Plan;
