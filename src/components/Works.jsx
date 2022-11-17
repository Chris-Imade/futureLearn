import React, { useState } from 'react';
import { shortCourses } from '../constants/data';
import { colors } from '../constants/globalStyles';

const workShortCourses = [
    {
        id: 1,
        title: 'Choose a Short Course',
        desc: 'From introductory to advanced, you’ll find high-quality courses across every subject, designed and taught by academic and industry experts.'
    },
    {
        id: 2,
        title: 'Subcribe or Upgrade',
        desc: 'Join FutureLearn Unlimited for long-term access to your course and a CV-ready certificate, or upgrade individually on each course.',
    },
    {
        id: 3,
        title: 'Learn, connect and discuss',
        desc: "Courses are divided into weeks and steps. You’ll be able to connect with other learners throughout your learning journey."
    },
    {
        id: 4,
        title: "Find your next course",
        desc: "Now you’ve caught the bug, what will you learn next?",
    }
]

const workexpertTrack = [
    {
        id: 1,
        title: 'Choose your expert track',
        desc: "These series of short courses from world-class institutions have been handpicked to help you reach your goals and build your skills in a specific subject area."
    },
    {
        id: 2,
        title: 'Start your 7-day free trial',
        desc: "Get full access to the suite of courses and assessments for a full week, so you can decide if it’s right for you."
    },
    {
        id: 3,
        title: 'Suscribe to keep learning',
        desc: "Pay a subscription fee of just £36 per month for as long as it takes for you to complete the ExpertTrack. Learn at your own pace and cancel any time."
    },
    {
        id: 4,
        title: 'Boost your CV with digital certificates',
        desc:  "You’ll get a certificate for every completed course and after your final assessment. You can use these to bolster your expert credentials and progress your career.",
    }
]

const credentials = [
    {
        id: 1,
        title: "accredited from leading universities and brands",
        desc: "Microcredentials are academic or professional credentials, designed to help you upskill without the time and cost commitment of a degree."
    },
    {
        id: 2,
        title: "Join your course",
        desc: "Find out whether you’re eligible for your chosen microcredential, save the start date and click ‘join now’ to buy your course."
    },
    {
        id: 3,
        title: "Learn from expert instructors",
        desc: "Running for multiple weeks, each course is run by a world-class instructor. You’ll be assessed as you learn through tests and exercises."
    },
    {
        id: 4,
        title: "Earn your credentials and boost your CV",
        desc: "Prove your new skills with a professional accreditation and take the next step in your career or academic journey."
    }
]

const onlineDegree = [
    {
        id: 1,
        title: "Find your degree",
        desc: "From undergraduate certificates to full masters degrees, browse our range of subjects and find a degree that can be completed 100% online.",
    },
    {
        id: 2,
        title: "Apply to study at a world-class universities",
        desc: "Like the look of a degree? Request more info by filling in our form or click ‘Apply now’ to apply via the university’s own systems."
    },
    {
        id: 3,
        title: "Learn flexibly online",
        desc: "Work through your degree in your own time, whenever and wherever suits you. All you need is access to the internet and a device to learn on."
    },
    {
        id: 4,
        title: "Gain your degree",
        desc: "Complete all the programs, pass the assessments and exams, and you’ll be the proud owner of an internationally recognised qualification."
    }
]

const Works = () => {
    const [activeTab, setActiveTab] = useState("Tab1");
    

    return (
        <div    
            className='flex flex-col justify-center items-center py-24'
            style={{
                backgroundColor: colors.darkBlue
            }}>
            <h2 className='text-white text-2xl'>How does it work?</h2>
            <div className='w-20 my-6 h-2 bg-[#DE00A5]'></div>

            <div className='mt-6 mb-12'>
                <ul className='pl-24 lg:pl-0 pr-12 lg:pr-0 flex no-scrollbar overflow-x-auto justify-around'>
                    <li onClick={() => setActiveTab("Tab1")} className={`relative h-10 min-w-fit font-bold hover:cursor-pointer text-white mx-3 ${activeTab === "Tab1" ?  `active` : `hover:tab`}`}>Short Courses</li>
                    <li onClick={() => setActiveTab("Tab2")} className={`relative h-10 min-w-fit font-bold hover:cursor-pointer text-white mx-3 ${activeTab === "Tab2" ?  `active` : `hover:tab`}`}>Expert Tracks</li>
                    <li onClick={() => setActiveTab("Tab3")} className={`relative h-10 min-w-fit font-bold hover:cursor-pointer text-white mx-3 ${activeTab === "Tab3" ?  `active` : `hover:tab`}`}>Microcredentials</li>
                    <li onClick={() => setActiveTab("Tab4")} className={`relative h-10 min-w-fit font-bold hover:cursor-pointer text-white mx-3 ${activeTab === "Tab4" ?  `active` : `hover:tab`}`}>Online Degrees</li>
                </ul>
            </div>

            <div className='flex justify-between mx-24'>
                <div className={`${activeTab === "Tab1" ? "block" : "hidden"} flex flex-col lg:flex-row`}>
                    {workShortCourses.map((item) => (
                        <div className='text-white max-w-[20rem]' key={item.id}>
                            <h3 className='font-semibold mt-4 text-xl'>{item.id}</h3>
                            <h1 className='font-semibold mt-4 text-xl mb-4'>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className={`${activeTab === "Tab2" ? "block": "hidden"} flex flex-col lg:flex-row`}>
                    {workexpertTrack.map((item) => (
                        <div className='text-white max-w-[20rem]' key={item.id}>
                            <h3 className='font-semibold mt-4 text-xl'>{item.id}</h3>
                            <h1 className='font-semibold mt-4 text-xl mb-4'>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className={`${activeTab === "Tab3" ? "block": "hidden"} flex flex-col lg:flex-row`}>
                    {credentials.map((item) => (
                        <div className='text-white max-w-[20rem]' key={item.id}>
                            <h3 className='font-semibold mt-4 text-xl'>{item.id}</h3>
                            <h1 className='font-semibold mt-4 text-xl mb-4'>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className={`${activeTab === "Tab4" ? "block": "hidden"} flex flex-col lg:flex-row`}>
                    {onlineDegree.map((item) => (
                        <div className='text-white max-w-[20rem]' key={item.id}>
                            <h3 className='font-semibold mt-4 text-xl'>{item.id}</h3>
                            <h1 className='font-semibold mt-4 text-xl mb-4'>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Works;
