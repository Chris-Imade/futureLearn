import React from 'react';
import { colors } from '../constants/globalStyles';
import PlainBtn from './PlainBtn';
import Star1 from "../assets/star1.svg";
import Star2 from "../assets/star2.svg";
import Star3 from "../assets/star3.svg";
import Star4 from "../assets/star4.svg";
import Star5 from "../assets/star5.svg";

const OurWorld = () => {
    return (
        <div className='z-[1000] py-24 lg:mt-[18rem] mx-5 lg:mx-24'>
            <div className='mb-12'>
                    <h3 
                        style={{ color: colors.darkBlue }}
                        className='text-[38px]'>Don't just take <span className='font-semibold'>our word<br /> for it...</span></h3>
                    <div className='w-[64px] h-[8px] bg-[#DE00A5] my-3'></div>
                    <h1
                        style={{ color: colors.darkBlue }}
                        className="text-3xl font-semibold"
                    >4.6 average rating</h1>
                    <p  
                        style={{ color: colors.darkBlue }}
                        className='flex mt-5 mb-10'>
                        <div className='mr-2 flex justify-center items-center'>
                            <img className='w-5' src={Star1} alt="star1" />
                            <img className='w-5' src={Star2} alt="star2" />
                            <img className='w-5' src={Star3} alt="star3" />
                            <img className='w-5' src={Star4} alt="star4" />
                            <img className='w-5' src={Star5} alt="star5" />
                        </div>
                        166,586 learner reviews
                    </p>
                    <p className='mb-8'>Powered by <span className='text-blue-900 font-bold'>Yotpo.</span></p>
                    <PlainBtn title={"View all reviews"} />
                </div>


                <div className='flex flex-wrap items-start'>
                    <div className='p-3 mr-5 bg-[#030138] mb-5 lg:max-w-[16.5rem] text-white rounded-md shadow-sm'>
                        <div className='flex mb-5'>
                            <img className='w-5' src={Star1} alt="star1" />
                            <img className='w-5' src={Star2} alt="star2" />
                            <img className='w-5' src={Star3} alt="star3" />
                            <img className='w-5' src={Star4} alt="star4" />
                            <img className='w-5' src={Star4} alt="star4" />
                        </div>
                        <p className='font-semibold mb-5'>This course went beyond my expectations. High quality content with brilliant professionals and learners to share experiences.</p>
                        <div className='flex'>
                            <span className='font-bold'>Ke Z. ✔</span>
                            <p className='ml-5'>Verified Learner</p>
                        </div>
                    </div>

                    <div className='p-3 mr-5 bg-[#030138] mb-5 lg:max-w-[16.5rem] text-white rounded-md shadow-sm'>
                        <div className='flex mb-5'>
                            <img className='w-5' src={Star1} alt="star1" />
                            <img className='w-5' src={Star2} alt="star2" />
                            <img className='w-5' src={Star3} alt="star3" />
                            <img className='w-5' src={Star4} alt="star4" />
                            <img className='w-5' src={Star4} alt="star4" />
                        </div>
                        <p className='font-semibold mb-5'>The course was clearly organized with good videos, good readings and book references. The teachers are academic researchers with experience in the field and also... <span>Read more</span></p>
                        <div className='flex'>
                            <span className='font-bold'>Pedro C. ✔</span>
                            <p className='ml-5'>Verified Learner</p>
                        </div>
                    </div>

                    <div className='p-3 mr-5 bg-[#030138] mb-5 lg:max-w-[16.5rem] text-white rounded-md shadow-sm'>
                        <div className='flex mb-5'>
                            <img className='w-5' src={Star1} alt="star1" />
                            <img className='w-5' src={Star2} alt="star2" />
                            <img className='w-5' src={Star3} alt="star3" />
                            <img className='w-5' src={Star4} alt="star4" />
                            <img className='w-5' src={Star4} alt="star4" />
                        </div>
                        <p className='font-semibold mb-5'>Level was challenging yet manageable, great quality content, adaptable length, and good flexibility. The community was also very friendly and helpful. I am so happy I chose... <span>Read more</span></p>
                        <div className='flex'>
                            <span className='font-bold'>Tala Y. ✔</span>
                            <p className='ml-5'>Verified Learner</p>
                        </div>
                    </div>

                    <div className='p-3 mr-5 bg-[#030138] mb-5 lg:max-w-[16.5rem] text-white rounded-md shadow-sm'>
                        <div className='flex mb-5'>
                            <img className='w-5' src={Star1} alt="star1" />
                            <img className='w-5' src={Star2} alt="star2" />
                            <img className='w-5' src={Star3} alt="star3" />
                            <img className='w-5' src={Star4} alt="star4" />
                            <img className='w-5' src={Star4} alt="star4" />
                        </div>
                        <p className='font-semibold mb-5'>What a great course - so informative and pitched at just the right level. Really inspired me and I loved all the participant contributions.</p>
                        <div className='flex'>
                            <span className='font-bold'>Carol S. ✔</span>
                            <p className='ml-5'>Verified Learner</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default OurWorld;
