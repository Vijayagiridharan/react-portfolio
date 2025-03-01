import React from 'react';
import './About.css';
import Image from '../../assets/vijayimage.png';
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
                        Hey there! I'm Vijayagiridharan Subramanian, an aspiring Software Engineer and Master's student in Computer Science at Purdue University Fort Wayne. I specialize in full-stack development, cloud computing, and cybersecurity, building scalable and high-performance applications.With expertise in React, Node.js, Django, and DevOps tools like Docker, I thrive on solving complex challenges through code. Passionate about innovation, I enjoy creating efficient, user-centric solutions while collaborating in Agile environments.
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