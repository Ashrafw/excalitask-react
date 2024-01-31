import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MainTaskType, taskType, usePersistStore } from "../../lib/zustand";
import { accentVariants, letters } from "../../helper/helper";
import { v4 as uuidv4 } from "uuid";
import DisplaySubTaskItem from "./DisplaySubTaskItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FaIndent } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
type DisplayTaskItem = {
  index: number;
  task: taskType;
  actualMainTask: MainTaskType;
  editModeId: string;
  isAfter: boolean;
  isBorder: boolean;
  theme: string;
};
const DisplayTaskItem = ({
  index,
  task,
  actualMainTask,
  editModeId,
  isAfter,
}: // theme,
// isBorder,
DisplayTaskItem) => {
  const [isDropDown, setIsDropDown] = useState(task.isDropDown ? task.isDropDown : false);
  const [titleEdit, setTitleEdit] = useState(task.title);
  const [subTaskTitle, setSubTaskTitle] = useState("");
  const [openSubtask, setOpenSubtask] = useState(false);
  const { tasksMain, setTaskMain } = usePersistStore();
  const [focusedSubtask, setFocusedSubtask] = useState(false);
  const onFocus = () => setFocusedSubtask(true);
  const onBlur = () => setFocusedSubtask(false);
  const [animationChild] = useAutoAnimate();
  useEffect(() => {
    if (editModeId === "") {
      setOpenSubtask(false);
    }
  }, [editModeId]);

  //   changing an existing task.title
  useEffect(() => {
    if (task.title !== titleEdit) {
      setTimeout(() => {
        const newTask = tasksMain.map((taskInner) => {
          if (taskInner.id === editModeId) {
            // Update the tasklist for the specific object
            const taskListInner = taskInner.taskList.map((item) => {
              if (item.id === task.id) {
                return { ...item, title: titleEdit };
              } else {
                return item;
              }
            });
            return { ...taskInner, taskList: taskListInner };
          } else {
            return taskInner;
          }
        });
        setTaskMain(newTask);
      }, 600);
    }
  }, [titleEdit]);
  const checkPrefix = (index: number) => {
    if (letters[index]) {
      return `${letters[index]}. `;
    } else {
      return "";
    }
  };
  const handleSubmitSubTask = (e: any) => {
    e.preventDefault();
    const newSubTask = {
      id: uuidv4(),
      title: subTaskTitle,
      isComplete: false,
      isSubtask: true,
    };
    const theNewTask: taskType = {
      ...task,
      isSubtask: true,
      subTaskList: [...task.subTaskList, newSubTask],
    };

    const newTask = tasksMain.map((innerMain) => {
      if (innerMain.id === editModeId) {
        const theTaskList = innerMain.taskList.map((eachTask) => {
          if (eachTask.id === task.id) {
            return theNewTask;
          } else {
            return eachTask;
          }
        });
        return { ...innerMain, taskList: theTaskList };
      } else {
        return innerMain;
      }
    });
    setTaskMain(newTask);
    setSubTaskTitle("");
  };

  useEffect(() => {
    if (task.isSubtask && (task.isDropDown !== isDropDown || !task.isDropDown)) {
      const newTask = tasksMain.map((taskInner) => {
        if (taskInner.id === actualMainTask.id) {
          // Update the tasklist for the specific object
          const taskListInner = taskInner.taskList.map((item) => {
            if (item.id === task.id) {
              return { ...item, isDropDown: isDropDown };
            } else {
              return item;
            }
          });
          return { ...taskInner, taskList: taskListInner };
        } else {
          return taskInner;
        }
      });
      console.log("newTask after", newTask);

      setTaskMain(newTask);
    }
  }, [isDropDown]);

  const updateTaskCompletion = (targetComplete: boolean) => {
    const newTask = tasksMain.map((taskInner) => {
      if (taskInner.id === actualMainTask.id) {
        // Update the tasklist for the specific object
        const taskListInner = taskInner.taskList.map((item) => {
          if (item.id === task.id) {
            return { ...item, isComplete: targetComplete };
          } else {
            return item;
          }
        });
        return { ...taskInner, taskList: taskListInner };
      } else {
        return taskInner;
      }
    });
    setTaskMain(newTask);
  };
  const handleDeleteTask = (id: string) => {
    const newTask = tasksMain.map((taskInner) => {
      if (taskInner.id === editModeId) {
        // Update the tasklist for the specific object
        const taskListInner = taskInner.taskList.filter((item) => item.id !== id);
        return { ...taskInner, taskList: taskListInner };
      } else {
        return taskInner;
      }
    });
    setTaskMain(newTask);
  };

  const handleIsSubtaskComplete = () => {
    const total = task.subTaskList.length;
    const complete = task.subTaskList.filter((item) => item.isComplete).length;
    if (total === complete) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div
      className={` ${task.isSubtask ? " border rounded-md mt-[1px] mb-1" : " "} ${
        isAfter ? " " : "border-b "
      } `}
    >
      <div
        className={`px-1 py-[1px] ${task.isSubtask && isDropDown ? " border-b" : " "}  ${
          task.isSubtask
            ? (actualMainTask.theme ? actualMainTask.theme : " bg-slate-600 ") +
              " bg-opacity-[6%]"
            : " "
        }`}
        onClick={() => {
          actualMainTask.id === editModeId ? null : setIsDropDown((prev) => !prev);
        }}
      >
        {actualMainTask.id === editModeId ? (
          <div className="flex gap-2 items-center h-[34px]">
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="h-full w-8 flex items-center justify-center"
            >
              <FaRegTrashAlt />
            </button>
            <div
              className={`w-full h-full py-[4px] flex ${
                task.isSubtask ? " -ml-[3px]" : " "
              }`}
            >
              <input
                type="text"
                className=" w-[100%] flex items-center rounded px-2 pl-[5px] border text-base"
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)}
              />
            </div>

            {task.subTaskList.length > 0 ? (
              <div
                className={` h-full  w-8 flex items-center justify-center cursor-pointer ${
                  actualMainTask.id === editModeId ? "" : ""
                }`}
                onClick={() =>
                  actualMainTask.id === editModeId ? setIsDropDown((prev) => !prev) : null
                }
              >
                {isDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            ) : (
              <Tooltip title="Add subtasks" arrow>
                <button
                  onClick={() => {
                    onFocus();
                    setOpenSubtask(true);
                    setIsDropDown(true);
                  }}
                  className="h-full w-8 flex items-center justify-center cursor-pointer "
                >
                  <FaIndent />
                </button>
              </Tooltip>
            )}
          </div>
        ) : (
          <div
            onClick={() => {
              !task.isSubtask ? updateTaskCompletion(!task.isComplete) : null;
            }}
            className={` flex gap-2 items-center min-h-9 hover:bg-slate-200/5  cursor-pointer `}
          >
            <div className="h-full w-8 flex items-center justify-center cursor-pointer">
              <input
                type="checkbox"
                className={` w-[14px] h-[14px] ${
                  actualMainTask.theme
                    ? accentVariants[actualMainTask.theme]
                    : " accent-gray-300 "
                } ${task.isSubtask ? " opacity-0 " : ""}  ${
                  task.isComplete ? " opacity-25 " : ""
                }`}
                disabled={task.isSubtask}
                checked={task.isComplete}
                onChange={(e: any) => updateTaskCompletion(e.target.checked)}
              />
            </div>
            <label
              className={`w-full  text-gray-900 pl-[3.5px] cursor-pointer  ${
                task.isComplete && !task.isSubtask ? "   text-gray-900/25" : " "
              }  ${
                handleIsSubtaskComplete() && task.isSubtask
                  ? "text-gray-900/25"
                  : "text-gray-900"
              }  `}
            >
              {`${
                actualMainTask.prefix === "numbers"
                  ? `${index + 1}. `
                  : actualMainTask.prefix === "letters"
                  ? checkPrefix(index)
                  : ""
              }`}
              {task.title}
            </label>
            {task.isSubtask ? (
              <div
                className={` flex justify-center items-center  rounded  w-8  ${
                  actualMainTask.id === editModeId ? "" : ""
                }  cursor-pointer `}
                onClick={() =>
                  actualMainTask.id === editModeId ? setIsDropDown((prev) => !prev) : null
                }
              >
                {isDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            ) : null}
          </div>
        )}
      </div>
      <div ref={animationChild}>
        {isDropDown ? (
          <div className={`pl-8 `}>
            {task.isSubtask ? (
              <>
                {task.subTaskList.map((subTask, i) => (
                  <DisplaySubTaskItem
                    key={subTask.id}
                    subTask={subTask}
                    isEdit={actualMainTask.id === editModeId}
                    isLastSubItem={i + 1 === task.subTaskList.length}
                    editModeId={editModeId}
                    actualTask={task}
                    actualMainTask={actualMainTask}
                  />
                ))}
              </>
            ) : null}

            {(openSubtask && actualMainTask.id === editModeId) ||
            (task.subTaskList.length > 0 && actualMainTask.id === editModeId) ? (
              <form onSubmit={handleSubmitSubTask}>
                <div
                  className={`flex gap-2 items-center h-[38px] px-2  hover:bg-slate-400 hover:bg-opacity-10 border-l ${
                    task.isSubtask ? " " : ""
                  } `}
                >
                  <input
                    required
                    type="text"
                    placeholder="Add a subtask"
                    className=" border py-[2px] px-2 w-full text-base  rounded bg-white"
                    value={subTaskTitle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    autoFocus={focusedSubtask}
                    onChange={(e) => setSubTaskTitle(e.target.value)}
                  />
                  <button
                    className={`w-[28px] ${actualMainTask.theme} text-gray-100 flex justify-center items-center text-xs  rounded h-[24px]  `}
                  >
                    <FaPlus />
                  </button>
                </div>
              </form>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DisplayTaskItem;
