import React from "react";


import styles from './IntroComponent.module.css'

export default function IntroComponent(props) {
    const { handleNavSection } = props
    return (
        <div className={`${styles.introContainer}`}>
            <div className={`${styles.introCol}`}>
                <h1>Best Landing Pages Solutions</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In faucibus tempor leo, vitae placerat nibh condimentum eu. 
                    Suspendisse eu neque ante. Phasellus viverra egestas ligula, 
                    vel vestibulum tellus finibus nec. 
                </p>
                <button type="button" className="btn btn-primary"  onClick={() => {handleNavSection('form')}}>Get a demo</button >
            </div>
        </div>
    )
}