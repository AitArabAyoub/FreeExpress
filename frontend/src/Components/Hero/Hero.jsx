import Banner2 from '../../Assets/banner-17.jpg'
import Banner4 from '../../Assets/banner-27.jpg'
import Features from './Features'
import Slider from './Slider'
function Hero() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-9 position-relative p-0" style={{overflow  :"hidden"}}>
                    <Slider/>
                </div>
                <div className="col-3 d-flex flex-column justify-content-between gap-2">
                    <div className="card text-bg-white h-50">
                        <img src={Banner2} className="card-img h-100 object-fit-cover" alt="..."/>
                        <div className="card-img-overlay py-5">
                            <h3 className="card-title">NEW ARRIVALS</h3>
                            <h3 className="card-text">SUMMER</h3>
                            <h3 className="card-text">SALE 20% <span>OFF</span></h3>
                        </div>
                    </div>
                    <div className="card text-bg-white h-50">
                        <div className="overlay"></div>
                        <img src={Banner4} className="card-img h-100 object-fit-cover" alt="..."/>
                        <div className="card-img-overlay py-5 text-white">
                            <h3 className="card-title">NEW ARTICLS</h3>
                            <h3 className="card-text">WOMEN/MEN</h3>
                            <h3 className="card-text">SALE 20% <span>OFF</span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <Features/>
        </div>
    )
}

export default Hero