import React from 'react';
import { useCart } from './Cart';
import { useDispatchCart } from './Cart';

const BuyList = () => {
  const items = useCart();
  console.log('hello items', items);
  const dispatch = useDispatchCart();

  const handleRemove = (index) => {
    dispatch({ type: 'REMOVE', index });
  };
  const handleQuantity = (event) => {
    for (let i = 0; i < items.length; i++) {
      items[i].qty = event.target.value;
    }
    dispatch({ type: 'EDIT', event });
  };
  if (!items.length) {
    return <main>Cart is empty</main>;
  }
  // const adjustQty = (item, qty) => {
  //   return item;
  // };
  // const itemsWithQty = () => {
  //   return items.reduce((acc, item) => {
  //     const found = acc.find(_item => _item.itemNumber === item.itemNumber)
  //     console.log('found', item)
  //     if(found) {
  //       found.quantity = found.quantity + 1
  //     } else {
  //       acc.push({
  //         quantity : 1,
  //         ...item
  //       })
  //     }
  //     console.log(acc)
  //   }, [])
  // }
  return (
    // <main>
    //   <p>
    //     {items.map((item, index) => (
    //       <div>
    //         <h4 className="flex flex-1 items-center font-semibold leading-4 mt-2">
    //           {item.name} ${item.price}
    //         </h4>
    //         <h4 className="flex flex-1 items-center font-semibold leading-4 mt-2"></h4>
    //         <button
    //           type="button"
    //           key={index}
    //           className="bg-red-100 hover:bg-red-200 p-1 rounded ml-2"
    //           onClick={() => handleRemove(index)}
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             className="text-red-500 w-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    //             />
    //           </svg>
    //         </button>

    //         <h5>Quantity : {item.qty}</h5>

    //         <form>
    //           <input type="number" id="quantity" placeholder='Quantity'></input>
    //           <button
    //           className="change-quantity"
    //           type="submit"
    //            onClick={() => handleQuantity()}
    //         >
    //           Change Quantity
    //         </button>
    //         </form>
    //         <p>Total price: ${item.qty * item.price}</p>
    //       </div>
    //     ))}
    //   </p>
    // </main>
    <div>
      <h1 className="font-semibold text-2xl">Buy List</h1>

      {items.map((item, index) => (
        <div className="mt-4">
          <div className="border border-gray-200 p-4 rounded shadow mt-2 grid grid-cols-1 gap-y-4">
            {/* ******************************
             * TEMPLATE FOR BUY LIST ITEM *
             ******************************
             * */}
            <div
              className="grid border border-gray-200 gap-x-4 rounded shadow p-4"
              style={{
                gridTemplateColumns: '1fr 10fr 1fr 0fr 1fr 0fr 1fr 0fr',
              }}
            >
              <img
                // src="https://cdnimg.webstaurantstore.com/images/products/small/228802/1679695.jpg"
                src={item.image}
                className="p-2 rounded border border-gray-200"
              />
              <div className="flex flex-col flex-grow justify-center">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p>{item.description}</p>
              </div>

              <div className="font-semibold text-lg text-red-500 flex items-center justify-end">
                {item.price}
              </div>

              <span className="flex items-center font-semibold">x</span>

              <div className="flex items-center justify-center">
                <input
                  type="number"
                  className="border border-gray-300 rounded w-24 text-lg px-2"
                  placeholder="1"
                  min='1'
                />
              </div>

              <span className="flex items-center">=</span>

              <span className="flex items-center font-semibold text-green-500 text-xl">
                {item.price * item.qty}
              </span>

              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="bg-red-100 hover:bg-red-200 p-1 rounded ml-2"
                  onClick={() => handleRemove(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-red-500 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyList;
