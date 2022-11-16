import React from 'react';
import { colors } from '../constants/globalStyles';
import PlainBtn from './PlainBtn';
import AncientRome from "../assets/ancient-rome.png";
import LearnerST from "../assets/LearnerST_V1.png";
import FutureWork from "../assets/future-work.png";
import AIWeb from "../assets/aiweb.png";


const News = () => {
    return (
        <>
            <section className='px-5 lg:px-24 py-24'>
                <div className='mb-12 lg:mb-0'>
                        <h3 
                            style={{ color: colors.darkBlue }}
                            className='text-[38px]'> The latest <span className='font-bold'>news and views<br /></span> from the world of learning</h3>
                        <div className='w-[64px] h-[8px] bg-[#DE00A5] my-5'></div>
                        <p 
                            style={{ color: colors.darkBlue }}
                            className='text-[16px] mb-5 font-semibold'>
                            Ideas, insights, inspiration and opinion from our expert educators.
                        </p>
                        <PlainBtn title={"Read more stories"} />
                    </div>

                    <div className='mt-12 flex flex-col lg:flex-row'>
                        <div className='rounded-md mr-5 mb-5 lg:mb-0 relative group lg:max-w-[269px] h-[310px] bg-slate-700 overflow-hidden'>
                            <img className='object-cover h-full hover:scale-110 transition-all duration-500 ease-in-out hover:cursor-pointer' src={AncientRome} alt="Ancient Rome" />
                            <p className='absolute bottom-4 left-4 p-2 w-[90%] bg-white text-slate-800 font-semibold'>Exploring Ancient Rome: How digital models bring history to life</p>
                        </div>
    
                        <div className='rounded-md mr-5 mb-5 lg:mb-0 relative group lg:max-w-[269px] h-[310px] bg-slate-700 overflow-hidden'>
                            <img className='object-cover h-full hover:scale-110 transition-all duration-500 ease-in-out hover:cursor-pointer' src={LearnerST} alt="Learner" />
                            <p className='absolute bottom-4 left-4 p-2 w-[90%] bg-white text-slate-800 font-semibold'>Learner stories: Why you should take an online course with FutureLearn</p>
                        </div>

                        <div className='rounded-md mr-5 mb-5 lg:mb-0 relative group lg:max-w-[269px] h-[310px] bg-slate-700 overflow-hidden'>
                            <img className='object-cover h-full hover:scale-110 transition-all duration-500 ease-in-out hover:cursor-pointer' src={FutureWork} alt="Future work" />
                            <p className='absolute bottom-4 left-4 p-2 w-[90%] bg-white text-slate-800 font-semibold'>The future of work: What you need to know</p>
                        </div>

                        <div className='rounded-md mr-5 mb-5 lg:mb-0 relative group lg:max-w-[269px] h-[310px] bg-slate-700 overflow-hidden'>
                            <img className='object-cover h-full hover:scale-110 transition-all duration-500 ease-in-out hover:cursor-pointer' src={AIWeb} alt="AIWeb" />
                            <p className='absolute bottom-4 left-4 p-2 w-[90%] bg-white text-slate-800 font-semibold'>Why AI on the Internet isn’t actually big news</p>
                        </div>
                    </div>
                </section>

            <hr className='my-12 mx-5' />

            <div className='mt-5 flex flex-col lg:flex-row mx-5 lg:mx-24 mb-12'>
                {
                [
                    { title: "Subject", desc: "Courses grouped by subject" },
                    { title: "Short Courses", desc: "Learn new skills with a flexible online course" },
                    { title: "ExpertTracks", desc: "Upskill with a series of specialist courses" },
                    { title: "Microcredentials", desc: "Earn professional or academic accreditation" },
                    { title: "Online Degrees", desc: "Study flexibly online as you build to a degree" },
                ].map((item) => (
                    <div className='mx-5 text-center mb-5'>
                        <h2 
                            style={{ color: colors.primary }}
                            className='font-semibold text-2xl'>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                ))
                }
            </div>
        </>
    );
}

export default News;
