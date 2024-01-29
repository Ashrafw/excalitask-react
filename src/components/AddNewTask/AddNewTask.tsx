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
  const [categoryEdit, setCategoryEdit] = useState("");
  const [theme, setTheme] = useState("bg-[#333333]");
  const [fontStyle, setFontStyle] = useState("font-poppins");
  const [isEditSettings, setIsEditSettings] = useState(false);
  const [errorInput, setErrorInput] = useState(false);
  const [prefix, setPrefix] = useState("none");
  const [newTaskList, setNewTaskList] = useState<taskType[] | any[]>([]);
  const [animationNew] = useAutoAnimate();
  const [animationTwo] = useAutoAnimate();

  const handleSave = () => {
    if (newTaskList.length === 0) {
      setErrorInput(true);
    } else {
      setErrorInput(false);

      const newMainTask: MainTaskType = {
        id: uuidv4(),
        title: categoryEdit === "" ? getDateFormatStart() : categoryEdit,
        isComplete: false,
        taskList: newTaskList,
        isSubtask: false,
        theme: theme,
        fontStyle: fontStyle,
        prefix: prefix,
      };
      setTaskMain([...tasksMain, newMainTask]);
      setOpenAddTask(false);
    }
  };

  return (
    <div
      className={`absolute w-full bg-black/30 h-screen z-40 top-0 left-0 flex justify-center items-start pt-16 max-sm:pt-6 blur-none`}
    >
      <div
        className={` ${zoomNum}  relative shadow-xl rounded-lg bg-[#fbfbfb] overflow-hidden max-w-[440px] min-w-[300px] p-2 w-[95%] ${fontStyle}`}
      >
        <div className={`p-2 flex flex-col `}>
          <div className={` bg-white rounded shadow`}>
            <div className={`p-2  rounded-t ${theme} `}>
              {/* Task category */}
              <input
                type="text"
                className="w-full rounded border p-1 px-2 font-semibold placeholder:font-normal text-base "
                value={categoryEdit}
                placeholder={`${getDateFormatStart()} `}
                onChange={(e) => setCategoryEdit(e.target.value)}
              />
            </div>

            {/* Display the entered Task */}
            {newTaskList.length > 0 ? (
              <div
                className=" bg-gray-50 flex flex-col  text-[16px] py- px-  "
                ref={animationTwo}
              >
                {newTaskList?.map((task, i) => (
                  <TaskItemAddSub
                    key={task.id}
                    theme={theme}
                    task={task}
                    newTaskList={newTaskList}
                    setNewTaskList={setNewTaskList}
                    last={newTaskList.length === i + 1}
                  />
                ))}
              </div>
            ) : null}

            {/* Adding a Task */}
            <AddNewSingleTask
              theme={theme}
              fontStyle={fontStyle}
              setNewTaskList={setNewTaskList}
              errorInput={errorInput}
              setErrorInput={setErrorInput}
            />
          </div>
        </div>

        <div className={`p-2 flex flex-col gap-2 `}>
          {/* Add custom setting */}
          <div
            className="flex flex-col gap-2 shadow rounded p-1 bg-white w-full"
            ref={animationNew}
          >
            <div
              className=" flex justify-between items-center cursor-pointer p-1 rounded "
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
          <div className=" grid grid-cols-2 items-center mt-2 rounded gap-4 w-full justify-center  text-gray-50 cursor-pointer text-sm">
            <button
              onClick={() => setOpenAddTask(false)}
              className={` bg-gray-200 min-w-[120px] shadow text-gray-900 py-1  text-base rounded flex items-center justify-center gap-2 hover:bg-gray-300 `}
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
