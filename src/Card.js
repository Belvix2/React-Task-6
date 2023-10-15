import './card.css'

function Card({ name, img, prefix, taskNo, suffix}) {
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
                        <iframe src={prefix+taskNo+suffix}></iframe>
                        <a className='open-button' href={prefix+taskNo+suffix} target='_blank'>Open</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card