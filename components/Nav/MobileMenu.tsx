import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { dark, light } from "../../redux/darkMode/mode";
import { useState } from "react";
const MobileMenu = () => {
  const mode = useSelector((state: RootState) => state.mode.value);
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };

  return (
    <div>
      <div className="flex  flex-col  h-screen text-2xl  bg-gray-900 bg-opacity-70  space-y-14 items-start justify-evenly py-10 px-10">
        <ul className={`  transform translate-x-2    tracking-widest`}>
          <Link href="/">
            <a>
              <li className="transition duration-500 ease-in-out	hover:text-mine py-1">
                Home
              </li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li className=" transition duration-500 ease-in-out hover:text-mine2 py-1">
                About
              </li>
            </a>
          </Link>
          <Link href="/posts">
            <a>
              <li className="transition duration-500 ease-in-out hover:text-mine py-1">
                Posts
              </li>
            </a>
          </Link>

          <li onClick={handleClick} className="cursor-pointer py-1">
            <div className="flex items-center justify-center group">
              <h1 className="transition duration-500 ease-in-out group-hover:text-mine2 ">
                My Top Lists
              </h1>
              <button
                onClick={handleClick}
                className={`${
                  state
                    ? "transition duration-500 ease-in-out  group-hover:text-mine2"
                    : "hidden"
                }`}
              >
                <BsArrowUpShort className={`w-8 h-8 `} />
              </button>
              <button
                onClick={handleClick}
                className={`${
                  state
                    ? "hidden"
                    : "transition duration-500 ease-in-out group-hover:text-mine2"
                }`}
              >
                <BsArrowDownShort className={` w-8 h-8  `} />
              </button>
            </div>
            <ul className={state ? "pb-4 pt-1" : "hidden"}>
              <Link href="/artists">
                <a>
                  <li className="transition duration-500 ease-in-out hover:text-mine pl-4 py-1">
                    Artists
                  </li>
                </a>
              </Link>
              <Link href="/tracks">
                <a>
                  <li className="transition duration-500 ease-in-out hover:text-mine2 pl-4 py-1">
                    Tracks
                  </li>
                </a>
              </Link>
              <Link href="/movies">
                <a>
                  <li className="transition duration-500 ease-in-out hover:text-mine pl-4 py-1">
                    Movies
                  </li>
                </a>
              </Link>
              <Link href="/shows">
                <a>
                  <li className="transition duration-500 ease-in-out hover:text-mine2 pl-4 py-1">
                    TV Shows
                  </li>
                </a>
              </Link>
            </ul>
          </li>

          <Link href="/products">
            <a>
              <li className="transition duration-500 ease-in-out hover:text-mine py-1">
                Products
              </li>
            </a>
          </Link>
          <Link href="/cart">
            <a>
              <li className="transition duration-500 ease-in-out hover:text-mine2 py-1">
                Cart
              </li>
            </a>
          </Link>
        </ul>
        <div className="self-start">
          <div className="flex space-x-5 pb-4 pt-1   ">
            <FaDiscord className="transition duration-500 ease-in-out hover:text-mine cursor-pointer w-8 h-8  " />
            <FaTwitter className="transition duration-500 ease-in-out hover:text-mine2 cursor-pointer w-8 h-8  " />
            <div className=" ">
              <button
                onClick={() => dispatch(light())}
                className={`${mode ? "" : "hidden"}`}
              >
                <MoonIcon
                  className={`transition duration-500 ease-in-out hover:text-mine w-8 h-8  animate-pulse`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
