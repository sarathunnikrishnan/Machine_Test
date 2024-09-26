import React,{ useContext} from 'react'
import { ProductContext } from '../Contex/ProductContex'
import Items from './Items/Items';

const DisplayProduct = () => {
    const { all_product } = useContext(ProductContext);
    console.log(all_product);
    
  return (
    <div>
        <div className="bridalcategory-products">
          {
            (all_product.length !== 0) ? (
                all_product.map((item, index) => {
                if (item.category) {
                  return (
                    <Items
                      key={index}
                      id={item.id}
                      name={item.title}
                      image={item.image}
                      price = {item.price}
                    />
                  );
                } else {
                  return null;
                }
              })
            ) : ( <h1>Result Not Found</h1>)
          }
        </div>
    </div>
  )
}

export default DisplayProduct