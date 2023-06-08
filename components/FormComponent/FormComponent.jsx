import React from "react";




import styles from './FormComponent.module.css'

export default function FormComponent(props) {
    const { handleFormSection } = props
    return (
        <div className={`${styles.introContainer}`}>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-primary"  onClick={() => {handleFormSection('form')}}>Send</button >
        </div>
    )
}