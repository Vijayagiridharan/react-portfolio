import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Initialize EmailJS when component mounts
    useEffect(() => {
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            return toast.error("Please complete the form.");
        }

        setLoading(true);

        const data = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: "Your Name", // Change this to your actual recipient name
        };

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                data,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY  // Changed from PUBLIC_API to PUBLIC_KEY
            )
            .then(
                (result) => {
                    setLoading(false);
                    toast.success("Email sent successfully!");
                    setName(""); // Reset form
                    setEmail("");
                    setSubject("");
                    setMessage("");
                },
                (error) => {
                    setLoading(false);
                    console.error("EmailJS Error:", error);
                    toast.error("Failed to send email. Try again later.");
                }
            );
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Connect with Me</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">I’m here to discuss anything and everything!</h3>
                    <p className="contact__details">
                    Not a fan of forms? Just shoot me an email. 👋
                    </p>
                </div>

                <form onSubmit={submitHandler} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            className="contact__form-input"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
                <ToastContainer position="bottom-right" theme={props.theme} />
            </div>
        </section>
    );
};

export default Contact;