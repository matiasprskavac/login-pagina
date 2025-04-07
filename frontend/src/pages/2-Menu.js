import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MenuCard from "../components/layout/MenuCard";

function Menu() {
  return (
    <main className="container">
      <Header />
      <div className="main-menu">
        <h1>MENU</h1>
        <MenuCard
          image="img/Spa.jpg"
          name="Spaghetti"
          description="Spaghetti, Garlic, Olive oil, Fresh parsley, Red chili or chili flakes and Pepper"
          price="$9.99" />
        <MenuCard
          image="img/Hamb.webp"
          name="Chicken Joy"
          description="Buttermilk Chicken, Cheddar, Lettuce, Pickles and Spicy House Sauce"
          price="$9.99" />
        <MenuCard
          image="img/Sand.jpg"
          name="Full Irish breakfast"
          description="Rashers, Sausages, Black Pudding, White Pudding, Egg and Ballymaloe relish"
          price="$6.99" />
        <MenuCard
          image="img/Fries.jpg"
          name="Regular Fries"
          description=""
          price="$2.99" />
        <MenuCard
          image="img/Wings.jpg"
          name="Chicken Wings"
          description="Hot & Spicy or BQQ (Go big for $1.99 Extra)"
          price="$9.99" />
        <Footer />
      </div>
    </main>
  );
}

export default Menu;