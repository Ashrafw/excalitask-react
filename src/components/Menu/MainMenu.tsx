import { useRef, useState } from "react";
// import { IoMenuOutline } from "react-icons/io5";
import { usePersistStore } from "../../lib/zustand";
// import ColorPicker from "react-pick-color";
import { PiGearSix } from "react-icons/pi";
// import { useOnClickOutside } from "../../hooks/use-on-click-outside";
import { IoMdClose } from "react-icons/io";

const MainMenu = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpenBtn, setIsOpenBtn] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  // useOnClickOutside(navRef, () => setIsOpen(false));

  const { backgroundColour, setBackgroundColour } = usePersistStore();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpenBtn((prev) => !prev)}
        className={`  w-[40px] h-[40px] p-2 flex shadow-sm justify-center items-center rounded  ${
          !isOpenBtn ? "bg-white/60" : "bg-white"
        } text-gray-700  hover:bg-slate-100 text-2xl`}
      >
        {!isOpenBtn ? <PiGearSix /> : <IoMdClose />}
      </button>
      {isOpenBtn ? (
        <div
          className=" absolute  mt-2  rounded-md   right-0 z-20 shadow-md w-[260px] max-w-[260px]"
          ref={navRef}
        >
          <div className="  bg-slate-100  p-2 rounded-md  flex flex-col gap-4 right-0 z-20 shadow-md">
            <div>
              <h2 className=" text-sm pb-2  font-bold text-gray-800">Background theme</h2>
              <div className=" grid grid-cols-5  gap-x-2 gap-y-2 items-center">
                <button
                  onClick={() => setBackgroundColour("bg-slate-50")}
                  className={` w-full h-6 bg-slate-50 rounded shadow-md  ${
                    backgroundColour === "bg-slate-50" ? " ring-[3px] ring-blue-400 " : ""
                  } `}
                ></button>
                <button
                  onClick={() => setBackgroundColour("bg-[#2e3234]")}
                  className={` w-full h-6 bg-[#2e3234] rounded shadow-md ${
                    backgroundColour === "bg-[#2e3234]" ? " ring-[3px] ring-blue-400" : ""
                  }`}
                ></button>{" "}
                <button
                  onClick={() => setBackgroundColour("bg-slate-600")}
                  className={` w-full h-6 bg-slate-600 rounded shadow-md ${
                    backgroundColour === "bg-slate-600" ? " ring-[3px] ring-blue-400" : ""
                  }`}
                ></button>
                <button
                  onClick={() => setBackgroundColour("bg-[#2c8486]")}
                  className={` w-full h-6 bg-[#2c8486] rounded shadow-md ${
                    backgroundColour === "bg-[#2c8486]" ? " ring-[3px] ring-blue-400" : ""
                  }`}
                ></button>{" "}
                <button
                  onClick={() => setBackgroundColour("bg-[#1e647f]")}
                  className={` w-full h-6 bg-[#1e647f] rounded shadow-md ${
                    backgroundColour === "bg-[#1e647f]" ? " ring-[3px] ring-blue-400" : ""
                  }`}
                ></button>{" "}
              </div>
              {/* <div className="mt-6">
              <ColorPicker color={color} onChange={(color) => setColor(color.hex)} />
            </div> */}
            </div>
            {/* <div>
              <h2 className=" text-sm pb-2 underline font-bold text-gray-800">Size</h2>
              <div className="  grid grid-cols-5 gap-2 ">
                <button
                  onClick={() => setZoomNum("zoom90")}
                  className={` w-full h-10 bg-white rounded shadow border  ${
                    zoomNum === "zoom90" ? " ring-[3px] ring-blue-400 " : ""
                  } `}
                >
                  {" "}
                  xs
                </button>
                <button
                  onClick={() => setZoomNum("zoom100")}
                  className={` w-full h-10 bg-white rounded shadow border  ${
                    zoomNum === "zoom100" ? " ring-[3px] ring-blue-400 " : ""
                  } `}
                >
                  {" "}
                  S
                </button>
                <button
                  onClick={() => setZoomNum("zoom125")}
                  className={` w-full h-10 bg-white rounded shadow border ${
                    zoomNum === "zoom125" ? " ring-[3px] ring-blue-400" : ""
                  }`}
                >
                  {" "}
                  M
                </button>
                <button
                  onClick={() => setZoomNum("zoom150")}
                  className={` w-full h-10 bg-white rounded shadow border ${
                    zoomNum === "zoom150" ? " ring-[3px] ring-blue-400" : ""
                  }`}
                >
                  {" "}
                  L
                </button>
                <button
                  onClick={() => setZoomNum("zoom160")}
                  className={` w-full h-10 bg-white rounded shadow border ${
                    zoomNum === "zoom160" ? " ring-[3px] ring-blue-400" : ""
                  }`}
                >
                  {" "}
                  XL
                </button>
              </div>
            </div> */}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MainMenu;
