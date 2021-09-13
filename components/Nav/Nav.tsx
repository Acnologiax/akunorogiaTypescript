import NavItems from "./NavItems";
import Link from "next/link";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCartIcon, HomeIcon } from "@heroicons/react/outline";
const Nav = () => {
  const cart = useSelector((state: RootState) => state.cart.value);

  return (
    <div className="flex justify-between items-center p-4 sm:p-10 m-0  ">
      <Link href="/">
        <a>
          <NavItems title={"Home"} Icon={HomeIcon} span="" />
        </a>
      </Link>
      <Link href="/posts">
        <a>
          <NavItems title={"add posts"} Icon={HomeIcon} span="" />
        </a>
      </Link>{" "}
      <NavItems title={"Home"} Icon={HomeIcon} span="" />
      <NavItems title={"Home"} Icon={HomeIcon} span="" />
      <NavItems title={"Home"} Icon={HomeIcon} span="" />
      <Link href="/cart">
        <a>
          <NavItems title={"Cart"} Icon={ShoppingCartIcon} span={cart} />
        </a>
      </Link>
    </div>
  );
};

export default Nav;
