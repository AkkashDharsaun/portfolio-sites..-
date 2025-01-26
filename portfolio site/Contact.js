import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Contact
            </motion.h2>
            <form>
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />
                <label>Email</label>
                <input type="email" placeholder="Your Email" required />
                <label>Message</label>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
