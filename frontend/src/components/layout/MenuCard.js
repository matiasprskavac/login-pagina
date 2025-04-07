import React from 'react';
import '../../styles/style.css'

const MenuCard = ({ image, name, description, price }) => {
    return (
        <div class="card-menu">
            <img src={image} alt={name} />
            <div class="card-content-menu">
                <h3>{name}</h3>
                <p>{description}</p>
                <h5>{price}</h5>
            </div>
        </div>
    );
};

export default MenuCard;