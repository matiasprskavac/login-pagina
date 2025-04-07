import React from "react";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Faq from "../components/layout/Faq";
import FormContact from "../components/layout/FormContact";

function Contact() {
  return (
    <main className="container">
      <Header />
      <div className="main-contact">
        <h1>CONTACT</h1>
        <FormContact />
        <Faq />
        <Footer />
      </div>
    </main>
  );
}

export default Contact;