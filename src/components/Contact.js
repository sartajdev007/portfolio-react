import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h670lct', 'template_j38xojt', form.current, 'kbj7Cm8q0-Xb43Q_4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className='mt-10'>
            <h1 className='text-5xl px-12 font-bold text-emerald-500'>Contact Me</h1>
            <p className='text-lg px-12 pt-4 font-semibold text-fuchsia-600 italic'>Please fill up the form to get in touch with me</p>
            <div className='flex justify-center pt-10'>
                <form className='border-2 rounded-xl p-10 shadow-xl w-[700px] shadow-teal-200' ref={form} onSubmit={sendEmail}>
                    <div>
                        <label>Name</label>
                        <br />
                        <input type="text" name="user_name" className='input input-bordered w-full' />
                    </div>
                    <div>
                        <label>Email</label>
                        <br />
                        <input type="email" name="user_email" className='input input-bordered w-full' />
                    </div>
                    <div>
                        <label>Message</label>
                        <br />
                        <textarea name="message" cols='88' rows='5' className='textarea textarea-bordered' />
                    </div>
                    <input type="submit" value="Send" className='btn btn-primary' />
                </form>
            </div>
        </div>
    );
}