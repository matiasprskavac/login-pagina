import React from "react";
import Header from "../components/layout/Header";
import Footer from '../components/layout/Footer';
import LocalCard from "../components/layout/LocalCard";

function Local() {
  return (
    <main className="container">
      <Header />
      <div className="main-local">
        <h1>LOCALS</h1>
        <LocalCard
          image="img/local1.png"
          localName="Matias' Av. Corrientes"
          address="Av. Corrientes 1200, BSAS"
          phone="Teléfono: (54 11) 4382-1354" />

        <LocalCard
          image="img/local2.jpg"
          localName="Matias' Nuñez"
          address="Arcos esq. Crisólogo Larralde, BSAS"
          phone="Teléfono: (54 11) 4702-2500" />

        <LocalCard
          image="img/local3.png"
          localName="Matias' Soho"
          address="Uriarte 1641, BSAS"
          phone="Teléfono: (54 11) 4242-3568" />
        <Footer />
      </div>
    </main>
  );
}

export default Local;