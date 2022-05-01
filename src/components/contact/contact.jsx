import React from 'react';
import '../contact/contact.css';
import phone from '../../img/phone.png'
import email from '../../img/email.png'
import adress from '../../img/address.png'
import FormGroup from './formgroup';
import emailjs from '@emailjs/browser';
class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.nameRef = React.createRef();
        this.subjectRef = React.createRef();
        this.emailRef = React.createRef();
        this.formRef = React.createRef();

        this.state = {
            errorName: '',
            errorSubject: '',
            errorEmail: '',
        }
    }

    formValidate = () => {
        const name = this.nameRef.current.value;
        const subject = this.subjectRef.current.value;
        const email = this.emailRef.current.value;

        const errors = {
            errorName: '',
            errorSubject: '',
            errorEmail: '',
        }

        if (!name.trim()) {
            errors.errorName = 'Please enter your name !'
        }
        if (!subject.trim()) {
            errors.errorSubject = 'Please enter your subject !'
        }
        if (!/^[\w\-\#\.]+@[\w\-\.]+$/.test(email)) {
            errors.errorEmail = 'Please enter your email !';
        }

        this.setState(errors)
    }
    contactMe = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x8vv2hu', 'template_05atob8', this.formRef.current, 'bAiNTPTAU7CeJUoU1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    render() {
        return (
            <div className='contact'>
                <div className="c-left-line"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-left-text">Let's discuss your project</h1>
                        <div className="c-left-info">
                            <div className="c-left-info-icon">
                                <img className="c-left-info-icon-size" src={phone} alt="s" />
                                <div className="c-left-info-text">+90 (531) 978 38 40</div>
                            </div>
                            <div className="c-left-info-icon">
                                <img className="c-left-info-icon-size" src={email} alt="s" />
                                <div className="c-left-info-text">mahmud.cebrayilov.2016@mail.ru</div>
                            </div>
                            <div className="c-left-info-icon">
                                <img className="c-left-info-icon-size" src={adress} alt="s" />
                                <div className="c-left-info-text">Turkey . Izmir Menemen Seyrek </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <div className="c-right-text"><span className="halfText">What's your story?</span> Get in touch .Always available for freelancing if the right project comes along me</div>
                        <div className="c-right-form">
                            <form ref={this.formRef} onSubmit={this.contactMe}>
                                <FormGroup
                                    id='1'
                                    placeholder='Name'
                                    type='text'
                                    name='user_name'
                                    inpRef={this.nameRef}
                                    hasError={!!this.state.errorName}
                                    errorText={this.state.errorName}
                                />
                                <FormGroup
                                    id='2'
                                    placeholder='Subject'
                                    type='text'
                                    name='user_subject'
                                    inpRef={this.subjectRef}
                                    hasError={!!this.state.errorSubject}
                                    errorText={this.state.errorSubject}
                                />
                                <FormGroup
                                    id='3'
                                    placeholder='Email'
                                    type='text'
                                    name='user_email'
                                    inpRef={this.emailRef}
                                    hasError={!!this.state.errorEmail}
                                    errorText={this.state.errorEmail}
                                />
                                <textarea className="form-control" id="" placeholder="Message" rows="5" name="message"></textarea>
                                <button onClick={this.formValidate} className='contact-submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
export default Contact; 