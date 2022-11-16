import FirstLogo from "../assets/first-logo.svg";
import Rasberi from "../assets/rasperi.svg";
import Kings from "../assets/kings.svg";
import Uni from "../assets/uni.svg";
import Ucl from "../assets/ucl.svg";
import Uni2 from "../assets/uni-2.svg";
import Union from "../assets/u.svg";
import Mona from "../assets/mona.svg";

import Health from "../assets/health.svg";
import Ascent from "../assets/ascent.svg";
import Franc from "../assets/franc.svg";
import Leeds from "../assets/leeds.svg";
import Bloom from "../assets/bloom.svg";
import Coventry from "../assets/coventry.svg";

import FutureLine from "../assets/future-line.svg";
import OneWorld from "../assets/one-world.jpg";
import Climate from "../assets/climate.jpg";

import Chartered from "../assets/CIM.webp";
import ProjectManagement from "../assets/project-management.webp";
import Medicine from "../assets/medicine.jpg";


import expertTracksOne from "../assets/expertTracks-01.webp";
import expertTracksTwo from "../assets/expertTracksTwo.webp";
import expertTracksThree from "../assets/expertTracksThree.webp";

// Image Actons
import CIMAction from "../assets/cim-action.svg";
import CoventryAction from "../assets/coventry-action.svg";


export default {
    FutureLine
}


export  const banner = {
    firstRow: [
        {
             bgColor: '#00A5A6',
             image: FirstLogo,
             type: "large",
             id: 1
        },
        {
            bgColor: '#ffffff',
            image: Rasberi,
            type: "small",
            id: 2
       },
       {
            bgColor: '#E12726',
            image: Kings,
            type: "large",
            id: 3
       },
       {
            bgColor: '#ffffff',
            image: Uni,
            type: "small",
            id: 4
        },
        {
            bgColor: "#F5BD00",
            image: Ucl,
            type: "large",
            id: 5
        },
        {
            bgColor: "#FFFFFF",
            image: Uni2,
            type: "large",
            id: 6
        },
        {
            bgColor: "#002E5F",
            image: Union,
            type: "small",
            id: 7

        },
        {
            bgColor: "#FFFFFF",
            image: Mona,
            type: "large",
            id: 8
        },
    ],
    secondRow: [
        {
            bgColor: "#FFFFFF",
            image: Health,
            id: 1
        },
        {
            bgColor: "#A100FF",
            image: Ascent,
            id: 2
        },
        {
            bgColor: "#FFFFFF",
            image: Franc,
            id: 3
        },
        {
            bgColor: "#004F32",
            image: Leeds,
            id: 4
        },
        {
            bgColor: "#FFFFFF",
            image: Bloom,
            id: 5
        },
        {
            bgColor: "#015FBC",
            image: Coventry,
            id: 6
        }
    ]
}

export const climateCards = [
    {
        image: OneWorld,
        title: `Woodwell Climate
                Reasearch Center
                `,
        desc: `
                Thawning Permafrost:
                Science, Policy, and
                Environmental Justice in 
                the Artic
        `,
        period: "4 weeks",
        time: "2 hours per week",
        btnAction: "Nature & Environment",
        id: 1
    },
    {
        image: Climate,
        title: `Woodwell Climate 
                Reasearch Center
                `,
        desc: `
                Thawning Permafrost:
                Science, Policy, and
                Environmental Justice in 
                the Artic
        `,
        period: "4 weeks",
        time: "2 hours per week",
        btnAction: "Nature & Environment",
        id: 2
    }
]

export const shortCourses = [
    {
        id: 1,
        image: Chartered,
        title: "Chartered Institute of Marketing",
        desc: "Digital Copywriting Fundamentals",
        period: "3 weeks",
        time: "3 hrs per week",
        btnAction: "Business & Management",
        imgAction: CIMAction
    },
    {
        id: 2,
        image: ProjectManagement,
        title: "Coventry University",
        desc: "Foundation of Project Management",
        period: "2 weeks",
        time: "3 hrs per week",
        btnAction: "Business & Management",
        imgAction: CoventryAction
    },
    {
        id: 3,
        image: Medicine,
        title: "UCL (University College London)",
        desc: "Perioperative Medicine in Action",
        period: "4 weeks",
        time: "3 hrs per week",
        btnAction: "Healthcare & Medicine",
        imgAction: CIMAction
    },
    {
        id: 4,
        image: Medicine,
        title: "Health Education England",
        desc: "Safeguarding Adults: Level 3 Training",
        period: "3 weeks",
        time: "1hr per week",
        btnAction: "Healthcare & Medicine",
        imgAction: CoventryAction
    }
]

export const expertTracks = [
    {
        id: 1,
        image: expertTracksOne,
        title: "Coventry University",
        desc: "Team Building and Transformational Leadership: How to Get Ahead in Healthcare Leadership and  Management",
        course: "5 courses",
        period: "10 weeks",
        level: "Introductory",
        btnAction: "Business & Management",
        imgAction: CoventryAction
    },
    {
        id: 2,
        image: expertTracksTwo,
        title: "Central Queensland University",
        desc: "Educational Neuroscience: Research-Led Teachinng Approaches",
        course: "4 courses",
        period: "8 weeks",
        level: "intermediate",
        btnAction: "Teaching",
        imgAction: CoventryAction
    },
    {
        id: 3,
        image: expertTracksThree,
        title: "Conventry University",
        desc: "Project Management & it\'s Role in Effective Business",
        course: "5 courses",
        period: "10 weeks",
        level: "intermediate",
        btnAction: "Business & Management",
        imgAction: CoventryAction
    }
]