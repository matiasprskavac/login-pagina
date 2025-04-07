import React from 'react';
import Header from '../components/layout/Header';
import Card from '../components/layout/card';

const Home = () => {
  return (
    <main className="container">
      <Header />
      <div className="main">
        <Card />
      </div>
    </main>
  );
};

export default Home;