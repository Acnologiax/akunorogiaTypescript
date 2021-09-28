import { MenuIcon, XIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { dark, light } from "../../redux/darkMode/mode";
import { Transition } from "@headlessui/react";
const NavItems = () => {
  const [isOpen, setisOpen] = useState(false);

  // dark/light mode toggle using Redux to save the value which is true or false
  const mode = useSelector((state: RootState) => state.mode.value);
  const dispatch = useDispatch();

  function handleClick() {
    setisOpen(!isOpen);
  }

  const [state, setState] = useState(false);
  const handleClick1 = () => {
    setState(!state);
  };
  return (
    <div>
      <div className=" flex justify-between items-center p-2 mx-0 bg-black bg-opacity-50">
        <h1 className=" text-3xl  select-none pl-4 ">
          <span className="text-mine"> Aku</span>
          <span className="text-mine2">noro</span>
          <span className="text-mine">gia</span>
        </h1>
        <div>
          <ul className="hidden  lg:flex lg:space-x-10 lg:text-lg md:pr-2 xl:pr-96 ">
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

            <li onClick={handleClick1} className="cursor-pointer relative  ">
              <div className="flex items-center justify-center group">
                <h1 className="transition duration-500 ease-in-out group-hover:text-mine2 ">
                  My Top Lists
                </h1>
                <button
                  onClick={handleClick1}
                  className={`${
                    state
                      ? "transition duration-500 ease-in-out  group-hover:text-mine2"
                      : "hidden"
                  }`}
                >
                  <BsArrowUpShort className={`w-6 h-6 `} />
                </button>
                <button
                  onClick={handleClick1}
                  className={`${
                    state
                      ? "hidden"
                      : "transition duration-500 ease-in-out group-hover:text-mine2"
                  }`}
                >
                  <BsArrowDownShort className={` w-6 h-6  `} />
                </button>
              </div>
              <Transition
                show={state}
                enter="duration-300 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <ul
                  className={
                    "pb-4 pt-1 absolute bg-black bg-opacity-90 border-b border-l border-r border-opacity-30 w-40 pl-4 top-11 right-2 "
                  }
                >
                  <Link href="/artists">
                    <a>
                      <li className="transition duration-500 ease-in-out hover:text-mine  py-1">
                        Artists
                      </li>
                    </a>
                  </Link>
                  <Link href="/tracks">
                    <a>
                      <li className="transition duration-500 ease-in-out hover:text-mine2  py-1">
                        Tracks
                      </li>
                    </a>
                  </Link>
                  <Link href="/movies">
                    <a>
                      <li className="transition duration-500 ease-in-out hover:text-mine  py-1">
                        Movies
                      </li>
                    </a>
                  </Link>
                  <Link href="/shows">
                    <a>
                      <li className="transition duration-500 ease-in-out hover:text-mine2  py-1">
                        TV Shows
                      </li>
                    </a>
                  </Link>
                </ul>
              </Transition>
            </li>
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

      <div className={` lg:hidden top-0 right-0 left-0  `}>
        <MobileMenu result={isOpen} />
      </div>
    </div>
  );
};

export default NavItems;
