import { FaBootstrap } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa";

import Search from "./Search";
const TheNavbar = () => {
  return (
    <>
      <section className="bg-[#702df6] ">
        <div className="container mx-auto">
          <div className="flex justify-between p-2">
            <div className="flex items-center">
              <FaBootstrap className="text-4xl" />
              <div className="hidden md:block">
                <ul className="flex ml-3 gap-x-3">
                  <li className=" font-bold text-gray-300 hover:text-gray-300 cursor-pointer">
                    Docs
                  </li>
                  <li className=" text-gray-300 hover:text-gray-200 cursor-pointer">
                    Examples
                  </li>
                  <li className=" text-gray-300 hover:text-gray-200 cursor-pointer">
                    Icons
                  </li>
                  <li className=" text-gray-300 hover:text-gray-200 cursor-pointer">
                    Themes
                  </li>
                  <li className=" text-gray-300 hover:text-gray-200 cursor-pointer">
                    Blog
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden md:block">
              <Search />
            </div>

            <div className="flex">
              <div className="flex items-center gap-x-2">
                <FaGithub className="text-xl text-gray-300 hover:text-gray-100 cursor-pointer" />
                <FaTwitter className="text-xl text-gray-300 hover:text-gray-100 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheNavbar;
