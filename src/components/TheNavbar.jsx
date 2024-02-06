import { FaBootstrap } from "react-icons/fa";
import Search from "./Search";
const TheNavbar = () => {
  return (
    <>
      <section className="bg-[#702df6] ">
        <div className="container mx-auto">
          <div className="flex justify-between p-2">

            <div className="flex items-center">
              <FaBootstrap className="text-4xl" />
              <ul className="flex ml-3 gap-x-3">
               <li className="text-white font-bold">Docs</li>
               <li className="text-white">Examples</li>
               <li className="text-white">Icons</li>
               <li className="text-white">Themes</li>
               <li className="text-white">Blog</li>
              </ul>
            </div>

            <div>
               <Search/>
            </div>

            <div>
            test
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheNavbar;
