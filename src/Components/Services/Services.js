import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop, faTabletAlt } from '@fortawesome/free-solid-svg-icons';
import './Services.css'
const Services = () => {
    return (
        <div className="services-container">
            <div className="services-list-container">
                <div className="services-desc-container">
                    <h1>My <span>Experience</span></h1>
                    <p>
                        During my tenure at <span>Granite River Labs</span>, I developed and maintained backend systems using .NET C# and React for various high-impact projects.
                    </p>
                    <p>
                        I collaborated with cross-functional teams to design, develop, and implement software solutions that meet client requirements and industry standards.
                    </p>
                    <p>
                        My role involved thorough testing and debugging to ensure high performance and reliability, as well as participating in code reviews to maintain code quality and share best practices with the team.
                    </p>
                    <p>
                        One key project involved maintaining .NET Blazor framework code for the Display Port project, enhancing video reconstruction using superspeed differential pair data. Additionally, I worked on the Wireless Power project, using .NET CORE and React to maintain code, optimize features, and improve power transmission efficiency by about 30%.
                    </p>
                    <p>
                        These experiences have equipped me with a solid foundation in both backend and frontend technologies, including HTML, CSS, JavaScript, React, and MongoDB.
                    </p>
                    <p>
                        My skills in tools such as Visual Studio, Visual Studio Code, GitHub, Zoho Tasks, and MongoDB Compass have been crucial in managing and maintaining technical documentation for all software development activities. I thrive in collaborative team environments that foster continuous learning and professional growth.
                    </p>
                    <p>
                        I look forward to discussing how my background, skills, and certifications can benefit your team. I am available for an interview at your earliest convenience and can be reached at <span>9360527598</span> or via email at <span>sudharsananvelmurugan@gmail.com.</span>
                    </p>
                </div>
                <div className='services-item-container'>
                    <div className="services-item">
                        <FontAwesomeIcon icon={faCode} className='fa-solid-code' />
                        <div className="item-desc">
                            <h3>Front End Development</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam exercitationem
                                incidunt possimus. Unde doloremque quidem vel sint aperiam, distinctio
                                perferendis, facere voluptatibus ad quae quas cupiditate excepturi eveniet
                                nemo soluta.
                            </p>
                        </div>
                    </div>
                    <div className="services-item">
                        <FontAwesomeIcon icon={faDesktop} className='fa-solid-desktop' />
                        <div className="item-desc">
                            <h3>Back End Development</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam exercitationem
                                incidunt possimus. Unde doloremque quidem vel sint aperiam, distinctio
                                perferendis, facere voluptatibus ad quae quas cupiditate excepturi eveniet
                                nemo soluta.
                            </p>
                        </div>
                    </div>
                    <div className="services-item">
                        <FontAwesomeIcon icon={faTabletAlt} className='fa-solid-tablet-alt' />
                        <div className="item-desc">
                            <h3>.Net C#</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam exercitationem
                                incidunt possimus. Unde doloremque quidem vel sint aperiam, distinctio
                                perferendis, facere voluptatibus ad quae quas cupiditate excepturi eveniet
                                nemo soluta.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services