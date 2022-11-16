import React from 'react';
import { colors } from '../constants/globalStyles';
import PlainBtn from './PlainBtn';
import { Link } from "react-router-dom";
import FooterLogo from "../assets/footer-logo.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Youtube from "../assets/youtube.svg";
import Linkedin from "../assets/linkedin.svg";

const Footer = () => {
    return (
        <div className=''>
            <section className='flex lg:justify-between flex-col lg:flex-row lg:px-24 px-5 py-8 bg-gray-300'>
                <div>
                    <h1 className='font-semibold text-2xl'><i>Join</i> <span className='font-normal'>FutureLearn</span> today</h1>
                </div>
                <div className='lg:max-w-[37rem]'>
                    <p
                        className='mb-8 font-semibold'
                        style={{ color: colors.darkBlue }}
                    >Register for a FutureLearn account to get personalised course recommendations and offers straight to your inbox.</p>
                    <a className='' href="#">
                        <PlainBtn title={"Sign up now"} />
                    </a>
                </div>
            </section>
            <footer>
                <div className='bg-[#4A4D55] text-white py-12 lg:px-24 px-5 flex flex-col lg:flex-row justify-between items-center lg:items-start'>
                    <ul className='mb-12 text-center lg:text-left'>
                        <li className='font-bold mb-5'>About FutureLearn</li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Our Values</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Our Partners</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Become a partner</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Work at FutureLearn</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Press</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Blog</Link></li>
                    </ul>

                    <ul className='mb-12 text-center lg:text-left'>
                        <li className='font-bold mb-5'>Using FutureLearn</li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Using our platform</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>FutureLearn Reviews</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Learning guide</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Certificates</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Unlimited</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Microcredentials</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>ExpertTracks</Link></li>
                    </ul>

                    <ul className='mb-12 text-center lg:text-left'>
                        <li className='font-bold mb-5'>Need some help?</li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>FAQs</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Child safety</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Help Centre</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Contact</Link></li>
                    </ul>

                    <ul className='mb-12 text-center lg:text-left'>
                        <li className='font-bold mb-5'>Popular Subjects</li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Business and Management</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Healthcare and Medicine</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Help Centre</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Teaching</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Psychology and Mental Health</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>IT and Computer Science</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Featured courses</Link></li>
                    </ul>

                    <ul className='mb-12 text-center lg:text-left'>
                        <li className='font-bold mb-5'>Developing Skills</li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>FutureLearn for Business</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>FutureLearn Schools</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Course collection</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Career advice</Link></li>
                    </ul>

                    <ul className='mb-12 text-center lg:text-left'>
                        <li className='font-bold mb-5'>Small Print</li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>T&Cs</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Privacy Policy</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Refund Policy</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Cookie policy</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Code of conduct</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Accessibility policy</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Sitemap</Link></li>
                        <li className='hover:underline font-semibold mb-3'><Link to={"#"}>Open steps sitemap</Link></li>
                    </ul>
                </div>
                <div className='bg-[#3A343A] px-5 lg:px-24 py-10 flex justify-between items-center flex-col-reverse lg:flex-row'>
                    <div className='flex items-center justify-center'>
                        <img className='mr-5' src={Facebook} alt="Facebook" />
                        <img className='mr-5' src={Instagram} alt="Instagram" />
                        <img className='mr-5' src={Twitter} alt="Twitter" />
                        <img className='mr-5' src={Youtube} alt="Youtube" />
                        <img className='mr-5' src={Linkedin} alt="Linkedin" />
                    </div>
                    <div><img className='lg:mb-0 mb-5' src={FooterLogo} alt="Footer Logo" /></div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
