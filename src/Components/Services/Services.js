import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop, faTabletAlt } from '@fortawesome/free-solid-svg-icons';
import './Services.css'
const Services = () => {
    return (
        <div className="services-container">
            <div className="services-list-container">
                <div className="services-desc-container">
                    <h1>My <span>Services</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores magni aliquam voluptatem quidem,
                        in soluta quaerat. Non modi blanditiis officiis quibusdam fugiat accusantium quod iste rem.
                        Impedit, fugiat incidunt.
                    </p>
                </div>
                <div className='services-item-container'>
                    <div className="services-item">
                       <FontAwesomeIcon icon={faCode} className='fa-solid-code'/>
                        <div className="item-desc">
                            <h3>Web Development</h3>
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
                            <h3>Desktop Development</h3>
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
                            <h3>UI/Ux Development</h3>
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