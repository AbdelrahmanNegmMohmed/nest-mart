import { useState } from "react";
import "./item.css"
import { Link } from "react-router-dom";



const Item = (props) => {


  return (        
                <div className='item' key={props.key} style={{background:`${props.back}`}}>
                    <Link to={`/cat/${props.type.toLowerCase()}`}>                   
                        <div className="info info2"  >
                            <img src={props.image} width="80" />
                            <h5 className="text-capitalize"> {props.type}</h5>                          
                            <p className="dis2"> {props.item} items</p>
                        </div>
                    </Link>

                </div>           

            )
            
            

        }
export default Item