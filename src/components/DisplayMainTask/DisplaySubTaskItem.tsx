import { MainTaskType, SubTaskType, taskType, usePersistStore } from "../../lib/zustand";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { accentVariants } from "../../helper/helper";

type DisplaySubTaskItem = {
  subTask: SubTaskType;
  isEdit: boolean;
  isLastSubItem: boolean;
  editModeId: string;
  actualTask: taskType;
  actualMainTask: MainTaskType;
};

const DisplaySubTaskItem = ({
  subTask,
  isEdit,
  isLastSubItem,
  editModeId,
  actualTask,
  actualMainTask,
}: DisplaySubTaskItem) => {
  const [titleSubEdit, setTitleSubEdit] = useState(subTask.title);
  const { tasksMain, setTaskMain } = usePersistStore();
  useEffect(() => {
    if (subTask.title !== titleSubEdit) {
      setTimeout(() => {
        const newSubTaskList = actualTask.subTaskList.map((item) => {
          if (item.id === subTask.id) {
            // console.log("item", item);
            return { ...item, title: titleSubEdit };
          } else {
            return item;
          }
        });
        const completeTask = { ...actualTask, subTaskList: newSubTaskList };
        // console.log("completeTask====> ", completeTask);
        const newTask = tasksMain.map((taskInner) => {
          if (taskInner.id === editModeId) {
            const taskListNew = taskInner.taskList.map((item) => {
              if (item.id === actualTask.id) {
                return completeTask;
              } else {
                return item;
              }
            });
            return { ...taskInner, taskList: taskListNew };
          } else {
            return taskInner;
          }
        });
        // console.log("newTask======>", newTask);
        setTaskMain(newTask);
      }, 600);
    }
  }, [titleSubEdit]);

  const updateTaskCompletion = (targetComplete: boolean) => {
    // console.log("yes");
    const newSubTaskList = actualTask.subTaskList.map((item) => {
      if (item.id === subTask.id) {
        return { ...item, isComplete: targetComplete };
      } else {
        return item;
      }
    });
    const theNewTask: taskType = { ...actualTask, subTaskList: newSubTaskList };

    const newTask = tasksMain.map((taskInner) => {
      if (taskInner.id === actualMainTask.id) {
        const taskListNew = taskInner.taskList.map((item) => {
          if (item.id === actualTask.id) {
            return theNewTask;
          } else {
            return item;
          }
        });
        return { ...taskInner, taskList: taskListNew };
      } else {
        return taskInner;
      }
    });
    setTaskMain(newTask);
  };

  const handleDeleteSubTask = (id: string) => {
    const theSubTaskList = actualTask.subTaskList.filter((item) => item.id !== id);
    const isThereSubTasList = theSubTaskList.length > 0;
    const theNewTask: taskType = {
      ...actualTask,
      subTaskList: theSubTaskList,
      isSubtask: isThereSubTasList,
    };
    const newTask: MainTaskType[] = tasksMain.map((innerTask) => {
      if (innerTask.id === actualMainTask.id) {
        const newList = innerTask.taskList.map((val) => {
          if (val.id === actualTask.id) {
            return theNewTask;
          } else {
            return val;
          }
        });
        return { ...innerTask, taskList: newList };
      } else {
        return innerTask;
      }
    });
    setTaskMain(newTask);
  };
  return (
    <div
      className={`flex gap-2 items-center min-h-[32px] px-2 py-[4px] hover:bg-slate-400 hover:bg-opacity-10 border-l ${
        isLastSubItem ? "  " : " border-b"
      }`}
      onClick={() => (!isEdit ? updateTaskCompletion(!subTask.isComplete) : null)}
    >
      {isEdit ? (
        <>
          <button
            onClick={() => handleDeleteSubTask(subTask.id)}
            className=" h-full w-7 flex items-center justify-center"
          >
            <FaRegTrashAlt />
          </button>
          <input
            type="text"
            className=" w-full rounded px-1 py-[1px] border text-base -ml-[5.5px] "
            value={titleSubEdit}
            onChange={(e) => setTitleSubEdit(e.target.value)}
          />
        </>
      ) : (
        <>
          <div className="flex items-center justify-center h-full w-7 ">
            <input
              type="checkbox"
              className={` w-[12px] h-[12px] ${
                actualMainTask.theme
                  ? accentVariants[actualMainTask.theme]
                  : " accent-gray-200 "
              }  ${subTask.isComplete ? " opacity-25" : ""}`}
              // style={
              //   background: "red",
              // }}
              // className={actualMainTask.theme.replace("bg", "accent")}
              checked={subTask.isComplete}
              onChange={(e: any) => updateTaskCompletion(e.target.checked)}
            />
          </div>
          <label
            className={`w-full cursor-pointer text-medium text text-gray-00 py-[2px]  text-base  ${
              subTask.isComplete ? " decoration-slate-800 text-gray-900/25" : " "
            } `}
          >
            {subTask.title}
          </label>
        </>
      )}
    </div>
  );
};

export default DisplaySubTaskItem;
