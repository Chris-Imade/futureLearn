import React from 'react';
import { 
    Banner, 
    Climate, 
    Explore, 
    Footer, 
    FutureLearn, 
    Header, 
    NavBar, 
    News, 
    Plan, 
    ShortCourses 
} from '../components/';
import Square from "../assets/sqr.svg";
import Works from '../components/Works';
import OurWorld from '../components/OurWorld';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <Banner />
            <Plan />
            <Climate />
            <div className='invisible lg:visible relativew-full h-fit'>
                <img className='absolute right-[36.8rem]' src={Square} alt="Square" />
            </div>
            <ShortCourses />
            <Works />
            <FutureLearn />
            <OurWorld />
            <Explore />
            <News />
            <Footer />
        </div>
    );
}

export default Home;
