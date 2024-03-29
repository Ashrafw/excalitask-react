import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { SubTaskType, taskType } from "../../lib/zustand";
import { v4 as uuidv4 } from "uuid";
import AddNewSubTask from "./AddNewSubTask";
import { PiTextIndentBold } from "react-icons/pi";
import Tooltip from "@mui/material/Tooltip";

const TaskItemAddSub = ({
  theme,
  task,
  setNewTaskList,
  last,
}: {
  theme: string;
  task: taskType;
  newTaskList: taskType[];
  setNewTaskList: React.Dispatch<React.SetStateAction<taskType[]>>;
  last: boolean;
}) => {
  const [titleEdit, setTitleEdit] = useState(task.title);
  const [subTaskList, setSubTaskList] = useState(task.subTaskList);
  const [openSubtask, setOpenSubtask] = useState(false);
  const [subTaskTitle, setSubTaskTitle] = useState("");
  const [focused, setFocused] = useState(false);
  const onFocusSubtask = () => setFocused(true);
  const onBlurSubtask = () => setFocused(false);

  const handleSubmitSubTask = (e: any) => {
    e.preventDefault();
    setSubTaskList((prev: SubTaskType[]): any => {
      return [
        ...prev,
        {
          id: uuidv4(),
          title: subTaskTitle,
          isComplete: false,
          isSubtask: true,
        },
      ];
    });

    setSubTaskTitle("");
    onFocusSubtask();
  };

  const handleDeleteTask = (id: string) => {
    setNewTaskList((prev) => {
      return prev.filter((val) => val.id !== id);
    });
  };

  useEffect(() => {
    if (subTaskList.length > 0) {
      setNewTaskList((prev) => {
        return prev.map((val) =>
          val.id === task.id ? { ...val, isSubtask: true, subTaskList: subTaskList } : val
        );
      });
    }
  }, [subTaskList]);
  return (
    <div className={`flex gap-2 items-center py-[5px] px-2 ${last ? "" : "border-b"}`}>
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => handleDeleteTask(task.id)}
            className="flex items-center justify-center w-[30px] h-[30px] max-sm:h-[25px] text-sm  text-gray-400 p-2  rounded bg-gray-200 hover:bg-gray-300  "
          >
            <FaRegTrashAlt />
          </button>
          <input
            type="text"
            className=" w-[100%] rounded px-2 py-[2px] border text-base "
            value={titleEdit}
            onChange={(e) => setTitleEdit(e.target.value)}
          />
          {subTaskList.length > 0 ? null : (
            <Tooltip title="Add subtasks" arrow placement="right">
              <button
                onClick={() => {
                  onFocusSubtask();
                  setOpenSubtask(true);
                  //   setDropDown((prev) => !prev);
                }}
                className="flex items-center justify-center w-[30px] h-[30px] max-sm:h-[25px] text-[40px]  text-gray-400 p-[7px] rounded bg-gray-200 hover:bg-gray-300  "
              >
                <PiTextIndentBold />
              </button>
            </Tooltip>
          )}
        </div>
        <div className="pl-[38px] flex flex-col gap-1 ">
          {subTaskList.map((subTask, i) => (
            <AddNewSubTask
              key={uuidv4()}
              subTask={subTask}
              subTaskList={subTaskList}
              setSubTaskList={setSubTaskList}
              index={i}
            />
          ))}
          {openSubtask && (
            <form onSubmit={handleSubmitSubTask}>
              <div className=" flex items-center gap-1 mb-2 mt-1">
                <input
                  required
                  type="text"
                  placeholder="Add a subtask"
                  className=" border-2 py-1 px-4 w-full text-sm rounded text-base"
                  value={subTaskTitle}
                  // onFocus={onFocusSubtask}
                  onBlur={onBlurSubtask}
                  autoFocus={focused}
                  onChange={(e) => setSubTaskTitle(e.target.value)}
                />
                <button
                  className={`  w-[40px] ${theme} max-sm:h-[25px] text-gray-100 text-sm p-1 rounded h-[32px]  flex items-center justify-center `}
                >
                  <FaPlus />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItemAddSub;
