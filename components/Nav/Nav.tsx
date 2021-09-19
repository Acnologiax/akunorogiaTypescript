import NavItems from "./NavItems";
import Link from "next/link";
import { ShoppingCartIcon, HomeIcon } from "@heroicons/react/outline";
const Nav = () => {
  return (
    <div className="flex justify-between items-center space-x-1 py-4  sm:p-10 m-0 text-xs sm:text-xl  ">
      <Link href="/">
        <a>
          <NavItems title={"Home"} Icon={HomeIcon} span="" />
        </a>
      </Link>
      <Link href="/posts">
        <a>
          <NavItems title={"Posts"} Icon={HomeIcon} span="" />
        </a>
      </Link>
      <Link href="/products">
        <a>
          <NavItems title={"Products"} Icon={HomeIcon} span="" />
        </a>
      </Link>
      <Link href="/images">
        <a>
          <NavItems title={"Images"} Icon={HomeIcon} span="" />
        </a>
      </Link>

      <Link href="/cart">
        <a>
          <NavItems title={"Cart"} Icon={ShoppingCartIcon} span="" />
        </a>
      </Link>
    </div>
  );
};

export default Nav;
