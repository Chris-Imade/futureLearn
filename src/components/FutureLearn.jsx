import React from 'react';
import FutureStep from "../assets/future-learns.svg";
import People from "../assets/people.svg";
import Computer from "../assets/computer.svg";
import Location from "../assets/location.svg";

const FutureLearn = () => {
    return (
        <>
            <div className='bg-[#030138]'>
                <div className='lg:mr-24 pt-24 bg-white'>
                    <h2 className='ml-24 text-4xl text-[#030138] font-semibold'>Why Future Learn?</h2>
                    <div className='ml-24 w-20 h-2 bg-[#DE00A5] my-6'></div>
                    <img className='w-full mt-[-19.35rem] hidden lg:block' height={600} src={FutureStep} alt="FutureStep" />
                </div>
            </div>

            {/* Drag to top */}
            <div className='ml-5 lg:ml-0 mr-5 lg:mr-[100px] lg:mt-[-63rem] z-50'>
                <div className='w-full flex flex-col lg:flex-row justify-end'>
                    <div className='lg:w-[22rem] min-h-[14rem] w-full p-5 shadow-md rounded-lg bg-white'>
                        <img src={People} alt="people" />
                        <h2>Learn together</h2>
                        <p>We're all about social learning. Chat with others on your course, learn from each other, and develop your skills in a global classroom of millions.</p>
                    </div>
                </div>



                <div className='mt-5 w-full flex flex-col lg:flex-row justify-end'>
                    <div className='mr-5 lg:w-[22rem] min-h-[14rem] w-full p-5 shadow-md rounded-lg bg-white'>
                        <img src={Location} alt="people" />
                        <h2>Learn anything</h2>
                        <p>From healthcare and history to coding and languages, FutureLearn has a course for you, from beginner to expert.</p>
                    </div>

                    <div className='mt-5 lg:mt-0 lg:w-[22rem] min-h-[14rem] w-full p-5 shadow-md rounded-lg bg-white'>
                        <img src={Computer} alt="people" />
                        <h2>Learn flexibly</h2>
                        <p>100% online courses mean you can learn wherever, whenever suits you.</p>
                    </div>
                </div>



                <div className='mt-5 w-full flex flex-col lg:flex-row justify-end'>
                    <div className='mr-5 lg:w-[22rem] min-h-[14rem] w-full mb-5 lg:mb-0 p-5 shadow-md rounded-lg bg-white'>
                        <img src={People} alt="people" />
                        <h2>Learn together</h2>
                        <p>We're all about social learning. Chat with others on your course, learn from each other, and develop your skills in a global classroom of millions.</p>
                    </div>

                    <div className='mr-5 lg:w-[22rem] min-h-[14rem] w-full mb-5 lg:mb-0 p-5 shadow-md rounded-lg bg-white'>
                        <img src={People} alt="people" />
                        <h2>Learn together</h2>
                        <p>We're all about social learning. Chat with others on your course, learn from each other, and develop your skills in a global classroom of millions.</p>
                    </div>

                    <div className='lg:w-[22rem] min-h-[14rem] min-w-[20rem] p-5 shadow-md rounded-lg bg-white'>
                        <img src={People} alt="people" />
                        <h2>Learn together</h2>
                        <p>We're all about social learning. Chat with others on your course, learn from each other, and develop your skills in a global classroom of millions.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FutureLearn;