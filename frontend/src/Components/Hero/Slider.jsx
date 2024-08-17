import { useState } from "react"
import Banner1 from '../../Assets/banner-15.jpg'
import Banner3 from '../../Assets/banner-25.jpg'
function Slider() {
    const [Ban,setBan] = useState(0)
    const handleClick = ()=>{
        if(Ban === 0){
            setBan(5)
        }else{
            setBan(0)
        }
    }
    return (
        <>
            <div className='banner d-flex' style={{width : "200%",transform : `translateX(-${Ban}0%)`}}>
                        <div className="card text-bg-white" style={{width : "50%"}}>
                            <img src={Banner1} className="card-img" alt="..."/>
                            <div className="card-img-overlay p-0 ps-3 d-flex flex-column justify-content-center">
                                <h3 className="card-title">LIFESTYLE COLLECTION</h3>
                                <h2 className="card-text">MEN</h2>
                                <h3 className="card-text">SALE UP TO <span className='text-danger'>30% OFF</span></h3>
                                <p className='text-secondary'>Get Free Shipping To Orders Over $99.00</p>
                            </div>
                        </div>
                        <div className="card text-bg-white" style={{width : "50%"}}>
                            <img src={Banner3} className="card-img" alt="..."/>
                            <div className="card-img-overlay p-0 ps-3 d-flex flex-column justify-content-center">
                                <h3 className="card-title">LIFESTYLE COLLECTION</h3>
                                <h2 className="card-text">WOMEN</h2>
                                <h3 className="card-text">SALE UP TO <span className='text-danger'>30% OFF</span></h3>
                                <p className='text-secondary'>Get Free Shipping To Orders Over $99.00</p>
                            </div>
                        </div>
            </div>
            <div className="icons position-absolute d-flex justify-content-center w-100 gap-2">
                <div className="left border border-1 border-dark d-flex justify-content-center align-items-center" role='button' style={{width : "40px",height : "40px"}} onClick={handleClick}>
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="right border border-1 border-dark d-flex justify-content-center align-items-center" role='button' style={{width : "40px",height : "40px"}} onClick={handleClick}>
                    <i className="bi bi-arrow-right"></i>
                </div>
            </div>
        </>
    )
}

export default Slider