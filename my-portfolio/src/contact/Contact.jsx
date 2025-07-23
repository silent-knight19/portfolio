import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const contactItems = [
        {
            icon: <FaLinkedin className="contact-icon" />,
            text: 'Connect on LinkedIn',
            url: 'https://linkedin.com/in/sachin-kumar-singh-5a647a269/',
            color: '#0077b5',
            label: 'LinkedIn Profile'
        },
        {
            icon: <FaGithub className="contact-icon" />,
            text: 'View my GitHub',
            url: 'https://github.com/silent-knight19',
            color: '#333',
            label: 'GitHub Profile'
        },
        {
            icon: <FaTwitter className="contact-icon" />,
            text: 'Follow on Twitter',
            url: 'https://twitter.com/sachinkumarsingh1906',
            color: '#1DA1F2',
            label: 'Twitter Profile'
        },
        {
            icon: <FaEnvelope className="contact-icon" />,
            text: 'sachinsinghtomar7749@gmail.com',
            url: 'mailto:sachinsinghtomar7749@gmail.com',
            color: '#D44638',
            label: 'Send Email'
        },
        {
            icon: <FaPhone className="contact-icon" />,
            text: '+91 9523358619',
            color: '#25D366',
            label: 'Call Phone'
        }
    ];

    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            cardsRef.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">I'd love to hear from you. Feel free to reach out through any of these platforms.</p>
                </div>
                
                <div className="contact-grid">
                    {contactItems.map((item, index) => (
                        <a 
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contact-card"
                            style={{ '--accent-color': item.color }}
                            aria-label={item.label}
                        >
                            <div className="card-content">
                                <div className="icon-wrapper" style={{ backgroundColor: `${item.color}15` }}>
                                    {React.cloneElement(item.icon, { 
                                        style: { color: item.color }
                                    })}
                                </div>
                                <span className="contact-text">{item.text}</span>
                                <FaArrowRight className="arrow-icon" />
                            </div>
                            <div className="card-hover" style={{ backgroundColor: `${item.color}10` }}></div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;