import React from "react";

import styles from './BlogComponent.module.css';

// Moment
import * as moment from 'moment';

// Locale
import 'moment/locale/en-au';
import 'moment/locale/es';

// Icons
import { BsFillFileTextFill } from 'react-icons/bs';

import entries from './entries.json'

export default function BlogComponent(props) {


    return (        
        <div className={`${styles.blogContainer}`}>
           { entries.map( (date, index) => (
                <div className={`${styles.blogColumns}`} key={index}>
                    <div className={`${styles.blogDateColumn}`}>
                        <div>{moment(date.entry_date).format("dddd, MMMM D YYYY")}</div> 
                    </div>
                    <div className={`${styles.blogIconColumn}`}>
                        <div className={`${styles.blogIcon}`}><BsFillFileTextFill /></div>
                        <div className={`${styles.blogVerticalLine}`} />
                    </div>
                    
                    
                    <div className={`card text-center ${styles.card}`}>
                        <img src="https://images.pexels.com/photos/34153/pexels-photo.jpg" className="card-img-top" alt={`https://images.pexels.com/photos/34153/pexels-photo.jpg_${index}`} />
                        <div className="card-body">
                            <h5 className="card-title">{date.entry_title}</h5>
                            <p className="card-text">{date.entry_text}</p>
                            <a href="#" className="btn btn-primary">Read more</a>
                        </div>
                    </div>
                      
                </div>
           ))}              
        </div>
    )
}