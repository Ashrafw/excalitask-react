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
              onClick={() => setEditTheme("bg-slate-700")}
              className={` w-full h-6 bg-slate-700 rounded border ${
                theme === "bg-slate-700" ? " ring-2 ring-blue-500" : ""
              }`}
              // " w-full h-6 bg-slate-700 rounded ring-4 ring-blue-500"
            ></button>
            <button
              onClick={() => setEditTheme("bg-neutral-900")}
              className={` w-full h-6 bg-neutral-900 rounded border ${
                theme === "bg-neutral-900" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-cyan-800")}
              className={` w-full h-6 bg-cyan-800 rounded border ${
                theme === "bg-cyan-800" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-emerald-700")}
              className={` w-full h-6 bg-emerald-700 rounded border ${
                theme === "bg-emerald-700" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-rose-900")}
              className={` w-full h-6 bg-rose-900 rounded border ${
                theme === "bg-rose-900" ? " ring-2 ring-blue-500" : ""
              }`}
            ></button>
            <button
              onClick={() => setEditTheme("bg-pink-700")}
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
