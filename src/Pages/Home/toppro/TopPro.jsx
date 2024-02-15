import React from 'react'
import "./TopPro.css"
import newletter from "../../../Assest/Images/banner/newsletter.png"
import NewsLatter from '../../../components/NewsLatter/NewsLatter'
import Footer from '../../../components/footer/Footer'

const TopPro = () => {
  return (
    <>
<section>
    <div className="newslettersection">
        <div className="container-fluid">
            <div className="box d-flex align-items-center ">
                <div className="info">
                    <h2> Stay home & get your daily <br />needs from our shop </h2>
                    <p>Start You'r Daily Shopping with <span>Nest Mart</span> </p>
                    <br />
                    <br />
                    <NewsLatter/>
                </div>
                <div className='img'>
                    <img src={newletter} className='w-100' />

                </div>
            </div>
        </div>
    </div>
    </section>
    <Footer/>
    </>

    
  )
}

export default TopPro;


