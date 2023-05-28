import CartItem from "./cartItems";

export default function Cart() {
  return (
    <>
      <div className="flex-row items-center justify-center">
        <div className="flex items-center justify-center text-[32px]">
        	Cart Page
        </div>
        <div className="flex flex-col gap-[35px] items-center justify-center">
			<div className="flex flex-row gap-[170px] relative top-[30px]">
				<div>My Shopping Bag (3 Items)</div>
				<div>Total Price: 3000</div>
			</div>
			<div><CartItem/></div>
			<div><CartItem/></div>
			<div><CartItem/></div>
			<div className="relative flex justify-center bg-red-700 text-white h-[30px] w-[100px] items-center -left-[200px]">Place Order</div>
		</div>
      </div>
    </>
  );
}
