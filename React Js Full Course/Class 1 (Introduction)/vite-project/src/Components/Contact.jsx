import React from 'react'
import menus from '../images/menus.jpg'

export default function Contact() {
    return (
        <div>
            <div className="contact">
                <img src={menus} alt="" />
                <p className="contacttitle">Contact Me</p>
                <div className="contactbottom">

                </div>
                <span className='titleheading'>
                    Feel free to Contact me by submitting the form below and I will get
                    back to you as soon as possible
                </span>

                <div className="contact__form-container">
                    <form action='#' class='contact__form' method='post'><input type='hidden' name='form-name' value='form 1' />
                        <div className="contact__form-field">
                            <label className="contact__form-label" for="name">Name</label>
                            <input
                                required
                                placeholder="Enter Your Name"
                                type="text"
                                className="contact__form-input"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="contact__form-field">
                            <label className="contact__form-label" for="email">Email</label>
                            <input
                                required
                                placeholder="Enter Your Email"
                                type="email"
                                className="contact__form-input"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="contact__form-field">
                            <label className="contact__form-label" for="message">Message</label>
                            <textarea
                                required
                                cols="30"
                                rows="10"
                                className="contact__form-input"
                                name="message"
                                id="message"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn--theme contact__btn">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
