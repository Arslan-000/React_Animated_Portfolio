import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
     <div className='container contact' id="contact">
     <h1>CONTACT</h1>
     <div className="contact-icons" data-aos="zoom-in-up"
     data-aos-duration="1000">
     <a href="https://www.instagram.com/arslan0348/" target="blank" className="items">
     <FaInstagramSquare className="icon"/>
     </a>
     <a href="https://web.facebook.com/jani.dogar.3" target="blank" className="items">
     <CiFacebook className="icon"/>
     </a>
     <a href="https://www.linkedin.com/in/arslan-munir-42747b196/" target="blank" className="items">
     <CiLinkedin className="icon"/>
     </a>
     <a href="https://twitter.com/" target="blank" className="items">
     <FaSquareXTwitter className="icon"/>
     </a>
     <a href="https://github.com/Arslan-000" target="blank" className="items">
     <FaGithubSquare className="icon"/>
     </a>
     <a href="https://mail.google.com/mail/u/0/#inbox" target="blank" className="items">
     <SiGmail className="icon"/>
     </a>
     </div>
     </div> 
    </>
  )
}

export default Contact
