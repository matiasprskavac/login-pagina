import React from 'react';
import '../../styles/style.css';

function Promotions() {
    return (
        <div className="card-container">
            <div className="card-reward">
                <img className="card-image" src="img/reward1.jpg" alt='reward1'/>
                <div className="card-text">
                    <h2>Wine Tasting</h2>
                    <p>Discover select wines with a guided experience by expert sommeliers.</p>
                    <button className='btn-l'>Add</button>
                </div>
            </div>
            <div className="card-reward">
            <img className="card-image" src="img/reward2.jpg" alt='reward2'/>
                <div className="card-text">
                    <h2>Italian Dinner</h2>
                    <p>Enjoy an authentic Italian pasta dish made with fresh ingredients.</p>
                    <button className='btn-l'>Add</button>
                </div>
            </div>
            <div className="card-reward">
                <img className="card-image" src="img/reward3.jpg" alt='reward3'/>
                <div className="card-text">
                    <h2>Sweet Reward</h2>
                    <p>A delicious cheesecake with red fruits as a special treat for our customers.</p>
                    <button className='btn-l'>Add</button>
                </div>
            </div>
        </div>
    );
}

export default Promotions;
