import { useState } from "react";
// import { IoMenuOutline } from "react-icons/io5";
import { IoInvertMode } from "react-icons/io5";
import { usePersistStore } from "../../lib/zustand";
// import ColorPicker from "react-pick-color";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { backgroundColour, setBackgroundColour, setZoomNum, zoomNum } =
    usePersistStore();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={` p-2 flex shadow-sm justify-center items-center rounded bg-white text-gray-900  hover:bg-slate-100 text-2xl`}
      >
        <IoInvertMode />
      </button>
      {isOpen ? (
        <div className=" absolute bg-white/85 mt-2 p-2 rounded-md  flex flex-col gap-4 right-0 z-20 shadow-md">
          <div>
            <h2 className=" text-sm pb-2 underline font-bold">Background</h2>
            <div className=" grid grid-cols-3  gap-x-4 gap-y-2 items-center">
              <button
                onClick={() => setBackgroundColour("bg-slate-100")}
                className={` w-full h-6 bg-slate-100 rounded shadow-md  ${
                  backgroundColour === "bg-slate-100" ? " ring-[3px] ring-blue-400 " : ""
                } `}
              ></button>
              <button
                onClick={() => setBackgroundColour("bg-orange-50")}
                className={` w-full h-6 bg-orange-50 rounded shadow-md ${
                  backgroundColour === "bg-orange-50" ? " ring-[3px] ring-blue-400" : ""
                }`}
              ></button>

              <button
                onClick={() => setBackgroundColour("bg-teal-900")}
                className={` w-full h-6  bg-teal-900 rounded shadow-md${
                  backgroundColour === "bg-teal-900" ? " ring-[3px] ring-blue-400" : ""
                }`}
              ></button>
              <button
                onClick={() => setBackgroundColour("bg-slate-700")}
                className={` w-full h-6 bg-slate-700 rounded shadow-md ${
                  backgroundColour === "bg-slate-700" ? " ring-[3px] ring-blue-400" : ""
                }`}
              ></button>
              <button
                onClick={() => setBackgroundColour("bg-gray-900")}
                className={` w-full h-6 bg-gray-900 rounded shadow-md ${
                  backgroundColour === "bg-gray-900" ? " ring-[3px] ring-blue-400" : ""
                }`}
              ></button>
              <button
                onClick={() => setBackgroundColour("bg-cyan-700")}
                className={` w-full h-6 bg-cyan-700 rounded shadow-md ${
                  backgroundColour === "bg-cyan-700" ? " ring-[3px] ring-blue-400" : ""
                }`}
              ></button>
            </div>
            {/* <div className="mt-6">
              <ColorPicker color={color} onChange={(color) => setColor(color.hex)} />
            </div> */}
          </div>
          <div>
            <h2 className=" text-sm pb-2 underline font-bold">Size</h2>
            <div className=" flex  gap-2 items-center">
              <button
                onClick={() => setZoomNum("zoom90")}
                className={` w-12 h-10 bg-slate-50 rounded shadow-md  ${
                  zoomNum === "zoom90" ? " ring-[3px] ring-blue-400 " : ""
                } `}
              >
                {" "}
                XS
              </button>{" "}
              <button
                onClick={() => setZoomNum("zoom100")}
                className={` w-12 h-10 bg-slate-50 rounded shadow-md  ${
                  zoomNum === "zoom100" ? " ring-[3px] ring-blue-400 " : ""
                } `}
              >
                {" "}
                S
              </button>
              <button
                onClick={() => setZoomNum("zoom125")}
                className={` w-12 h-10 bg-slate-50rounded shadow-md ${
                  zoomNum === "zoom125" ? " ring-[3px] ring-blue-400" : ""
                }`}
              >
                {" "}
                M
              </button>
              <button
                onClick={() => setZoomNum("zoom150")}
                className={` w-12 h-10  bg-slate-50 rounded shadow-md ${
                  zoomNum === "zoom150" ? " ring-[3px] ring-blue-400" : ""
                }`}
              >
                {" "}
                L
              </button>
              <button
                onClick={() => setZoomNum("zoom160")}
                className={` w-12 h-10  bg-slate-50 rounded shadow-md ${
                  zoomNum === "zoom160" ? " ring-[3px] ring-blue-400" : ""
                }`}
              >
                {" "}
                XL
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MainMenu;
