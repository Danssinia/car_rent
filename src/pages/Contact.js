import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import { BsTelegram } from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
const Contact = () => {
    return ( 
        <div className="contact-container">
            <div className="contact-social">
                <h2>Contact Me</h2>
                    <a href="https://www.linkedin.com/in/danssinia" target='_blank' rel='noopener noreferrer'><p><BsLinkedin className='icons'/></p></a>
                    <a href="https://github.com/Danssinia" target='_blank' rel="noopener noreferrer"><p><FaGithubSquare className='icons'/></p></a>
                    <a href="https://t.me/Danssinia" target='_blank' rel="noopener noreferrer"><p><BsTelegram className='icons'/></p></a>
            </div>
            <div className="contact-phone">
                <h3>Phone</h3>
                <p><AiFillPhone/></p>
                <h3>+251-921530928</h3>
                <a href="mailto:danmerethio19@gmail.com" target='_blank' rel="noopener noreferrer"><p><MdEmail/></p></a>
                <h3>danmerethio19@gmail.com</h3>
            </div>
            <div className="contact-map">
                <h3>Map</h3>
                <iframe style={{
                    width: "300px",
                    height: "440px",
                    paddingTop: "6px",
                    paddingRight: "6px"
                    }} title='map' src="https://maps.google.com/maps?q=sky%20light%20hotel&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" ></iframe>
            </div>
        </div>
     );
}
 
export default Contact;