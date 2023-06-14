import React from "react";


import styles from './IntroComponent.module.css'

export default function IntroComponent(props) {
  const { handleNavSection } = props;
  const [deviceHeight, setDeviceHeight] = React.useState(null);

    // useEffect hook to update the device height on component mount
  React.useEffect(() => {
    const updateHeight = () => {
      const height = window.innerHeight;
      setDeviceHeight(height);
    };

    // Call the function once to set the initial height
    updateHeight();

    // Add an event listener to update the height on window resize
    window.addEventListener('resize', updateHeight);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const customStyle = {
    height: `${deviceHeight}px`
  };

    return (
        <div className={`${styles.introContainer}`} style={customStyle} >
            <div className={`${styles.introCol}`}>
                <h1>Best Landing Pages Solutions {`${deviceHeight}`}</h1>
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