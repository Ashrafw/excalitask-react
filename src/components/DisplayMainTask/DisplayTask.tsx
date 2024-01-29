import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

import { MainTaskType, usePersistStore } from "../../lib/zustand";
import { CircularProgress } from "@mui/material";
import { MdOutlineMoreVert } from "react-icons/md";
import { checkCompletionPercentage } from "../../helper/helper";
import { IoMdReturnLeft } from "react-icons/io";
import DisplayTaskItem from "./DisplayTaskItem";
import DisplayAddNewTask from "./DisplayAddNewTask";
import { AddSettingSingle } from "../AddSingleTask/AddSettingSingle";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

type DisplayTaskTypes = {
  actualMainTask: MainTaskType;
  editModeId: string;
  setEditModeId: React.Dispatch<React.SetStateAction<string>>;
};
const DisplayTask = ({ actualMainTask, editModeId, setEditModeId }: DisplayTaskTypes) => {
  const [categoryEdit, setCategoryEdit] = useState(actualMainTask.title);
  const [isEditSettings, setIsEditSettings] = useState(false);
  const [animationSetting] = useAutoAnimate();
  const { tasksMain, setTaskMain } = usePersistStore();

  useEffect(() => {
    if (actualMainTask.title !== categoryEdit) {
      setTimeout(() => {
        const newTask = tasksMain.map((taskInner) => {
          if (taskInner.id === actualMainTask.id) {
            // Update the tasklist for the specific object
            return { ...taskInner, title: categoryEdit };
          } else {
            return taskInner;
          }
        });
        setTaskMain(newTask);
        console.log("newTask", newTask);
      }, 600);
    }
  }, [categoryEdit]);

  const handleDeleteAll = (id: string) => {
    const newTaskAfterDelete = tasksMain.filter((item) => item.id !== id);
    setTaskMain(newTaskAfterDelete);
  };
  return (
    <div
      className={` relative shadow-xl rounded-lg overflow-hidden  max-w-[400px] min-w-[310px] w-[95%] ${actualMainTask.fontStyle} `}
    >
      <div className={`min-h-12  ${actualMainTask.theme}`}>
        {actualMainTask.id === editModeId ? (
          <div
            className={`rounded-tl rounded-tr border-slate-800 p-2 ${actualMainTask.theme} text-gray-800 flex justify-between items-center gap-4`}
          >
            <input
              type="text"
              className=" w-full rounded p-1 px-2 font-semibold text-base"
              value={categoryEdit}
              onChange={(e) => setCategoryEdit(e.target.value)}
            />
            <button
              onClick={() => setEditModeId("")}
              className=" bg-white bg-opacity-20  text-slate-100 rounded p-1"
            >
              <IoMdReturnLeft />
            </button>
          </div>
        ) : (
          <div
            className={`rounded-tl rounded-tr  p-2 ${actualMainTask.theme} text-gray-200 flex justify-between items-center gap-4`}
          >
            <div className=" grid  grid-flow-col items-center gap-1">
              <div className="relative w-[34px] h-[34px] bg-slate-50 bg-opacity-20 rounded-full">
                <CircularProgress
                  variant="determinate"
                  thickness={6}
                  value={checkCompletionPercentage(actualMainTask)}
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "rgba(255, 255, 255, 0.65)",
                    borderRadius: "10px",
                    margin: 0,
                    padding: 0,
                  }}
                />
                <div
                  className={` absolute top-[3px] left-[3px] w-[28px] h-[28px] ${actualMainTask.theme} rounded-full text-[10px] font-extrabold flex justify-center items-center`}
                >
                  {checkCompletionPercentage(actualMainTask)}
                  <span className=" font-semibold">%</span>
                </div>
              </div>
              <h1 className="w-full font-semibold text-base  p-1 px-1 ">
                {actualMainTask.title}
              </h1>
            </div>
            <button
              onClick={() => {
                setEditModeId(actualMainTask.id);
              }}
              className=" bg-white bg-opacity-20 text-2xl rounded p-1 "
            >
              <MdOutlineMoreVert />
            </button>
          </div>
        )}
      </div>

      <div
        className="bg-gray-50   "
        // ref={animationParent}
      >
        {" "}
        <div
          className={` p-2  ${
            actualMainTask.id === editModeId ? actualMainTask.theme : null
          }`}
          // ref={animationParent}
        >
          <div className=" bg-gray-50 flex flex-col px-2 rounded">
            {actualMainTask.taskList?.map((task, i) => (
              <DisplayTaskItem
                key={task.id}
                index={i}
                task={task}
                actualMainTask={actualMainTask}
                editModeId={editModeId}
                isAfter={
                  actualMainTask.taskList[i + 1] &&
                  actualMainTask.taskList[i + 1].isSubtask
                }
                isBorder={actualMainTask.taskList.length === i + 1}
              />
            ))}
          </div>
        </div>
        {actualMainTask.id === editModeId ? (
          <div className={` rounded-lg flex flex-col `}>
            <div
              className={` ${actualMainTask.theme} bg-opacity-60 p-2 flex flex-col gap-2`}
            >
              <DisplayAddNewTask
                theme={actualMainTask.theme}
                taskId={actualMainTask.id}

                // focused={focused}
                // setFocused={setFocused}
              />
            </div>
            <div
              className={` ${actualMainTask.theme} bg-opacity-10 p-2 flex flex-col gap-2`}
            >
              <div
                className={`flex flex-col gap-2 shadow rounded p-1 bg-white mmb-2 w-full   `}
                ref={animationSetting}
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
                  <AddSettingSingle
                    theme={actualMainTask.theme}
                    fontStyle={actualMainTask.fontStyle}
                    prefix={actualMainTask.prefix}
                    taskId={actualMainTask.id}
                  />
                ) : null}
              </div>

              <div className=" grid grid-cols-2 items-center px-4 py-2 rounded gap-4 w-full justify-center bg-white text-gray-50 cursor-pointer text-sm">
                <button
                  //   onMouseEnter={() => setIsShown(true)}
                  //   onMouseLeave={() => setIsShown(false)}
                  onClick={() => {
                    handleDeleteAll(actualMainTask.id);
                    setEditModeId("");
                  }}
                  className={` bg-gray-200 w-full h-full shadow text-gray-900 py-2 text-sm rounded flex items-center justify-center gap-2 hover:bg-opacity-70 `}
                >
                  <FaRegTrashAlt />
                  <p>Delete All</p>
                </button>
                <button
                  onClick={() => setEditModeId("")}
                  className={` ${actualMainTask.theme} w-full h-full shadow text-gray-50 py-2 text-sm rounded flex items-center justify-center gap-2  hover:bg-opacity-90 `}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DisplayTask;
