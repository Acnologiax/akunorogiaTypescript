import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { dark, light } from "../../redux/darkMode/mode";

const MobileMenu = () => {
  const mode = useSelector((state: RootState) => state.mode.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex  flex-col  h-screen text-2xl  bg-gray-900 bg-opacity-70  space-y-14 items-start justify-evenly py-10 px-10">
        <ul className={`  transform translate-x-2  space-y-8  tracking-widest`}>
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
          <Link href="/artists">
            <a>
              <li className="transition duration-500 ease-in-out hover:text-mine2 py-1">
                Artists
              </li>
            </a>
          </Link>
          <Link href="/tracks">
            <a>
              <li className="transition duration-500 ease-in-out hover:text-mine py-1">
                Tracks
              </li>
            </a>
          </Link>
          <Link href="/products">
            <a>
              <li className="transition duration-500 ease-in-out hover:text-mine2 py-1">
                Products
              </li>
            </a>
          </Link>
          <Link href="/cart">
            <a>
              <li className="transition duration-500 ease-in-out hover:text-mine py-1">
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
