import React from 'react';
import './Socials.css';
// import button from 'react-bootstrap/button';
import { AiFillGithub, AiOutlineGoogle, AiFillFacebook, AiOutlineTwitter ,AiFillLinkedin} from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs'


const Socials = () => {
  return (
    <div className='mainSocials'>
        
        {/* Login Links */}
        <div className='loginBtnDiv'>
        <button className='btn'>
        <AiOutlineGoogle/> Login with Google
        </button>
        <button className='btn'>
        <AiFillGithub/> Login with Github
        </button>
        </div>

        {/* Social Links */}
        <div className='sociaSection'>
        <h1>Socials</h1>
        <ul className='socialLinks'>
        <li className='links' >
        <button><AiFillFacebook /> Facebook</button>
        </li>
        <li className='links' >
        <button><AiOutlineTwitter /> Twitter</button>
        </li>
        <li className='links' >
        <button><BsWhatsapp /> Whatsapp</button>
        </li>
        <li className='links' >
        <button><AiFillLinkedin /> Linkedin</button>
        </li>
        </ul>
        </div>

        {/* Ad sections */}
        <div className='adDiv'>
          <img className='ad1' src="https://cetking.com/wp-content/uploads/2019/03/83105515-dizain-advertising.jpg" alt="adverisment 1" title="ad 1" />
          <img className='ad2' src="https://blog-assets.hootsuite.com/wp-content/uploads/2024/08/Facebook-search-results-ad-size.png" alt="adverisment 2" title="ad 2" />
        </div>

    </div>
  )
}

export default Socials
