import React from 'react';
import '../../styles/style.css'

const Faq = () => {
    return (
        <section className="faq">
            <div className="faq-container">
                <h2>FREQUENTLY ASKED QUESTIONS</h2>
                <details className="faq-item">
                    <summary className="faq-question">Do you offer vegetarian or vegan options?</summary>
                    <p className="faq-answer">Yes, we have a wide variety of vegetarian and vegan options on our menu.</p>
                </details>
                <details className="faq-item">
                    <summary className="faq-question">Do you accept reservations for large groups?</summary>
                    <p className="faq-answer">Of course, you can contact us to reserve tables for large groups or special events.</p>
                </details>
                <details className="faq-item">
                    <summary className="faq-question">Do you offer home delivery service?</summary>
                    <p className="faq-answer">Yes, we offer home delivery through our partner platforms.</p>
                </details>
            </div>
        </section>
    );
};

export default Faq;