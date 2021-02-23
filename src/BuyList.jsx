
const BuyList = () => {
  return (
  <div className="mt-4">
    <h1 className="font-semibold text-2xl">Buy List</h1>

    <div className="border border-gray-200 p-4 rounded shadow mt-2 grid grid-cols-1 gap-y-4">
      {/*
      ******************************
      * TEMPLATE FOR BUY LIST ITEM *
      ******************************
      *
      <div className="grid border border-gray-200 gap-x-4 rounded shadow p-4" style={{ gridTemplateColumns: "1fr 10fr 1fr 0fr 1fr 0fr 1fr 0fr"}}>
        <img src="https://cdnimg.webstaurantstore.com/images/products/small/228802/1679695.jpg" alt="Refrigerator" className="p-2 rounded border border-gray-200" />
        <div className="flex flex-col flex-grow justify-center">
          <h3 className="font-semibold text-lg">Refrigerator</h3>
          <p>
            53" Black Sliding Glass Door Merchandiser Refrigerator with LED Lighting
          </p>
        </div>

        <div className="font-semibold text-lg text-red-500 flex items-center justify-end">
          $1,949.00
        </div>

        <span className="flex items-center font-semibold">x</span>

        <div className="flex items-center justify-center">
          <input type="number" className="border border-gray-300 rounded w-24 text-lg px-2" value={1} />
        </div>

        <span className="flex items-center">=</span>

        <span className="flex items-center font-semibold text-green-500 text-xl">
          $1,949.00
        </span>

        <div className="flex items-center justify-end">
          <button type="button" className="bg-red-100 hover:bg-red-200 p-1 rounded ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-500 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div> */}
    </div>
  </div>
  )
}

export default BuyList;
