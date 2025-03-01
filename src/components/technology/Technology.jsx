import React from 'react';
import './Technology.css';
import Image1 from '../../assets/framework.png'
import Image2 from '../../assets/database.svg'
import Image3 from '../../assets/tools.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Frameworks & Libraries",
        description:
            "React, React Native, Redux, Spring Boot, Flask, Node.js, Express.js",
    },
    {
        id: 2,
        image: Image2,
        title: "Databases",
        description:
            "MySQL, MongoDB, PostgreSQ",
    },
    {
        id: 3,
        image: Image3,
        title: "Tools & Platforms",
        description:
            "Git, Postman, Jenkins, Docker, Gradle, Ubuntu/Linux",
    },
];

const Technology = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Technologies</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Technology




