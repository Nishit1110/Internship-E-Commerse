export default function CartItem() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center rounded border-2 border-black h-[130px] w-[500px]">
          <div className="relative bg-red-700 h-[90px] w-[100px] m-3"></div>
          <div className="flex-row relative w-[100px] m-3]">
            <div>Book Name</div>
            <div className="text-[12px] text-red-600">Cart Item Name</div>
            <div className="flex gap-2 item-center my-3">
                <div className="border-2 border-red bg-red-600 h-[20px] w-[20px] flex items-center justify-center text-white">+</div>
                <div className="text-[15px]">1</div>
                <div className="border-2 border-red bg-red-600 h-[20px] w-[20px] flex items-center justify-center text-white">-</div>
            </div>
          </div>
          <div className="flex flex-col items-end  w-[250px] h-[88px] text-[13px]">
            <div >500</div>
            <div className="text-red-600"><span className="line-through text-black">1000</span> 50% off</div>
            <div className="text-red-600 my-1">remove</div>
          </div>
        </div>
      </div>
    </>
  );
}
