import React, { useState, useContext } from 'react'
import './Items.css'
// import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { ProductContext } from '../../Contex/ProductContex'

const Items = (props) => {

    const [cartBtn, setCartBtn] = useState(true);
    const { addToCart } = useContext(ProductContext);

    const HandleSubmit = (id) => {
         setCartBtn(false);
         addToCart(id);
      };

  return (
    <div className='item col-12'>
      <Nav.Link >
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Nav.Link>
      <p>{props.name}</p>
      
       <div className="item-prices">
        <div className="item-price-new">
            <h3>₹{props.price}</h3>
        </div>
       </div>
       <div>
       <button className='cart-btn' onClick={()=>HandleSubmit(props.id)}>{cartBtn === true ? "Add To Cart" : "Add More"}</button>
       </div>
    </div>
  )
}

export default Items