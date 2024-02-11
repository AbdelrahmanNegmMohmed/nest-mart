import React, { useState } from 'react'
import "./item.css"

const Item = (props) => {

  return (        
                <div className='item' >
                        <div className="dis">
                            <img src={props.image} alt="" />
                            <h5>{props.type}</h5>
                            <p>{props.numproduct}</p>
                           </div>

                </div>           

            )
            
            

        }
export default Item