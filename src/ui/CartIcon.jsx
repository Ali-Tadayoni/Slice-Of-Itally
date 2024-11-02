import { HiOutlineShoppingCart } from "react-icons/hi2";

function CartIcon() {
  return (
    <div className="flex-center h-[3.125rem] w-[3.125rem] rounded-full bg-[#D0CCC7]/10">
      <div className="flex-center h-16 w-16">
        <HiOutlineShoppingCart size="24px" />
      </div>
    </div>
  );
}

export default CartIcon;
