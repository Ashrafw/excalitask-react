import { useEffect, useState } from "react";
import { usePersistStore } from "../../lib/zustand";
import ColourStyles from "../ColourStyles";
import FontStyles from "../FontStyles";
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
          <div className=" grid grid-cols-8 gap-1">
            <ColourStyles theme={theme} setTheme={setEditTheme} />
          </div>
        </div>
      </div>
      <div className="mt-2 text-sm">
        <div className=" grid grid-cols-3 gap-y-2 gap-x-2 text-sm items-center">
          <FontStyles fontStyle={fontStyle} setFontStyle={setEditFontStyle} />
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
