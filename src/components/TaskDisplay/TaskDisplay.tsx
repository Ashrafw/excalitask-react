import React, { useEffect, useState } from "react";
import TaskWithSubItem from "./TaskWithSubItem";
import TaskItem from "./TaskItem";
import { MainTaskType, usePersistStore } from "../..//lib/zustand";
import { MdOutlineMoreVert } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdReturnLeft } from "react-icons/io";
import AddSingleTask from "../AddSingleTask/AddSingleTask";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FaPlus } from "react-icons/fa6";
import { CircularProgress } from "@mui/material";
type TaskDisplayType = {
  task: MainTaskType;
  editTaskId: string;
  setEditTaskId: React.Dispatch<React.SetStateAction<string>>;
  isThisTheEditedTask: boolean;
};

const TaskDisplay = ({
  task,
  editTaskId,
  setEditTaskId,
  isThisTheEditedTask,
}: TaskDisplayType) => {
  const { tasksMain, setTaskMain } = usePersistStore();

  const [isShown, setIsShown] = useState(false);
  const [addSingleTask, setAddSingleTask] = useState(false);
  const [dataAll, setDataAll] = useState<MainTaskType[]>(tasksMain);
  const [isFinishEdit, setIsFinishEdit] = useState(false);
  const [isSaveAllClick, setIsSaveAllClick] = useState(false);
  const [categoryEdit, setCategoryEdit] = useState(task.title);

  const [focusedSubtask, setFocusedSubtask] = useState(false);
  const onFocus = () => setFocusedSubtask(true);
  const onBlur = () => setFocusedSubtask(false);

  const [focused, setFocused] = useState(false);

  const handleCategoryChange = () => {
    const newTask = tasksMain.map((taskInner) => {
      if (taskInner.id === editTaskId) {
        // Update the tasklist for the specific object
        return { ...taskInner, title: categoryEdit };
      } else {
        return taskInner;
      }
    });
    setTaskMain(newTask);
  };
  const [animationParent] = useAutoAnimate();
  useEffect(() => {
    setTimeout(() => {
      const newTask = tasksMain.map((taskInner) => {
        if (taskInner.id === editTaskId) {
          // Update the tasklist for the specific object
          return { ...taskInner, title: categoryEdit };
        } else {
          return taskInner;
        }
      });
      setTaskMain(newTask);
    }, 600);
  }, [categoryEdit]);
  const handleFinishEdit = () => {
    if (categoryEdit !== task.title) handleCategoryChange();
    setIsSaveAllClick(true);
    setIsFinishEdit(false);
  };

  const handleDeleteAll = (id: string) => {
    const newTaskAfterDelete = tasksMain.filter((item) => item.id !== id);
    setTaskMain(newTaskAfterDelete);
  };
  const checkCompletionPercentage = () => {
    const theTasks = task.taskList;
    const totalTasks = theTasks.length;
    const numCompleteTaskWithNoSub = theTasks.filter(
      (item) => item.isComplete && !item.isSubtask
    ).length;

    const theSubtasks = theTasks.filter((item) => item.isSubtask);
    let a: number[] = [];
    for (let i = 0; i < theSubtasks.length; i++) {
      a = [
        ...a,

        theSubtasks[i].subTaskList.filter((item) => item.isComplete).length /
          theSubtasks[i].subTaskList.length,
      ];
    }
    console.log("a", a);
    // calculation
    const completion = a.reduce((acc, item) => item + acc, 0) + numCompleteTaskWithNoSub;
    return Math.round((completion / totalTasks) * 100);
  };

  if (task) {
    return (
      <div
        className={` relative shadow-xl rounded  bg-gray-50  min-w-[310px] ${task.fontStyle}`}
      >
        {isFinishEdit && isThisTheEditedTask ? (
          <div
            className={`rounded-tl rounded-tr border-slate-800 p-2 ${task.theme} text-gray-800 flex justify-between items-center gap-4`}
          >
            <input
              type="text"
              className=" w-full rounded p-1 px-2 font-semibold text-base"
              value={categoryEdit}
              onChange={(e) => setCategoryEdit(e.target.value)}
            />
            <button
              onClick={() => setIsFinishEdit(false)}
              className=" bg-white bg-opacity-20  text-slate-100 rounded p-1"
            >
              <IoMdReturnLeft />
            </button>
          </div>
        ) : (
          <div
            className={`rounded-tl rounded-tr border-slate-800 p-2 ${task.theme} text-gray-200 flex justify-between items-center gap-4`}
          >
            <div className=" grid  grid-flow-col items-center gap-1">
              <div className="relative w-[34px] h-[34px] bg-slate-300 bg-opacity-25 rounded-full">
                <CircularProgress
                  variant="determinate"
                  thickness={6}
                  value={checkCompletionPercentage()}
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "rgba(255, 255, 255, 0.)",
                    borderRadius: "10px",
                  }}
                />
                <div
                  className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28px] h-[28px] ${task.theme} rounded-full text-[10px] font-extrabold flex justify-center items-center`}
                >
                  {checkCompletionPercentage()}
                  <span className=" font-semibold">%</span>
                </div>
              </div>
              <h1 className="w-full font-semibold text-base  p-1 px-1 ">{task.title}</h1>
            </div>
            <button
              onClick={() => {
                setEditTaskId(task.id);
                setIsFinishEdit(true);
              }}
              className=" bg-white bg-opacity-20 text-2xl rounded p-1 "
            >
              <MdOutlineMoreVert />
            </button>
          </div>
        )}

        <div
          className="flex flex-col text-[16px]  py-2 px-1"
          // ref={animationParent}
        >
          {task.taskList?.map((item, i) => {
            return item?.isSubtask ? (
              <TaskWithSubItem
                key={item.id}
                task={item}
                mainTaskId={task.id}
                isEditMode={editTaskId === task.id}
                editTaskId={editTaskId}
                setEditTaskId={setEditTaskId}
                isFinishEdit={isFinishEdit}
                setIsFinishEdit={setIsFinishEdit}
                isThisTheEditedTask={isThisTheEditedTask}
                isLastItem={task.taskList.length === i + 1}
                theme={task.theme}
                index={i}
                prefix={task.prefix}
                withSubTask={item.isSubtask}
                focusedSubtask={focusedSubtask}
                setFocusedSubtask={setFocusedSubtask}
                onFocusSubtask={onFocus}
                onBlurSubtask={onBlur}
              />
            ) : (
              <TaskItem
                key={item.id}
                task={item}
                mainTaskId={task.id}
                isEditMode={editTaskId === task.id}
                editTaskId={editTaskId}
                setEditTaskId={setEditTaskId}
                isFinishEdit={isFinishEdit}
                setIsFinishEdit={setIsFinishEdit}
                isThisTheEditedTask={isThisTheEditedTask}
                isLastItem={task.taskList.length === i + 1}
                index={i}
                prefix={task.prefix}
                theme={task.theme}
                focusedSubtask={focusedSubtask}
                setFocusedSubtask={setFocusedSubtask}
                onFocusSubtask={onFocus}
                onBlurSubtask={onBlur}
              />
            );
          })}
        </div>

        {isFinishEdit && isThisTheEditedTask ? (
          <div
            className={` ${task.theme} bg-opacity-70 p-2  rounded-lg flex flex-col gap-2`}
          >
            <AddSingleTask
              taskId={task.id}
              setAddSingleTask={setAddSingleTask}
              theme={task.theme}
              task={task}
              focused={focused}
              setFocused={setFocused}
            />
            <div className=" grid grid-cols-2 items-center px-4 py-2 rounded gap-4 w-full justify-center bg-white text-gray-50 cursor-pointer text-sm">
              <button
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => {
                  handleDeleteAll(task.id);
                  setIsFinishEdit(true);
                }}
                className={` bg-gray-200 min-w-[120px] shadow text-gray-900 py-1   text-sm rounded flex items-center justify-center gap-2 hover:bg-gray-300 `}
              >
                <FaRegTrashAlt />
                <p>Delete all</p>
              </button>
              <button
                onClick={handleFinishEdit}
                className={` ${task.theme} min-w-[120px] shadow text-gray-50 py-1 text-sm rounded flex items-center justify-center gap-2  hover:bg-opacity-50 `}
              >
                Save changes
              </button>
            </div>
            {/* <AddSingleTask taskId={task.id} setAddSingleTask={setAddSingleTask} /> */}
          </div>
        ) : (
          <>
            <div
              onClick={() => {
                setEditTaskId(task.id);
                setIsFinishEdit(true);
                // setAddSingleTask(true)}
                setFocused(true);
              }}
              className=" -mt-1 text-base flex gap-2 items-center text-gray-600 px-4 pt-[10px] pb-[12px] hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer item-center justify-center w-full"
            >
              <FaPlus />
            </div>
          </>
        )}
      </div>
    );
  }
};

export default TaskDisplay;
