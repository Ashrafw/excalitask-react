import { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import { usePersistStore } from "../lib/zustand";
import { FaPlus } from "react-icons/fa6";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IoInvertMode } from "react-icons/io5";
import MainMenu from "./Menu/MainMenu";

const Navbar = ({
  openAddTask,
  setOpenAddTask,
}: {
  openAddTask: boolean;
  setOpenAddTask: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const { tasksMain } = usePersistStore();
  const [animationAlert] = useAutoAnimate();

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3500);
    }
  }, [showAlert]);

  return (
    <div>
      <div
        className={`flex w-[95%] items-center justify-between my-4   ${
          openAddTask ? "blur" : ""
        }`}
        ref={animationAlert}
      >
        {/* <div className={`  `}> */}
        <div className="w-[15%]"></div>
        <button
          onClick={() => {
            if (tasksMain.length > 2) {
              setShowAlert(true);
            } else {
              setOpenAddTask((prev) => !prev);
            }
          }}
          className={`
          relative w-[45px] h-[45px] flex justify-center shadow items-center font- rounded bg-white  hover:bg-slate-100 text-2xl`}
        >
          <FaPlus />
          {showAlert && (
            <div className=" z-50 absolute top-full --translate-x-[10px] w-[300px] shadow-md border-4 overflow-hidden bg-white border-slate-600 text-base rounded translate-y-[8px]">
              <div className=" rounded-lg  bg-white p-2">
                You can only have 3 main tasks. More features coming soon.
              </div>
            </div>
          )}
        </button>
        {/* <button className=" w-[50px] h-[50px] text-white flex justify-center items-center rounded-lg hover:bg-slate-200">
        </button> */}

        <div className="w-[15%] flex justify-end items-center">
          <MainMenu />
        </div>
        {/* </div> */}
      </div>

      {openAddTask && <AddTaskForm setOpenAddTask={setOpenAddTask} />}
    </div>
  );
};

export default Navbar;
