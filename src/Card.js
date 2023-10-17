import { useEffect } from 'react';
import './card.css'

function Card({ name, img, openIFrame}) {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front card-flex">
                    <div className='card-title'>
                        {name}
                    </div>
                    <img src={img} className='card-image'></img>
                </div>
                <div className="card-back card-flex">
                    <div className='card-title'>
                        {name}
                    </div>
                    <div className='card-back-body'>
                        <button className="openOverlay" onClick={openIFrame}>Preview Page</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card