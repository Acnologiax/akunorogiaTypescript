import NavItems from "./NavItems";
import Link from "next/link";
import { ShoppingCartIcon, HomeIcon } from "@heroicons/react/outline";
const Nav = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-10 m-0 ">
        <NavItems title={"Home"} Icon={HomeIcon} />
        <NavItems title={"Home"} Icon={HomeIcon} />
        <NavItems title={"Home"} Icon={HomeIcon} />
        <NavItems title={"Home"} Icon={HomeIcon} />
        <NavItems title={"Home"} Icon={HomeIcon} />
        <Link href="/cart">
          <a>
            <NavItems title={"Cart"} Icon={ShoppingCartIcon} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
