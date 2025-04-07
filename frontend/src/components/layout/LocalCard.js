import React from 'react';
import '../../styles/style.css'

const LocalCard = ({ image, localName, address, phone }) => {
    return (
        <div class="card-local">
            <img src={image} alt="Menu item" />
            <div class="card-content-local">
                <h2>{localName}</h2>
                <div class="location">
                    <h5>{address}</h5>
                    <h5>{phone}</h5>
                </div>
                <h6>Lunes a Jueves: 08:00 a 00:00 hs.</h6>
                <h6>Viernes: 08:00 a 02:00 hs.</h6>
                <h6>Sábados: 09:00 a 02:00 hs.</h6>
                <h6>Domingos: 11:00 a 00:00 hs.</h6>
            </div>
        </div>
    );
};

export default LocalCard;