import React from "react";

import styles from './GalleryComponent.module.css'

export default function GalleryComponent(props) {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
        const response = await fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20'); // Replace with your API endpoint
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData.photos);
        } catch (error) {
        console.log('Error fetching data:', error);
        }
    };


    

    return (
        <div className={`${styles.galleryContainer}`}>
            <div className={`${styles.masonryGallery}`}>
                <div className="grid-sizer"></div>
                { data?.map((img, index) => (
                    <div key={index} className={`${styles.item}`}><img src={img.url} style={{}} alt={`Image_${index}`} /></div>
                    )
                )}            
            </div>

        </div>
    )
}