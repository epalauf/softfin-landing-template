import React from "react";


import { FcSynchronize, FcKey, FcCommandLine, FcWorkflow, FcServices, FcOrgUnit } from 'react-icons/fc';

import styles from './OutstandingComponent.module.css'

export default function OutstandingComponent(props) {
    return (
      <React.Fragment>
        <div className={`${styles.outstandingContainer} ${styles.outstandingDesktop}`}>
          <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
            <div className={`carousel-inner ${styles.carouselInner}`}>
              <div className={`carousel-item active`}>
                <div className={`${styles.carouselItemContainer}`}>
                  <div className={`${styles.carouselDescription}`}>
                    <FcWorkflow />
                    <div><b>Custom Software Development</b> Building tailored software solutions to meet specific client requirements, such as web applications, mobile apps, desktop applications, enterprise software, or cloud-based systems.</div>
                  </div>
                  <div className={`${styles.carouselDescription}`}>
                    <FcServices />
                    <div><b>Application Maintenance and Support</b> Providing ongoing maintenance, bug fixing, and support services for existing software applications to ensure their smooth operation, performance optimization, and security updates.</div>
                  </div>        
                </div>
              </div>
              <div className={`${styles.carouselItem}  carousel-item`}>
                  <div className={`${styles.carouselItemContainer}`}>
                    <div className={`${styles.carouselDescription}`}>
                      <FcKey />
                      <div><b>Software Consulting and Strategy</b> Assisting clients in defining their software needs, determining technology stacks, creating development roadmaps, and providing strategic guidance for successful software implementation.</div>
                    </div>
                    <div className={`${styles.carouselDescription}`}>
                      <FcOrgUnit />
                      <div><b>UX/UI Design</b> Creating user-centric interfaces and designing engaging user experiences to enhance the usability, intuitiveness, and visual appeal of software applications.</div>
                    </div>
                  </div>
              </div>
              <div className={`${styles.carouselItem}  carousel-item`}>
                <div className={`${styles.carouselItemContainer}`}>
                  <div className={`${styles.carouselDescription}`}>
                    <FcSynchronize />
                    <div><b>Quality Assurance and Testing</b> Conducting comprehensive testing processes to identify and fix software bugs, ensure functionality, performance, and security, and deliver a high-quality, reliable product.</div>
                  </div>
                  <div className={`${styles.carouselDescription}`}>
                    <FcCommandLine />
                    <div><b>Web Development</b> Building dynamic and interactive websites, web applications, and e-commerce platforms using frameworks like React, Angular, Vue.js, or backend technologies like Node.js, Django, or Ruby on Rails.</div>
                  </div>
                </div>
              </div>
            </div>
            <button className={`${styles.carouselControlPrev} carousel-control-prev`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className={`${styles.carouselControlNext} carousel-control-next`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className={`${styles.outstandingContainer} ${styles.outstandingMobile}`}>
          <div id="carouselExampleMobileIndicators" className="carousel slide " data-bs-ride="carousel">
            <div className={`carousel-inner ${styles.carouselInner}`}>
              
              
              <div className={`carousel-item active`}>
                <div className={`${styles.carouselItemContainer}`}>
                  <div className={`${styles.carouselDescription}`}>
                    <FcWorkflow />
                    <div><b>Custom Software Development</b> Building tailored software solutions to meet specific client requirements, such as web applications, mobile apps, desktop applications, enterprise software, or cloud-based systems.</div>
                  </div>                          
                </div>
              </div>
              <div className={`carousel-item active`}>
                <div className={`${styles.carouselItemContainer}`}>
                  <div className={`${styles.carouselDescription}`}>
                    <FcServices />
                    <div><b>Application Maintenance and Support</b> Providing ongoing maintenance, bug fixing, and support services for existing software applications to ensure their smooth operation, performance optimization, and security updates.</div>
                  </div>        
                </div>
              </div>
              
              
              
              <div className={`${styles.carouselItem}  carousel-item`}>
                  <div className={`${styles.carouselItemContainer}`}>
                    <div className={`${styles.carouselDescription}`}>
                      <FcKey />
                      <div><b>Software Consulting and Strategy</b> Assisting clients in defining their software needs, determining technology stacks, creating development roadmaps, and providing strategic guidance for successful software implementation.</div>
                    </div>                    
                  </div>
              </div>
              <div className={`${styles.carouselItem}  carousel-item`}>
                  <div className={`${styles.carouselItemContainer}`}>
                    <div className={`${styles.carouselDescription}`}>
                      <FcOrgUnit />
                      <div><b>UX/UI Design</b> Creating user-centric interfaces and designing engaging user experiences to enhance the usability, intuitiveness, and visual appeal of software applications.</div>
                    </div>
                  </div>
              </div>






              <div className={`${styles.carouselItem}  carousel-item`}>
                <div className={`${styles.carouselItemContainer}`}>
                  <div className={`${styles.carouselDescription}`}>
                    <FcSynchronize />
                    <div><b>Quality Assurance and Testing</b> Conducting comprehensive testing processes to identify and fix software bugs, ensure functionality, performance, and security, and deliver a high-quality, reliable product.</div>
                  </div>
                  
                </div>
              </div>
              <div className={`${styles.carouselItem}  carousel-item`}>
                <div className={`${styles.carouselItemContainer}`}>
                  
                  <div className={`${styles.carouselDescription}`}>
                    <FcCommandLine />
                    <div><b>Web Development</b> Building dynamic and interactive websites, web applications, and e-commerce platforms using frameworks like React, Angular, Vue.js, or backend technologies like Node.js, Django, or Ruby on Rails.</div>
                  </div>
                </div>
              </div>



            </div>
            <button className={`${styles.carouselControlPrev} carousel-control-prev`} type="button" data-bs-target="#carouselExampleMobileIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className={`${styles.carouselControlNext} carousel-control-next`} type="button" data-bs-target="#carouselExampleMobileIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </React.Fragment>
    )
}