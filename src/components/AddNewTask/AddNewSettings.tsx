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
    <div className="  pt-1 pb-2 px-2 rounded max-sm:text-xs">
      <div className="   border-b  pb-2">
        <div className="  gap-2 items-center  text-xs">
          <div className=" grid grid-cols-6 gap-1">
            <button
              onClick={() => setTheme("bg-[#222222]")}
              className={` w-full h-6 bg-[#222222] rounded border ${
                theme === "bg-[#222222]" ? " ring-2 ring-blue-500" : ""
              }`}
              // " w-full h-6 bg-slate-700 rounded ring-4 ring-blue-500"
            ></button>
            <button
              onClick={() => setTheme("bg-[#474747]")}
              className={` w-full h-6 bg-[#474747] rounded border ${
                theme === "bg-[#474747]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setTheme("bg-[#727272]")}
              className={` w-full h-6 bg-[#575757] rounded border ${
                theme === "bg-[#575757]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setTheme("bg-[#97213f]")}
              className={` w-full h-6 bg-[#97213f] rounded border ${
                theme === "bg-[#97213f]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setTheme("bg-[#b11462]")}
              className={` w-full h-6 bg-[#b11462] rounded border ${
                theme === "bg-[#b11462]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setTheme("bg-[#D2A2A9]")}
              className={` w-full h-6 bg-[#D2A2A9] rounded border ${
                theme === "bg-[#D2A2A9]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-[#0f4366]")}
              className={` w-full h-6 bg-[#0f4366] rounded border ${
                theme === "bg-[#0f4366]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-[#3a79a3]")}
              className={` w-full h-6 bg-[#3a79a3] rounded border ${
                theme === "bg-[#3a79a3]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setTheme("bg-[#499db9]")}
              className={` w-full h-6 bg-[#499db9] rounded border ${
                theme === "bg-[#499db9]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setTheme("bg-[#094d3c]")}
              className={` w-full h-6 bg-[#094d3c] rounded border ${
                theme === "bg-[#094d3c]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-[#197a61]")}
              className={` w-full h-6 bg-[#197a61] rounded border ${
                theme === "bg-[#197a61]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-[#419068]")}
              className={` w-full h-6 bg-[#419068] rounded border ${
                theme === "bg-[#419068]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-[#47086c]")}
              className={` w-full h-6 bg-[#47086c] rounded border ${
                theme === "bg-[#47086c]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-[#6d167f]")}
              className={` w-full h-6 bg-[#6d167f] rounded border ${
                theme === "bg-[#6d167f]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-[#9240c1]")}
              className={` w-full h-6 bg-[#9240c1] rounded border ${
                theme === "bg-[#9240c1]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-[#b7a207]")}
              className={` w-full h-6 bg-[#aaab54] rounded border ${
                theme === "bg-[#aaab54]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-[#b2ad10]")}
              className={` w-full h-6 bg-[#b2ad10] rounded border ${
                theme === "bg-[#b2ad10]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setTheme("bg-[#C7B29B]")}
              className={` w-full h-6 bg-[#C7B29B] rounded border ${
                theme === "bg-[#C7B29B]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <button
              onClick={() => setTheme("bg-[#E97451]")}
              className={` w-full h-6 bg-[#E97451] rounded border ${
                theme === "bg-[#E97451]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setTheme("bg-[#d13809]")}
              className={` w-full h-6 bg-[#d13809] rounded border ${
                theme === "bg-[#d13809]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setTheme("bg-[#9c3617]")}
              className={` w-full h-6 bg-[#9c3617] rounded border ${
                theme === "bg-[#9c3617]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setTheme("bg-[#005566]")}
              className={` w-full h-6 bg-[#005566] rounded border ${
                theme === "bg-[#005566]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setTheme("bg-[#1e7889]")}
              className={` w-full h-6 bg-[#1e7889] rounded border ${
                theme === "bg-[#1e7889]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setTheme("bg-[#3e8d9c]")}
              className={` w-full h-6 bg-[#3e8d9c] rounded border ${
                theme === "bg-[#3e8d9c]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
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
