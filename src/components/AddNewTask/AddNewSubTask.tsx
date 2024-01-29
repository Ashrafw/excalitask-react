import { FaRegTrashAlt } from "react-icons/fa";
import { SubTaskType } from "../../lib/zustand";
import { useEffect, useState } from "react";

const AddNewSubTask = ({
  subTask,
  subTaskList,
  setSubTaskList,
  index,
}: {
  subTask: SubTaskType;
  subTaskList: SubTaskType[];
  setSubTaskList: React.Dispatch<React.SetStateAction<SubTaskType[]>>;
  index: number;
}) => {
  const [titleSubEdit, setTitleSubEdit] = useState(subTask.title);
  useEffect(() => {
    if (titleSubEdit !== subTask.title) {
      setTimeout(() => {
        setSubTaskList((prev) => {
          return prev.map((val) =>
            val.id === subTask.id ? { ...val, title: titleSubEdit } : val
          );
        });
      }, 500);
    }
  }, [titleSubEdit]);
  const handleDeleteSubTask = (id: string) => {
    setSubTaskList((prev) => prev.filter((val) => val.id !== id));
  };
  // console.log("subTaskList", subTaskList);
  return (
    <div className={`flex items-center justify-start gap-2 ${index === 0 ? "mt-2" : ""}`}>
      <button
        onClick={() => handleDeleteSubTask(subTask.id)}
        className=" flex items-center justify-center w-[30px] h-[26px] text-sm  text-gray-400 p-1 rounded bg-gray-200 hover:bg-gray-300 "
      >
        <FaRegTrashAlt />
      </button>
      <input
        type="text"
        className=" w-full rounded px-2 py-[2px] border text-sm  "
        value={titleSubEdit}
        onChange={(e) => setTitleSubEdit(e.target.value)}
      />
      {/* </> */}
    </div>
  );
};

export default AddNewSubTask;
