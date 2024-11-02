import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Button from "./Button";
import CartIcon from "./CartIcon";
import Logo from "./Logo";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <>
      <header className="none ml-auto mr-auto mt-5 hidden w-[86%] items-center justify-between sm:flex lg:w-[78%]">
        <Logo />
        <ul className="text-textColor flex items-center gap-x-11 font-Poppins">
          <li className="text-primary">Home</li>
          <li>Menu</li>
          <li>About us</li>
          <li>Order online</li>
          <li>Reservation</li>
          <li>Contact us</li>
        </ul>
        <div className="flex items-center">
          <CartIcon />
          <Button type="auth" color="bg-green">
            Log in
          </Button>
        </div>
      </header>
      {/*Mobile Header*/}
      <header className="ml-auto mr-auto flex w-[86%] items-center justify-between sm:hidden">
        <Logo />
        <div className="flex items-center gap-x-4">
          <CartIcon />
          <button onClick={handleOpen}>
            <HiOutlineSquares2X2 size="24px" />
          </button>
        </div>
        {/* Mobile Nav */}
        <div
          className={`${isOpen ? "flex-col" : "hidden"} fixed bottom-0 left-0 top-0 w-64 bg-gray-100 px-4 pt-3`}
        >
          <div className="flex items-center justify-between border-b pb-5">
            <Logo />
            <button className="text-2xl text-zinc-600">&times;</button>
          </div>
          <ul className="text-textColor space-y-2 pt-5 [&>*:where(li:active)]:text-primary">
            <NavItem path="/">Home</NavItem>
            <NavItem path="/menu">Menu</NavItem>
            <li>About us</li>
            <li>Order online</li>
            <li>Reservation</li>
            <li>Contact us</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
