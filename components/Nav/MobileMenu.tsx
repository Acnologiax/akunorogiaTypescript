import { FaDiscord, FaTwitter } from "react-icons/fa";
import { BsArrowDownShort } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Theme from "../Theme/Theme";

const MobileMenu = ({ result }) => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };

  return (
    <Transition
      show={result}
      enter="duration-300 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-200 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div>
        <div className="flex  flex-col  h-screen text-2xl  bg-black bg-opacity-70  space-y-14 items-start justify-evenly py-10 px-10">
          <ul className={"transform translate-x-2 tracking-widest"}>
            <Transition.Child
              enter="transition ease-in-out duration-400 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-100 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
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

                  <BsArrowDownShort
                    className={` w-8 h-8 transition duration-500 ease-in-out group-hover:text-mine2  `}
                  />
                </div>
                <Transition
                  show={state}
                  enter="transition ease-in-out duration-200 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-200 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <ul className={"pb-4 pt-1"}>
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
                </Transition>
              </li>
            </Transition.Child>
          </ul>
          <Transition.Child
            enter="transition ease-in-out duration-400 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-100 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="self-start">
              <div className="flex space-x-5 pb-4 pt-1   ">
                <FaDiscord className="transition duration-500 ease-in-out hover:text-mine cursor-pointer w-8 h-8  " />
                <FaTwitter className="transition duration-500 ease-in-out hover:text-mine2 cursor-pointer w-8 h-8  " />
                <Theme />
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  );
};

export default MobileMenu;
