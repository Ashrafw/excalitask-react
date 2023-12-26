import { useState } from "react";
// import { IoMenuOutline } from "react-icons/io5";
import { IoInvertMode } from "react-icons/io5";
import { usePersistStore } from "../../lib/zustand";
// import ColorPicker from "react-pick-color";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("bg-slate-700");
  console.log("color", color);
  console.log(" color === bg-red-800", color === "bg-red-800");
  const { backgroundColour, setBackgroundColour } = usePersistStore();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={` p-2 flex shadow-sm justify-center items-center rounded bg-white/30 text-black/70  hover:bg-slate-100 text-2xl`}
      >
        <IoInvertMode />
      </button>
      {isOpen ? (
        <div className=" absolute bg-white mt-2 p-2 rounded-md  flex flex-col gap-4 right-0 z-20 shadow-md">
          <div>
            <h2 className=" text-sm pb-2 underline font-bold">Background</h2>
            <div className=" flex flex-col gap-2 items-center">
              <button
                onClick={() => setBackgroundColour("bg-slate-50")}
                className={` w-12 h-6 bg-slate-50 rounded shadow-md  ${
                  backgroundColour === "bg-slate-50" ? " ring-[3px] ring-blue-400 " : ""
                } `}
              ></button>
              <button
                onClick={() => setBackgroundColour("bg-orange-50")}
                className={` w-12 h-6 bg-orange-50 rounded shadow-md ${
                  backgroundColour === "bg-orange-50" ? " ring-[3px] ring-blue-400" : ""
                }`}
              ></button>

              <button
                onClick={() => setBackgroundColour("bg-teal-900")}
                className={` w-12 h-6  bg-teal-900 rounded shadow-md${
                  backgroundColour === "bg-teal-900" ? " ring-[3px] ring-blue-400" : ""
                }`}
              ></button>
              <button
                onClick={() => setBackgroundColour("bg-slate-700")}
                className={` w-12 h-6 bg-slate-700 rounded shadow-md ${
                  backgroundColour === "bg-slate-700" ? " ring-[3px] ring-blue-400" : ""
                }`}
              ></button>
              <button
                onClick={() => setBackgroundColour("bg-gray-900")}
                className={` w-12 h-6 bg-gray-900 rounded shadow-md ${
                  backgroundColour === "bg-gray-900" ? " ring-[3px] ring-blue-400" : ""
                }`}
              ></button>
            </div>
            {/* <div className="mt-6">
              <ColorPicker color={color} onChange={(color) => setColor(color.hex)} />
            </div> */}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MainMenu;
