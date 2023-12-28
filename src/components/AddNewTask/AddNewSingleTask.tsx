import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { taskType } from "../../lib/zustand";

interface AddNewSingleTaskProps {
  theme: string;
  fontStyle: string;
  setNewTaskList: React.Dispatch<React.SetStateAction<taskType[]>>;
}

const AddNewSingleTask = ({ theme, setNewTaskList }: AddNewSingleTaskProps) => {
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
  };
  return (
    <div>
      {" "}
      <form
        className=" flex items-center gap-1 border p-2 bg-white rounded shadow "
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
    </div>
  );
};

export default AddNewSingleTask;
