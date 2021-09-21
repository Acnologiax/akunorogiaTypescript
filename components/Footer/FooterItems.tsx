import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { dark, light } from "../../redux/darkMode/mode";
import Currently from "./Currently";
import Curr from "../../pages/curr";
const FooterITems = () => {
  const [isOpen, setisOpen] = useState(true);
  let year = new Date().getFullYear();
  const mode = useSelector((state: RootState) => state.mode.value);
  const dispatch = useDispatch();
  function handleClick() {
    setisOpen(!isOpen);
  }
  return (
    <div>
      <div className="flex justify-between items-center p-12 lg:p-12"></div>
      <div className=" grid grid-cols-1 place-content-center justify-items-center lg:flex  lg:justify-between lg:items-center   ">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-4xl  select-none pb-12 lg:p-4 lg:pb-24  lg:pl-10">
            <span className="text-mine"> Aku</span>
            <span className="text-mine2">noro</span>
            <span className="text-mine">gia</span>
          </h1>
          <h1 className="hidden lg:block text-sm text-gray-500 lg:pl-6 pt-4 lg:pb-6">
            © 2020-{year} <span className="text-mine"> Aku</span>
            <span className="text-mine2">noro</span>
            <span className="text-mine">gia</span>. All Rights Reserved.
          </h1>
        </div>
        <div className="pb-8">
          <iframe
            src="https://open.spotify.com/embed/playlist/6nm8IMHVnt1GRPKJ8zvDSD?theme=0"
            width="250"
            height="330"
            allow="encrypted-media"
            frameBorder="0"
            className=" border border-opacity-40 "
          ></iframe>
        </div>
        <div className="lg:self-center lg:pr-12 pt-8">
          <ul className="flex flex-col text-2xl text-white justify-center items-center whitespace-nowrap space-y-2 ">
            <Link href="/">
              <a>
                <li className="transition duration-500 ease-in-out hover:text-mine">
                  Home
                </li>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <li className=" transition duration-500 ease-in-out hover:text-mine2">
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
            <Link href="/contact-me">
              <a>
                <li className=" transition duration-500 ease-in-out hover:text-mine2">
                  Contact Me
                </li>
              </a>
            </Link>
          </ul>
          <div className="flex flex-col justify-center items-center pt-2">
            <div className="flex space-x-5 pb-4 pt-2   ">
              <FaDiscord className="transition duration-500 ease-in-out hover:text-mine cursor-pointer w-6 h-6 " />
              <FaTwitter className="transition duration-500 ease-in-out hover:text-mine2 cursor-pointer w-6 h-6 " />
              <div className="">
                <button
                  onClick={() => dispatch(light())}
                  className={`${mode ? "" : "hidden"}`}
                >
                  <MoonIcon
                    className={`transition duration-500 ease-in-out hover:text-mine w-6 h-6 animate-pulse`}
                  />
                </button>
                <button
                  onClick={() => dispatch(dark())}
                  className={`${mode ? "hidden" : ""}`}
                >
                  <SunIcon
                    className={`transition duration-500 ease-in-out hover:text-mine w-6 h-6 animate-pulse`}
                  />
                </button>
              </div>
            </div>

            <h1 className="lg:hidden text-xs text-gray-500 lg:pl-6 pt-2 pb-4 ">
              © 2020-{year} <span className="text-mine"> Aku</span>
              <span className="text-mine2">noro</span>
              <span className="text-mine">gia</span>. All Rights Reserved.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterITems;
