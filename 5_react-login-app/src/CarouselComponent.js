import { useState } from 'react';
import avtar from './cheerful-school-boy.png'; // Assuming you have an image in the same directory

let CrausalComponent = () => {
    let [imgUrl, setImgUrl] = useState(avtar); // Use the imported image
    let [imgUrl2, setImgUrl2] = useState('https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg');
    return (
        <div className="container-fluid"
        // style={{ backgroundImage: `url(https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/61274adffc9ff6001d2f6b81.jpg)`, backgroundSize: 'cover', height: '100vh' }}
        >
            <div className="row">
                <div className="col-md-12 text-center" style={{ height: '200px' }} >
                    <h1 className="text-white">Welcome to the Crausal Component</h1>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={imgUrl} className="d-block w-100" alt="..." width="100px" />
                            </div>
                            <div className="carousel-item">
                                <img src={imgUrl2} className="d-block w-100" alt="..." width="100px" />
                            </div>
                            <div classNAme="carousel-item">
                                <img src={imgUrl} className="d-block w-100" alt="..." width="100px" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrausalComponent;