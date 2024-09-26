import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { ProductContext } from '../../Contex/ProductContex'
import './CartItems.css'


const CartItems = () => {

    const { all_product, cartItem, removeFromCart, getTotalCartAmount} = useContext(ProductContext);


  return (
    <div className='cartitems'>
      <Container>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {
        all_product.map((e)=>{
            if(cartItem[e.id]>0){
                return (
                    <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon'/>
                        <p>{e.title}</p>
                        <p>₹{e.price}</p>
                        <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                        <p>₹{e.price*cartItem[e.id]}</p>
                        <button onClick={()=>{removeFromCart(e.id)}}>Remove</button>
                    </div>
                    <hr /> 
                  </div>
                )
            }else{
                return null;
            }
        })
      }
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
          </div>
          <button >PROCCED TO CHECKOUT</button>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default CartItems