import React from "react";

import Image from 'next/image'


import styles from './NavBarComponent.module.css'

export default function NavBarComponent(props) {
    const { handleNavSection } = props;

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`} data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><Image src="/logo.png" width={200} height={58} alt="Picture of the author"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Softfin</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" data-bs-dismiss="offcanvas" onClick={() => {handleNavSection('intro')}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-bs-dismiss="offcanvas" onClick={() => {handleNavSection('info')}}>About</a>
                            </li>   
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#" data-bs-dismiss="offcanvas" onClick={() => {handleNavSection('categories')}}>Store</a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#" data-bs-dismiss="offcanvas" onClick={() => {handleNavSection('gallery')}}>Gallery</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-bs-dismiss="offcanvas" onClick={() => {handleNavSection('blog')}}>Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-bs-dismiss="offcanvas" onClick={() => {handleNavSection('form')}}>Contact</a>
                            </li>
                        
                        </ul>
                        
                    </div>
                </div>

            </div>
        </nav>
    )
}