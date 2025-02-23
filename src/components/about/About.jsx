import React from 'react';
import './About.css';
import Image from '../../assets/fotor-20250206191430.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hey there! I'm Vijay, a Master's student in Computer Science at Purdue University Fort Wayne. I'm passionate about leveraging technology to create innovative and scalable solutions.  Fast forward to today, and my journey has been an exciting mix of software development, web technologies, and cybersecurity. I thrive in dynamic environments where I can solve real-world challenges through code. Over the years, I’ve honed my skills in full-stack development, cybersecurity, and software engineering best practices. 
                        </p>
                        {/* <ul className="about__list">
                            
                            <li>Frameworks & Libraries: React, React Native, Redux, Spring Boot, Flask, Node.js, Express.js</li>
                            <li>Databases: MySQL, MongoDB, PostgreSQL</li>
                            <li>Tools & Platforms: Git, Postman, Jenkins, Docker, Gradle, Ubuntu/Linux</li>

                        </ul> */}
                        <button className="btn" onClick={downloadResume}>Download CV/Resume</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* <AboutBox /> */}
        </section>
    )
}

export default About