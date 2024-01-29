import { useEffect, useState } from "react";
import { usePersistStore } from "../../lib/zustand";
type AddSettingSingleType = {
  theme: string;
  fontStyle: string;
  prefix: string;
  taskId: string;
};
export const AddSettingSingle = ({
  theme,
  fontStyle,
  prefix,
  taskId,
}: AddSettingSingleType) => {
  const [editTheme, setEditTheme] = useState(theme);
  const [editFontStyle, setEditFontStyle] = useState(fontStyle);
  const [editPrefix, setEditPrefix] = useState(prefix);
  const { tasksMain, setTaskMain } = usePersistStore();

  useEffect(() => {
    if (fontStyle !== editFontStyle) {
      const newTask = tasksMain.map((itemTask) => {
        if (itemTask.id === taskId) {
          return {
            ...itemTask,
            fontStyle: editFontStyle,
          };
        } else {
          return itemTask;
        }
      });

      setTaskMain(newTask);
    }
  }, [editFontStyle]);

  useEffect(() => {
    if (theme !== editTheme) {
      const newTask = tasksMain.map((itemTask) => {
        if (itemTask.id === taskId) {
          return {
            ...itemTask,
            theme: editTheme,
          };
        } else {
          return itemTask;
        }
      });

      setTaskMain(newTask);
    }
  }, [editTheme]);
  useEffect(() => {
    if (prefix !== editPrefix) {
      const newTask = tasksMain.map((itemTask) => {
        if (itemTask.id === taskId) {
          return {
            ...itemTask,
            prefix: editPrefix,
          };
        } else {
          return itemTask;
        }
      });

      setTaskMain(newTask);
    }
  }, [editPrefix]);

  return (
    <div className="  pt-1 pb-2 px-2 rounded ">
      <div className="   border-b  pb-2">
        <div className="  gap-2 items-center  text-xs">
          <div className=" grid grid-cols-6 gap-1">
            <button
              onClick={() => setEditTheme("bg-[#222222]")}
              className={` w-full h-6 bg-[#222222] rounded border ${
                theme === "bg-[#222222]" ? " ring-2 ring-blue-500" : ""
              }`}
              // " w-full h-6 bg-slate-700 rounded ring-4 ring-blue-500"
            ></button>
            <button
              onClick={() => setEditTheme("bg-[#474747]")}
              className={` w-full h-6 bg-[#474747] rounded border ${
                theme === "bg-[#474747]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setEditTheme("bg-[#727272]")}
              className={` w-full h-6 bg-[#575757] rounded border ${
                theme === "bg-[#575757]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setEditTheme("bg-[#97213f]")}
              className={` w-full h-6 bg-[#97213f] rounded border ${
                theme === "bg-[#97213f]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setEditTheme("bg-[#b11462]")}
              className={` w-full h-6 bg-[#b11462] rounded border ${
                theme === "bg-[#b11462]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setEditTheme("bg-[#D2A2A9]")}
              className={` w-full h-6 bg-[#D2A2A9] rounded border ${
                theme === "bg-[#D2A2A9]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-[#0f4366]")}
              className={` w-full h-6 bg-[#0f4366] rounded border ${
                theme === "bg-[#0f4366]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-[#3a79a3]")}
              className={` w-full h-6 bg-[#3a79a3] rounded border ${
                theme === "bg-[#3a79a3]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setEditTheme("bg-[#499db9]")}
              className={` w-full h-6 bg-[#499db9] rounded border ${
                theme === "bg-[#499db9]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setEditTheme("bg-[#094d3c]")}
              className={` w-full h-6 bg-[#094d3c] rounded border ${
                theme === "bg-[#094d3c]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-[#197a61]")}
              className={` w-full h-6 bg-[#197a61] rounded border ${
                theme === "bg-[#197a61]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-[#419068]")}
              className={` w-full h-6 bg-[#419068] rounded border ${
                theme === "bg-[#419068]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-[#47086c]")}
              className={` w-full h-6 bg-[#47086c] rounded border ${
                theme === "bg-[#47086c]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-[#6d167f]")}
              className={` w-full h-6 bg-[#6d167f] rounded border ${
                theme === "bg-[#6d167f]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-[#9240c1]")}
              className={` w-full h-6 bg-[#9240c1] rounded border ${
                theme === "bg-[#9240c1]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-[#b7a207]")}
              className={` w-full h-6 bg-[#aaab54] rounded border ${
                theme === "bg-[#aaab54]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-[#b2ad10]")}
              className={` w-full h-6 bg-[#b2ad10] rounded border ${
                theme === "bg-[#b2ad10]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-[#C7B29B]")}
              className={` w-full h-6 bg-[#C7B29B] rounded border ${
                theme === "bg-[#C7B29B]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <button
              onClick={() => setEditTheme("bg-[#E97451]")}
              className={` w-full h-6 bg-[#E97451] rounded border ${
                theme === "bg-[#E97451]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setEditTheme("bg-[#d13809]")}
              className={` w-full h-6 bg-[#d13809] rounded border ${
                theme === "bg-[#d13809]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setEditTheme("bg-[#9c3617]")}
              className={` w-full h-6 bg-[#9c3617] rounded border ${
                theme === "bg-[#9c3617]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setEditTheme("bg-[#005566]")}
              className={` w-full h-6 bg-[#005566] rounded border ${
                theme === "bg-[#005566]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setEditTheme("bg-[#1e7889]")}
              className={` w-full h-6 bg-[#1e7889] rounded border ${
                theme === "bg-[#1e7889]" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>{" "}
            <button
              onClick={() => setEditTheme("bg-[#3e8d9c]")}
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
            onClick={() => setEditFontStyle("font-poppins")}
            className={`w- font-poppins ${
              fontStyle === "font-poppins" ? " ring-2 ring-blue-500" : ""
            } border rounded shadow-sm p-1 px-2 bg-zinc-100`}
          >
            Font Style
          </button>
          <button
            onClick={() => setEditFontStyle("font-playpen")}
            className={`w- font-playpen ${
              fontStyle === "font-playpen" ? " ring-2 ring-blue-500" : " "
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100`}
          >
            Font Style
          </button>
          <button
            onClick={() => setEditFontStyle("font-mali")}
            className={`w- font-mali ${
              fontStyle === "font-mali" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100 `}
          >
            Font Style
          </button>
          {/* <button
            onClick={() => setEditFontStyle("font-rokkitt")}
            className={` font-rokkitt ${
              fontStyle === "font-rokkitt" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
          >
            Font Style
          </button> */}
          {/* <button
            onClick={() => setEditFontStyle("font-ubuntu")}
            className={` font-ubuntu ${
              fontStyle === "font-ubuntu" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
          >
            Font Style
          </button>{" "} */}
          {/* <button
            onClick={() => setEditFontStyle("font-rubik")}
            className={` font-rubik ${
              fontStyle === "font-rubik" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
          >
            Font Style
          </button>{" "} */}
          {/* <button
            onClick={() => setEditFontStyle("font-raj")}
            className={` font-raj ${
              fontStyle === "font-raj" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
          >
            Font Style
          </button>{" "} */}
          <button
            onClick={() => setEditFontStyle("font-mplus")}
            className={` font-mplus ${
              fontStyle === "font-mplus" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
          >
            Font Style
          </button>{" "}
          {/* <button
            onClick={() => setEditFontStyle("font-orbit")}
            className={` font-orbit ${
              fontStyle === "font-orbit" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
          >
            Font Style
          </button>{" "} */}
          <button
            onClick={() => setEditFontStyle("font-philosopher")}
            className={` font-philosopher ${
              fontStyle === "font-philosopher" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
          >
            Font Style
          </button>{" "}
          {/* <button
            onClick={() => setEditFontStyle("font-fahkwang")}
            className={` font-fahkwang ${
              fontStyle === "font-fahkwang" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
          >
            Font Style
          </button>{" "} */}
          {/* <button
            onClick={() => setEditFontStyle("font-upright")}
            className={` font-upright ${
              fontStyle === "font-upright" ? " ring-2 ring-blue-500" : ""
            }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
          >
            Font Style
          </button>{" "} */}
          <button
            onClick={() => setEditFontStyle("font-lora")}
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
            onClick={() => setEditPrefix("none")}
            className={` border rounded shadow-sm p-1  bg-zinc-100  ${
              prefix === "none" ? " ring-2 ring-blue-500" : ""
            }`}
          >
            No prefix
          </button>
          <button
            onClick={() => setEditPrefix("letters")}
            className={`w-  border rounded shadow-sm p-1 px-2 bg-zinc-100  ${
              prefix === "letters" ? " ring-2 ring-blue-500" : ""
            }`}
          >
            a. b. c. d.
          </button>
          <button
            onClick={() => setEditPrefix("numbers")}
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
