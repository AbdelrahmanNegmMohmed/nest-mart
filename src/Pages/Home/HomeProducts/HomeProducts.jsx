import React from 'react'
import "./HomeProducts.css"
import Product from '../../../components/Product/Product';

const HomeProducts = () => {
  return (
    <section className='homeProducts'>
        <div className="container-fluid">
            <div className="d-flex align-items-center content">
                <h2 className='hd mb-0 mt-0'>Popular Products</h2>
                <ul className="list list-inline ml-auto mb-0  filterTab">
                    <li className='list-inline-item'>
                        <a className='cursor'>All</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Milks & Dairies</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Coffes & Teas</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Pet Foods</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Meats</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Vegetables</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Fruits</a>
                    </li>
                   

                </ul>

            </div>
            <div className='productRow'>
                <div className='item'>
                    <Product col={"sale"}/>

                </div>
                <div className='item'>
                    <Product col={"hot"}/>

                </div>
                <div className='item'>
                    <Product col={"new"}/>

                </div>
                <div className='item'>
                    <Product col={"best"}/>

                </div>
                <div className='item'>
                <Product col={"new"}/>

                </div>
                <div className='item'>
                <Product col={"hot"}/>

                </div>
                <div className='item'>
                <Product col={"new"}/>

                </div>
                <div className='item'>
                <Product col={"sale"}/>

                </div>
                <div className='item'>
                <Product col={"new"}/>

                </div>
                <div className='item'>
                    <Product col={"best"}/>

                </div>
                <div className='item'>
                    <Product/>

                </div>
                <div className='item'>
                    <Product/>

                </div>
                <div className='item'>
                    <Product/>

                </div>
                <div className='item'>
                    <Product/>

                </div>
                <div className='item'>
                    <Product/>

                </div>
              

            </div>
        </div>

    </section>
  )
}

export default HomeProducts;




