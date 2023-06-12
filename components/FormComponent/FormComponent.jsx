import React from "react";

import { FaEnvelope } from "react-icons/fa";

import styles from './FormComponent.module.css'

export default function FormComponent(props) {
    const { handleFormSection } = props
    return (
        <div className={`${styles.formContainer}`}>
            
            <div className={`${styles.formFields}`}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className={`form-label ${styles.formLabel}`}>Full name</label>
                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Jhon Doe" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className={`form-label ${styles.formLabel}`}>Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className={`form-label ${styles.formLabel}`}>Let us know your needs!</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-primary"  onClick={() => {handleFormSection('form')}}>Send</button >
            </div>                
            
            <div className={`${styles.formDescription}`}>
                <FaEnvelope />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius, risus quis gravida facilisis, mi lacus aliquam ex, non aliquet diam lacus egestas ex. Curabitur cursus luctus finibus.</p>
                <p>Proin consectetur mattis vehicula. Aliquam porttitor, mauris iaculis posuere bibendum, nulla libero ultricies magna, quis convallis elit erat a ante.</p>
            </div>
        </div>
    )
}