import { MenuIcon, XIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { dark, light } from "../../redux/darkMode/mode";

const NavItems = () => {
  const [isOpen, setisOpen] = useState(false);

  // dark/light mode toggle using Redux to save the value which is true or false
  const mode = useSelector((state: RootState) => state.mode.value);
  const dispatch = useDispatch();

  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <div>
      <div className=" flex justify-between items-center p-2 mx-0 bg-black bg-opacity-100">
        <h1 className=" text-3xl  select-none pl-4 ">
          <span className="text-mine"> Aku</span>
          <span className="text-mine2">noro</span>
          <span className="text-mine">gia</span>
        </h1>
        <div>
          <ul className="hidden  lg:flex lg:space-x-10 lg:text-lg md:pr-26 xl:pr-96 ">
            <Link href="/">
              <a>
                <li className=" transition duration-500 ease-in-out	 hover:text-mine pl-8">
                  Home
                </li>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <li className="transition duration-500 ease-in-out hover:text-mine2">
                  About
                </li>
              </a>
            </Link>
            <Link href="/posts">
              <a>
                <li className="transition duration-500 ease-in-out hover:text-mine">
                  Posts
                </li>
              </a>
            </Link>
            <Link href="/artists">
              <a>
                <li className="transition duration-500 ease-in-out hover:text-mine2">
                  Artists
                </li>
              </a>
            </Link>
            <Link href="/tracks">
              <a>
                <li className="transition duration-500 ease-in-out hover:text-mine">
                  Tracks
                </li>
              </a>
            </Link>
            <Link href="/products">
              <a>
                <li className="transition duration-500 ease-in-out hover:text-mine">
                  Products
                </li>
              </a>
            </Link>
            <Link href="/cart">
              <a>
                <li className="transition duration-500 ease-in-out hover:text-mine">
                  Cart
                </li>
              </a>
            </Link>
          </ul>
        </div>
        <div className=" hidden lg:block">
          <button
            onClick={() => dispatch(light())}
            className={`${mode ? "" : "hidden"}`}
          >
            <MoonIcon
              className={`transition duration-500 ease-in-out hover:text-mine w-8 h-8 animate-pulse`}
            />
          </button>
          <button
            onClick={() => dispatch(dark())}
            className={`${mode ? "hidden" : ""}`}
          >
            <SunIcon
              className={`transition duration-500 ease-in-out hover:text-mine w-8 h-8  animate-pulse`}
            />
          </button>
        </div>
        <div className=" lg:hidden flex items-center">
          <button onClick={handleClick} className="mobile-menu-button z-10">
            <MenuIcon
              className={` transition duration-500 ease-in-out hover:text-mine h-9 w-9 ${
                isOpen ? "hidden" : ""
              }  `}
            />
            <XIcon
              className={`transition duration-500 ease-in-out hover:text-mine h-9 w-9 ${
                isOpen ? "" : "hidden"
              } animate-bounce pt-1 `}
            />
          </button>
        </div>
      </div>
      <div
        className={` ${
          isOpen ? "absolute" : "hidden"
        } lg:hidden top-0 right-0 left-0`}
      >
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavItems;
