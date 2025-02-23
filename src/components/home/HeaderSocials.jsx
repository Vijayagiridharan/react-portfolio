import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/Vijayagiridharan' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/vijayagiridharan-subramanian-62227518b/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.instagram.com/vvijayagiridharan/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram />
            </a>
        </div>
    );
};

export default HeaderSocials;
