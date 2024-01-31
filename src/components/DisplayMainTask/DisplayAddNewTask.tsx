import { useState } from "react";
import { usePersistStore } from "../../lib/zustand";
import { v4 as uuidv4 } from "uuid";
import { FiPlus } from "react-icons/fi";

type DisplayAddNewTaskTypes = {
  theme: string;
  taskId: string;
};

const DisplayAddNewTask = ({ theme, taskId }: DisplayAddNewTaskTypes) => {
  const [taskTitle, setTaskTitle] = useState("");
  const { tasksMain, setTaskMain } = usePersistStore();

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
    <div className="flex flex-col gap-2  rounded">
      <form
        className=" flex items-center gap-1 border p-2 bg-white rounded shadow "
        onSubmit={handleSubmitNewTask}
      >
        <input
          //   ref={searchInput}
          //   onFocus={() => setFocused(true)}
          //   onBlur={() => setFocused(false)}
          required
          type="text"
          placeholder="Add a new task"
          // className="shadow rounded-full p-1  px-4 w-full"
          className="border rounded p-1 px-4 w-full text-sm"
          // autoFocus={focused}
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
  );
};

export default DisplayAddNewTask;
