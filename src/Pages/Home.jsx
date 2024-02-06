import { useState } from "react";
import Accordion from "../components/Accordion";
import Alerts from "../components/Alerts";
import GetStarted from "../components/GetStarted";

const Home = () => {
  const [Components, SetComponents] = useState();

  const viewCompontent = (componets) => {
    switch (componets) {
      case "accordion":
        return <Accordion />;
      case "alerts":
        return <Alerts />;
    }
  };

  return (
    <>
      <section className="bg-[#212529] h-screen">
        <div className="container mx-auto">
          <div className="p-9">
            <div className="flex ">
              <div className="border w-[300px] p-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Components</h3>
                </div>
                <ul className="ml-3 inline-block mt-2">
                  <li
                    className="font-semibold text-gray-300 hover:bg-[#3a2372] px-2 py-1 rounded cursor-pointer"
                    onClick={() => SetComponents("accordion")}
                  >
                    Accordion
                  </li>
                  <li
                    className="font-semibold text-gray-300 hover:bg-[#3a2372] px-2 py-1 rounded cursor-pointer"
                    onClick={() => SetComponents("alerts")}
                  >
                    Alerts
                  </li>
                  <li className="font-semibold text-gray-300 hover:bg-[#3a2372] px-2 py-1 rounded cursor-pointer">
                    Buttons
                  </li>
                </ul>
              </div>
              <div className="border w-full p-3">
                {Components ? viewCompontent(Components) : <GetStarted/>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
