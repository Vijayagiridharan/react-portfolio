import React from 'react';
import './Home.css';
import Me from '../../assets/vijay photo (1).png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                {/* <img src={Me} alt="" className='home__img' width='200' /> */}
                <h1 className="home__name">Vijayagiridharan</h1>
                <h1 className="home__name">Subramanian</h1>
                <span className="home__education">I'm a Software Engineer</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
            
        </section>
    )
}

export default Home