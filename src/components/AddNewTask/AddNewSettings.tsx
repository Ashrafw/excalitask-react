import React from "react";

type AddNewSettingsProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  fontStyle: string;
  setFontStyle: React.Dispatch<React.SetStateAction<string>>;
  prefix: string;
  setPrefix: React.Dispatch<React.SetStateAction<string>>;
};

const AddNewSettings = ({
  theme,
  setTheme,
  fontStyle,
  setFontStyle,
  prefix,
  setPrefix,
}: AddNewSettingsProps) => {
  return (
    <div className="  pt-1 pb-2 px-2 rounded ">
      <div className="   border-b  pb-2">
        <div className="  gap-2 items-center  text-xs">
          <div className=" grid grid-cols-6 gap-1">
            <button
              onClick={() => setTheme("bg-slate-700")}
              className={` w-full h-6 bg-slate-700 rounded border ${
                theme === "bg-slate-700" ? " ring-2 ring-blue-500" : ""
              }`}
              // " w-full h-6 bg-slate-700 rounded ring-4 ring-blue-500"
            ></button>
            <button
              onClick={() => setTheme("bg-neutral-900")}
              className={` w-full h-6 bg-neutral-900 rounded border ${
                theme === "bg-neutral-900" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-cyan-800")}
              className={` w-full h-6 bg-cyan-800 rounded border ${
                theme === "bg-cyan-800" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-emerald-700")}
              className={` w-full h-6 bg-emerald-700 rounded border ${
                theme === "bg-emerald-700" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-rose-900")}
              className={` w-full h-6 bg-rose-900 rounded border ${
                theme === "bg-rose-900" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-pink-700")}
              className={` w-full h-6 bg-pink-700 rounded border ${
                theme === "bg-pink-700" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
          </div>
        </div>
      </div>
      <div className="mt-2 text-sm">
        {/* <h2 className=" text pb-2 font-semibold">Font Style</h2> */}
        <div className=" grid grid-cols-3 gap-y-2 gap-x-2 text-sm items-center">
          <button
            onClick={() => setFontStyle("font-poppins")}
            className={`w- font-poppins ${
              fontStyle === "font-poppins" ? " ring-2 ring-blue-500" : ""
            } border rounded shadow-sm p-1 px-2 bg-zinc-100`}
          >
            Font Style
          </button>
          <button
            onClick={() => setFontStyle("font-playpen")}
            className={`w- font-playpen ${
              fontStyle === "font-playpen" ? " ring-2 ring-blue-500" : " "
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100`}
          >
            Font Style
          </button>
          <button
            onClick={() => setFontStyle("font-mali")}
            className={`w- font-mali ${
              fontStyle === "font-mali" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100 `}
          >
            Font Style
          </button>
          <button
            onClick={() => setFontStyle("font-mplus")}
            className={` font-mplus ${
              fontStyle === "font-mplus" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
          >
            Font Style
          </button>{" "}
          <button
            onClick={() => setFontStyle("font-philosopher")}
            className={` font-philosopher ${
              fontStyle === "font-philosopher" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
          >
            Font Style
          </button>{" "}
          <button
            onClick={() => setFontStyle("font-lora")}
            className={` font-lora ${
              fontStyle === "font-lora" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
          >
            Font Style
          </button>{" "}
        </div>
      </div>
      <div className="mt-2  border-t">
        {/* <h2 className=" text pb-2 font-semibold">Font Style</h2> */}
        <div className=" grid grid-cols-3 gap-y-2 gap-x-2 text-xs mt-2 items-center">
          <button
            onClick={() => setPrefix("none")}
            className={` border rounded shadow-sm p-1  bg-zinc-100  ${
              prefix === "none" ? " ring-2 ring-blue-500" : ""
            }`}
          >
            No prefix
          </button>
          <button
            onClick={() => setPrefix("letters")}
            className={`w-  border rounded shadow-sm p-1 px-2 bg-zinc-100  ${
              prefix === "letters" ? " ring-2 ring-blue-500" : ""
            }`}
          >
            a. b. c. d.
          </button>
          <button
            onClick={() => setPrefix("numbers")}
            className={`  border rounded shadow-sm p-1 px-2 bg-zinc-100   ${
              prefix === "numbers" ? " ring-2 ring-blue-500" : ""
            }`}
          >
            1. 2. 3. 4.
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewSettings;
