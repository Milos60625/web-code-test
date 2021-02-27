import StockProductsData from './data/stockProducts.json';
import { useDispatchCart } from './Cart';
import { useCart } from './Cart';
import React, {useState} from 'react'

const StockProducts = () => {
  const items = useCart();
  const [alert, setAlert] = useState('')
  const dispatch = useDispatchCart();
  // const items = useCart();
  // console.log('items', items)
  // const [cart, setCart] = useState([]);
  // console.log('cart', cart)
  // const addToCart = (stockProductData) => {
  //   setCart([...cart, stockProductData])
  // }
  const addToCart = (item, qty = 1) => {
    let added = true;
    for( let i = 0; i < items.length; i++) {
      if(items[i].itemNumber === item.itemNumber) added = false
    }
    item.qty = qty;

    if(added) dispatch({ type: 'ADD', item });
    else setAlert(`${item.name} is already in your cart.`)
    //  else console.log('alert')
  };

  // const adjustQty = (item, qty = 1) => {
  //   item.qty = qty;
  //   return item
  // }
  return (
    <div className="w-full mt-4">
      <h1 className="font-semibold text-2xl">Products</h1>
      <div className="font-semibold text-lg text-red-500 flex items-center ">{alert}</div>

      <div className="flex border border-gray-200 p-2 rounded mt-2 overflow-x-auto">

        {StockProductsData.map((stockProductData) => (
          <button
            className="flex flex-col appearance-none border border-gray-200 rounded w-48 p-4 m-2 justify-start items-center hover:bg-gray-100 relative"
            key={stockProductData.itemNumber}
          >
            <img
              src={stockProductData.image}
              alt={stockProductData.name}
              className="block w-full rounded shadow p-2 bg-white"
            />
            <h4 className="flex flex-1 items-center font-semibold leading-4 mt-2">
              {stockProductData.name}
            </h4>
            <h4 className="flex flex-1 items-center font-semibold leading-4 mt-2">
              {stockProductData.price}$
            </h4>
            {/* <h4 className="flex flex-1 items-center font-semibold leading-4 mt-2">{stockProductData.description}</h4> */}

            {/* <button type="button" className="absolute w-8 top-0.5 right-0.5 p-0.5 bg-white shadow rounded-full bg-green-100" onClick={() => addToCart(stockProductData)}> */}
            <button
              type="button"
              className="absolute w-8 top-0.5 right-0.5 p-0.5 bg-white shadow rounded-full bg-green-100"
              onClick={() => addToCart(stockProductData)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgba(16, 185, 129)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StockProducts;
