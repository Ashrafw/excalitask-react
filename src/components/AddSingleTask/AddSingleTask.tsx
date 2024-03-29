import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MainTaskType, taskType, usePersistStore } from "../../lib/zustand";
import AddSingleSubTask from "./AddSingleSubTask";
import { FiPlus } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { AddSettingSingle } from "./AddSettingSingle";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IoIosArrowUp } from "react-icons/io";

const AddSingleTask = ({
  taskId,
  theme,
  task,
  focused,
  setFocused,
}: {
  taskId: string;
  theme: string;
  task: MainTaskType;
  focused: boolean;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [taskList, setTaskList] = useState<taskType[]>([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [editTheme] = useState(task.theme);
  const [editFontStyle] = useState(task.fontStyle);
  const [editPrefix] = useState(task.prefix);
  const [isEditSettings, setIsEditSettings] = useState(false);
  const { tasksMain, setTaskMain } = usePersistStore();
  const [animationNew] = useAutoAnimate();

  useEffect(() => {
    if (task.fontStyle !== editFontStyle) {
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
    if (task.theme !== editTheme) {
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
    if (task.prefix !== editPrefix) {
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

  const handleSubmitNewTask = (e: any) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      isComplete: false,
      subTaskList: [],
      isSubtask: false,
      isDropDown: true,
    };

    const newTaskList = tasksMain.map((item) => {
      if (item.id === taskId) {
        return { ...item, taskList: [...item.taskList, newTask] };
      } else {
        return item;
      }
    });
    setTaskMain(newTaskList);
    setTaskTitle("");
  };
  return (
    <div className={`  rounded-lg flex flex-col gap-2`}>
      <div className="flex flex-col gap-2  rounded">
        {taskList.length > 0 && (
          <div className="flex flex-col gap-2">
            {taskList.map((item, index) => (
              <AddSingleSubTask
                key={item.id}
                actualTask={item}
                subTaskList={item.subTaskList}
                index={index + 1}
                setTaskList={setTaskList}
                theme={theme}
              />
            ))}
          </div>
        )}
        <form
          className=" flex items-center gap-1 border p-2 bg-white rounded shadow "
          onSubmit={handleSubmitNewTask}
        >
          <input
            //   ref={searchInput}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            required
            type="text"
            placeholder="Add a new task"
            // className="shadow rounded-full p-1  px-4 w-full"
            className="border rounded p-1 px-4 w-full text-sm"
            autoFocus={focused}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <button
            className={` ${theme} w-[40px] text-gray-100 text-lg flex justify-center items-center rounded h-[29px]  `}
          >
            <FiPlus />
          </button>
        </form>
      </div>
      <div
        className="flex flex-col gap-2 shadow rounded p-1 bg-white mmb-2 w-full"
        ref={animationNew}
      >
        <div
          className=" flex justify-between items-center cursor-pointer p-1 rounded bg-white"
          onClick={() => setIsEditSettings((prev) => !prev)}
        >
          <h1 className=" pl-1 text-sm font-medium text-gray-800">Customize settings</h1>
          <div className={` flex items-center justify-center p-1 bg-black/10 rounded`}>
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
          <AddSettingSingle
            theme={task.theme}
            fontStyle={task.fontStyle}
            prefix={task.prefix}
            taskId={task.id}
          />
        ) : null}
      </div>

      {/* <div className=" grid grid-cols-2 gap-2 p-2 bg-slate-50 rounded"> */}
      {/* <button
          // onClick={() => setNumArr((prev) => [...prev, mainTaskTemplate])}
          className=" w-full bg-gray-200 rounded-md p-1 flex justify-center items-center gap-2"
          onClick={() => setAddSingleTask(false)}
        >
          <div className="flex justify-center items-center  px-4 rounded">
            <p>cancel</p>
          </div>
        </button>
        <form onSubmit={handleSubmitAll}>
          <button
            // onClick={() => setNumArr((prev) => [...prev, mainTaskTemplate])}
            className={` w-full ${theme} text-white rounded-md p-1  flex justify-center items-center gap-2`}
          >
            <div className="flex justify-center items-center  px-4 rounded">
              <p>Save</p>
            </div>
          </button>
        </form> */}
      {/* </div> */}
    </div>
  );
};

export default AddSingleTask;
