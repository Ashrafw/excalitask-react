import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { taskType } from "../../lib/zustand";

interface AddNewSingleTaskProps {
  theme: string;
  fontStyle: string;
  setNewTaskList: React.Dispatch<React.SetStateAction<taskType[]>>;
  errorInput: boolean;
  setErrorInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewSingleTask = ({
  theme,
  setNewTaskList,
  errorInput,
  setErrorInput,
}: AddNewSingleTaskProps) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmitNewTask = (e: any) => {
    e.preventDefault();

    setNewTaskList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        title: taskTitle,
        isComplete: false,
        subTaskList: [],
        isSubtask: false,
      },
    ]);
    setTaskTitle("");
    setErrorInput(false);
  };
  return (
    <div className="border-t-2 p-2 ">
      <form
        className=" flex items-center gap-2   border-gray-300   "
        onSubmit={handleSubmitNewTask}
      >
        <input
          //   //   ref={searchInput}
          //   onFocus={() => setFocused(true)}
          //   onBlur={() => setFocused(false)}
          required
          type="text"
          placeholder="Add a new task"
          // className="shadow rounded-full p-1  px-4 w-full"
          className="border rounded p-1 px-4 w-full text-sm"
          autoFocus
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button
          className={` ${theme} w-[40px] text-gray-100 text-lg flex justify-center items-center rounded h-[29px]  `}
        >
          <FiPlus />
        </button>
      </form>
      {errorInput && (
        <p className=" px-2 pt-1 text-red-600 text-xs">You must input a task!</p>
      )}
    </div>
  );
};

export default AddNewSingleTask;
