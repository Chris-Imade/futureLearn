import React from 'react';
import { expertTracks, shortCourses } from '../constants/data';
import { colors } from '../constants/globalStyles';
import PlainBtn from './PlainBtn';
import Time from "../assets/time.svg";
import Hours from "../assets/hours.svg";
import LeaveImg from "../assets/leave.webp";
import Icon from "../assets/icon.png";
import Group from "../assets/group.webp";
// import ShortTrack from "../assets/short-course-track.svg";
import CoventryAction from "../assets/coventry-action.svg";
import CIMAction from "../assets/cim-action.svg";

const ShortCourses = () => {
    return (
        <div className='mt-32 mx-12 lg:mx-24 relative'>
            <div className='mb-12'>
                    <h3 
                        style={{ color: colors.darkBlue }}
                        className='text-[38px]'>Short courses: <span className='font-semibold'>bite-sized,<br /> flexible learning</span></h3>
                    <div className='w-[64px] h-[8px] bg-[#DE00A5] my-3'></div>
                    
                    <p  
                        style={{ color: colors.darkBlue }}
                        className='font-semibold text-[16px] mb-3'>
                        Upskill, reskill or pursue a passion with short courses across every<br /> subject, whether you’re a beginner or already an expert.
                    </p>
                    <PlainBtn title={"View all short courses"} />
                </div>

                <div className='flex overflow-x-auto no-scrollbar min-h-[384px]'>
                    {shortCourses.map((item) => (
                        <>
                            <div className='mr-10 bg-white hover:bg-gray-100 shadow-lg lg:mt-[-2rem] lg:mr-10 mb-12 lg:mb-0 group min-w-[300px] h-[384px] hover:cursor-pointer'>
                                <div className='relative overflow-hidden group-hover:cursor-pointer'>
                                    <div className='w-full absolute h-full bg-pink-400 opacity-20 group-hover:scale-105 z-20 transition-all duration-500 ease-in-out'></div>
                                    <img src={item.image} alt="climate" className='group-hover:scale-105 transition-all duration-500 ease-in-out'/>
                                    <div className='absolute top-12 right-4 w-[7rem] bg-white rounded-md z-50 shadow-md p-2'><img src={item.imgAction} alt="action tag" /></div>
                                </div>

                                <div className='px-5 my-2'>
                                    <h2 className='text-[16px] text-[#787575] mb-2'>{item.title}</h2>
                                    <h4 className='text-[16px] text-[#262424] mb-5 font-semibold'>{item.desc}</h4>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img width={13} src={Time} alt="time-icon" />
                                            <p className='ml-1 text-sm text-slate-800'>{item.period}</p>
                                        </div>
                                        <div className='flex'>
                                            <img width={13} src={Hours} alt="clock-icon" />
                                            <p className='ml-1 text-sm text-slate-800'>{item.time}</p>
                                        </div>
                                    </div>
                                    <button className='text-slate-800 px-3 py-2 my-5 font-bold text-[12px] bg-[#C0C0C0]'>{item.btnAction}</button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div className='mt-12 w-full flex justify-end'>
                    <div className='mb-12'>
                        <h3 
                            style={{ color: colors.darkBlue }}
                            className='text-[38px]'>ExpertTracks: become an<br /><span className='font-semibold'>expert in your industry</span></h3>
                        <div className='w-[64px] h-[8px] bg-[#DE00A5] my-3'></div>
                        
                        <p  
                            style={{ color: colors.darkBlue }}
                            className='font-semibold text-[16px] mb-3'>
                            Master new skills and specialise with these series of in-depth<br /> courses.
                        </p>
                        <PlainBtn title={"View all ExpertTracks"} />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row mt-5'>
                    {
                        expertTracks.map((item) => (
                            <>
                                <div className='mr-10 bg-white hover:bg-gray-100 shadow-lg lg:mt-[-2rem] lg:mr-10 mb-12 lg:mb-0 group lg:min-w-[376px] lg:w-[376px] h-[430px] hover:cursor-pointer'>
                                    <div className='relative overflow-hidden group-hover:cursor-pointer h-[200px]'>
                                        <div className='w-full absolute h-full bg-pink-400 opacity-20 group-hover:scale-105 z-20 transition-all duration-500 ease-in-out'></div>
                                        <img src={item.image} alt="climate" className='group-hover:scale-105 transition-all duration-500 ease-in-out w-full'/>
                                        <div className='absolute top-4 right-4 w-[7rem] bg-white rounded-md z-50 shadow-md p-2'><img src={item.imgAction} alt="action tag" /></div>
                                    </div>

                                    <div className='px-5 my-2'>
                                        <h2 className='text-[16px] text-[#787575] mb-2'>{item.title}</h2>
                                        <h4 className='text-[16px] text-[#262424] mb-2 font-semibold'>{item.desc}</h4>
                                        <div className='flex items-center w-full'>
                                            <div className='flex mr-3 items-center'>
                                                <svg style={{ width: "13px" }} xmlns="http://www.w3.org/2000/svg" class="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa" viewBox="0 0 32 32" aria-hidden="false">
                                                    <path d="M28 8V4h-4V0H0v24h4v4h4v4h24V8zM2 2h20v20H2zm28 28H10v-2h18V17h-2v9H6v-2h18V6h2v6h2v-2h2z">
                                                    </path>
                                                </svg>
                                                <p className='ml-1 text-sm text-slate-800 w-[5rem]'>{item.course}</p>
                                            </div>
                                            <div className='flex mr-3'>
                                                <img width={13} src={Time} alt="time-icon" />
                                                <p className='ml-1 text-sm text-slate-800'>{item.period}</p>
                                            </div>
                                            <div className='flex'>
                                                <img width={13} src={Icon} alt="Icon" />
                                                <p className='ml-1 text-sm text-slate-800'>{"Undergradate"}</p>
                                            </div>
                                        </div>
                                        <button className='text-slate-800 px-3 py-2 my-5 font-bold text-[12px] bg-[#C0C0C0]'>{item.btnAction}</button>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>

                <div className='mt-24 mb-32'>
                    <h3 
                        style={{ color: colors.darkBlue }}
                        className='text-[38px]'>Microcredentials: <span className='font-semibold'>build in-<br />demand career skills</span></h3>
                    <div className='w-[64px] h-[8px] bg-[#DE00A5] my-3'></div>
                    
                    <p  
                        style={{ color: colors.darkBlue }}
                        className='font-semibold text-[16px] mb-3'>
                        Gain a professional or academic qualification to boost your CV.
                    </p>
                    <PlainBtn title={"View all Microcredentials"} />
                </div>
                

                <div className='flex flex-col lg:flex-row mb-12'>
                    <div className='mr-10 bg-white hover:bg-gray-100 shadow-lg lg:mt-[-2rem] lg:mr-10 mb-12 lg:mb-0 group min-w-[376px] h-[325px] hover:cursor-pointer'>
                        <div className='relative overflow-hidden group-hover:cursor-pointer h-[150px]'>
                            <div className='w-full absolute h-full bg-pink-400 opacity-20 group-hover:scale-105 z-20 transition-all duration-500 ease-in-out'></div>
                            <img src={LeaveImg} alt="climate" className='group-hover:scale-105 transition-all duration-500 ease-in-out w-full'/>
                            <div className='absolute top-4 right-4 w-[7rem] bg-white rounded-md z-50 shadow-md p-2'><img src={CoventryAction} alt="action tag" /></div>
                        </div>

                        <div className='px-5 my-2'>
                            <h2 className='text-[16px] text-[#787575] mb-2'>Institut Français de la Mode (IFM) co-created by Kering</h2>
                            <h4 className='text-[16px] text-[#262424] mb-2 font-semibold'>{"Fashion Sustainability: Shaping Fashion’s Future"}</h4>
                            <div className='flex items-center w-full'>
                                <div className='flex mr-3 items-center'>
                                    <svg style={{ width: "13px" }} xmlns="http://www.w3.org/2000/svg" class="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa" viewBox="0 0 32 32" aria-hidden="false">
                                        <path d="M28 8V4h-4V0H0v24h4v4h4v4h24V8zM2 2h20v20H2zm28 28H10v-2h18V17h-2v9H6v-2h18V6h2v6h2v-2h2z">
                                        </path>
                                    </svg>
                                    <p className='ml-1 text-sm text-slate-800 w-[5rem]'>{"4 course"}</p>
                                </div>
                                <div className='flex mr-3'>
                                    <img width={13} src={Time} alt="time-icon" />
                                    <p className='ml-1 text-sm text-slate-800'>{"10 weeks"}</p>
                                </div>
                                <div className='flex'>
                                    <img width={13} src={Icon} alt="Icon" />
                                    <p className='ml-1 text-sm text-slate-800'>{"Undergradate"}</p>
                                </div>
                            </div>
                            <button className='text-slate-800 px-3 py-2 my-5 font-bold text-[12px] bg-[#C0C0C0]'>{"Creative Arts & Media"}</button>
                        </div>
                    </div>

                    <div className='mr-10 bg-white hover:bg-gray-100 shadow-lg lg:mt-[-2rem] lg:mr-10 mb-12 lg:mb-0 group min-w-[376px] h-[325px] hover:cursor-pointer'>
                        <div className='relative overflow-hidden group-hover:cursor-pointer h-[150px]'>
                            <div className='w-full absolute h-full bg-pink-400 opacity-20 group-hover:scale-105 z-20 transition-all duration-500 ease-in-out'></div>
                            <img src={Group} alt="climate" className='group-hover:scale-105 transition-all duration-500 ease-in-out w-full'/>
                            <div className='absolute top-4 right-4 w-[7rem] bg-white rounded-md z-50 shadow-md p-2'><img src={CIMAction} alt="action tag" /></div>
                        </div>

                        <div className='px-5 my-2'>
                            <h2 className='text-[16px] text-[#787575] mb-2'>Institut Français de la Mode (IFM) co-created by Kering</h2>
                            <h4 className='text-[16px] text-[#262424] mb-2 font-semibold'>{"Fashion Sustainability: Shaping Fashion’s Future"}</h4>
                            <div className='flex items-center w-full'>
                                <div className='flex mr-3 items-center'>
                                    <svg style={{ width: "13px" }} xmlns="http://www.w3.org/2000/svg" class="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa" viewBox="0 0 32 32" aria-hidden="false">
                                        <path d="M28 8V4h-4V0H0v24h4v4h4v4h24V8zM2 2h20v20H2zm28 28H10v-2h18V17h-2v9H6v-2h18V6h2v6h2v-2h2z">
                                        </path>
                                    </svg>
                                    <p className='ml-1 text-sm text-slate-800 w-[5rem]'>{"4 course"}</p>
                                </div>
                                <div className='flex mr-3'>
                                    <img width={13} src={Time} alt="time-icon" />
                                    <p className='ml-1 text-sm text-slate-800'>{"10 weeks"}</p>
                                </div>
                                <div className='flex'>
                                    <img width={13} src={Icon} alt="Icon" />
                                    <p className='ml-1 text-sm text-slate-800'>{"Undergradate"}</p>
                                </div>
                            </div>
                            <button className='text-slate-800 px-3 py-2 my-5 font-bold text-[12px] bg-[#C0C0C0]'>{"Creative Arts & Media"}</button>
                        </div>
                    </div>
                </div>
                <div className='lg:short-course-step'></div>
                <div className='lg:expert-track-step'></div>
                <div className='lg:credentials-track-step'></div>
        </div>
    );
}

export default ShortCourses;
