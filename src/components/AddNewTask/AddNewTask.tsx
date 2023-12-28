import React, { useState } from "react";
import { MainTaskType, taskType, usePersistStore } from "../../lib/zustand";
import AddNewSingleTask from "./AddNewSingleTask";
import TaskItemAddSub from "./TaskItemAddSub";
import AddNewSettings from "./AddNewSettings";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { getDateFormatStart } from "../../helper/helper";
import { v4 as uuidv4 } from "uuid";

const AddNewTask = ({
  setOpenAddTask,
}: {
  setOpenAddTask: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { tasksMain, setTaskMain, zoomNum } = usePersistStore();
  const [categoryEdit, setCategoryEdit] = useState(getDateFormatStart());
  const [theme, setTheme] = useState("bg-slate-700");
  const [fontStyle, setFontStyle] = useState("font-poppins");
  const [isEditSettings, setIsEditSettings] = useState(false);
  const [prefix, setPrefix] = useState("none");
  const [newTaskList, setNewTaskList] = useState<taskType[] | any[]>([]);
  const [animationNew] = useAutoAnimate();
  const [animationTwo] = useAutoAnimate();

  const handleSave = () => {
    const newMainTask: MainTaskType = {
      id: uuidv4(),
      title: categoryEdit,
      isComplete: false,
      taskList: newTaskList,
      isSubtask: false,
      theme: theme,
      fontStyle: fontStyle,
      prefix: prefix,
    };
    setTaskMain([...tasksMain, newMainTask]);
    setOpenAddTask(false);
  };

  return (
    <div
      className={`absolute w-full h-screen z-40 top-0 left-0 flex justify-center items-start pt-16 blur-none`}
    >
      <div
        className={` ${zoomNum}  relative shadow-xl rounded-lg overflow-hidden ${theme} max-w-[400px] min-w-[310px]  w-[95%] ${fontStyle}`}
      >
        <div className="p-2 flex flex-col gap-2">
          {/* Task category */}
          <div
            className={`rounded-tl rounded-tr border-slate-800  ${theme} bg text-gray-800 flex justify-between items-center gap-4`}
          >
            <input
              type="text"
              className=" w-full rounded p-1 px-2 font-semibold text-base"
              value={categoryEdit}
              onChange={(e) => setCategoryEdit(e.target.value)}
            />
          </div>

          {/* Display the entered Task */}
          {newTaskList.length > 0 ? (
            <div
              className=" bg-gray-50 flex flex-col text-[16px] py-2 px-1 rounded "
              ref={animationTwo}
            >
              {newTaskList?.map((task) => (
                <TaskItemAddSub
                  key={task.id}
                  theme={theme}
                  task={task}
                  newTaskList={newTaskList}
                  setNewTaskList={setNewTaskList}
                />
              ))}
            </div>
          ) : null}

          {/* Adding a Task */}
          <AddNewSingleTask
            theme={theme}
            fontStyle={fontStyle}
            setNewTaskList={setNewTaskList}
          />

          {/* Add custom setting */}
          <div
            className="flex flex-col gap-2 shadow rounded p-1 bg-white mmb-2 w-full"
            ref={animationNew}
          >
            <div
              className=" flex justify-between items-center cursor-pointer p-1 rounded bg-white"
              onClick={() => setIsEditSettings((prev) => !prev)}
            >
              <h1 className=" pl-1 text-sm font-medium text-gray-800">
                Customize settings
              </h1>
              <div
                className={` flex items-center justify-center p-1 bg-black/10 rounded`}
              >
                {isEditSettings ? (
                  <button className={`  `}>
                    <IoIosArrowUp />
                  </button>
                ) : (
                  <button className={` `}>
                    <IoMdSettings />
                  </button>
                )}
              </div>
            </div>
            {isEditSettings ? (
              <AddNewSettings
                theme={theme}
                setTheme={setTheme}
                fontStyle={fontStyle}
                setFontStyle={setFontStyle}
                prefix={prefix}
                setPrefix={setPrefix}
              />
            ) : null}
          </div>

          {/* Saving and closing */}
          <div className=" grid grid-cols-2 items-center px-4 py-2 rounded gap-4 w-full justify-center bg-white text-gray-50 cursor-pointer text-sm">
            <button
              onClick={() => setOpenAddTask(false)}
              className={` bg-gray-200 min-w-[120px] shadow text-gray-900 py-1   text-base rounded flex items-center justify-center gap-2 hover:bg-gray-300 `}
            >
              <p>Cancel</p>
            </button>
            <button
              onClick={handleSave}
              className={` ${theme} min-w-[120px] shadow text-gray-50 py-1 text-base rounded flex items-center justify-center gap-2  hover:bg-opacity-50 `}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTask;
