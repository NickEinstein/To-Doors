import React from 'react';
// import ReactDOM from 'react-dom';
// import { BsYoutube,BsFacebook,BsInstagram, BsApple, BsFillFileEarmarkCodeFill } from 'react-icons/bs';
// import { AiFillAndroid,AiOutlineCopyright, AiFillUnlock } from 'react-icons/ai';


const Footer = () => {
    return (
        <div style={{backgroundColor:'#370548', padding:'70px 60px', color:'white'}} className='footer general-padding flex-between' >
            <ul>
                <h2 style={{fontSize:"22px", marginBottom:'100px', color:'white'}}>Categories</h2>
               

                <li> Development & IT</li>
                <li>Design & Creative</li>
                <li>Sales & Marketing</li>
                <li>Writing & Translation</li>
                <li>Backend Development</li>
                <li>CMS Development</li>
                <li>HR & Training</li>
                <li>Legal</li>
                <li>Hire freelancers</li>
                <li>Mobile App Development</li>
            </ul>

            <ul>
                <h2 style={{fontSize:"22px", marginBottom:'100px', color:'white'}}>Fore Talent</h2>
               

                
                <li>How to Find Work</li>
                <li>Direct Contracts</li>
                <li>How to update profile</li>


            </ul>


            <ul>
                <h2 style={{fontSize:"22px", marginBottom:'100px', color:'white'}}>For Clients</h2>
               

                <li> How To Hire</li>
                <li>Talent Scout</li>
                <li>Sales & Marketing</li>
                <li>Payment Method</li>
                <li>Direct Contracts</li>
                <li>Hire Worldwide</li>
               
               
            </ul>

            <ul>
                <h2 style={{fontSize:"22px", marginBottom:'100px', color:'white'}}>About Us</h2>
               

                

                <li> Investor Relations</li>
                <li> Careers</li>
                <li>Our Impact</li>
                <li>Press</li>
                <li>Contact Us</li>
            </ul>
                

            <ul>
                <h2 style={{fontSize:"22px", marginBottom:'100px', color:'white'}}>Support</h2>
               
                



                <li> Help & Support</li>
                <li>Trust & Safety</li>
                <li>FAQs</li>
                <li>Community</li>
                
            </ul>
        </div>
    )
}
export default Footer;
