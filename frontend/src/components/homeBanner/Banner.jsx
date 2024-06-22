import React from 'react'
import Banner1 from "../../assets/image/banner Image/banner1.png"
import Banner2 from "../../assets/image/banner Image/banner2.png"
import Banner3 from "../../assets/image/banner Image/banner3.png"
import Banner4 from "../../assets/image/banner Image/banner4.png"


const Banner = () => {
  return (
    <section>
        <div className="banner_container">
            <div className="banner">
                <div className="banner1 banner1common">
                    <img src={Banner3} alt='banner Image' />
                </div>

                <div className="banner2 banner1common">
                    <img src={Banner2} alt='banner Image' />
                </div>

                <div className="banner3 banner1common">
                    <img src={Banner4} alt='banner Image' />
                </div>

                <div className="banner4">
                    <h1>ULTIMATE</h1>
                    <h2>SALE</h2>
                    <h3>NEW COLLECTION</h3>
                    <button className='btn1'>SHOP NOW</button>
                </div>

                <div className="banner5">
                    <img src={Banner1} alt='banner Image' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner