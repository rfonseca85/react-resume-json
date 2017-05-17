import React from 'react';

class Contact extends React.Component {

    render() {
        return (
          <div>
            <section id="contact">
                <div className="container">
                    <h2 className="text-center">Contact Me</h2>
                    <hr className="star-primary"/>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <form name="sentMessage" id="contactForm" >
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Name</label>
                                        <input className="form-control" id="name" type="text" placeholder="Name" required data-validation-required-message="Please enter your name."/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Email Address</label>
                                        <input className="form-control" id="email" type="email" placeholder="Email Address" required data-validation-required-message="Please enter your email address."/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Phone Number</label>
                                        <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required data-validation-required-message="Please enter your phone number."/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Message</label>
                                        <textarea className="form-control" id="message" rows="5" placeholder="Message" required data-validation-required-message="Please enter a message."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br/>
                                <div id="success"></div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-lg">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
          </div>
        );
    }
}

export default Contact;
