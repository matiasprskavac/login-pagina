import React from "react";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AccountForm from "../components/layout/AccountForm";
import Promotions from "../components/layout/Promotions";

function Account() {
  return (
    <main className="container">
      <Header />
      <div className="main-login">
        <h1>ACCOUNT</h1>
        <AccountForm />
        <h1>SOME OF OUR REWARDS</h1>
        <Promotions/>
        <Footer />
      </div>
    </main>
  );
}

export default Account;