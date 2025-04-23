import React, { useState, useEffect } from 'react';
import '../../styles/style.css';

function Promotions() {
    const [promociones, setPromociones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPromos = async () => {
            try {
                const res = await fetch("http://localhost:3001/api/promociones");
                const data = await res.json();
                const activas = data.filter(promo => promo.activa);
                setPromociones(activas);
            } catch (error) {
                console.error("Error cargando promociones:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPromos();
    }, []);

    return (
        <div className="card-container">
            {loading ? (
                <p>Cargando promociones...</p>
            ) : promociones.length === 0 ? (
                <div className="card-reward">
                        <div className="card-text">
                            <h2>No promotions active for now, come later.</h2>
                        </div>
                    </div>
            ) : (
                promociones.map(promo => (
                    <div key={promo.id} className="card-reward">
                        <div className="card-text">
                            <h2>{promo.titulo}</h2>
                            <p className='description'>{promo.descripcion}</p>
                            <p>Your user level should be at least <h5>{promo.nivel_usuario}</h5> to get this benefict</p>
                            <button className="btn-l">More Info!</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Promotions;