import { useEffect, useState } from "react";
import { usePersistStore } from "../lib/zustand";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import MainMenu from "./Menu/MainMenu";
import AddNewTask from "./AddNewTask/AddNewTask";
import { FiPlus } from "react-icons/fi";
// import logo from "../assets/logo.png";
import { FaArrowUp } from "react-icons/fa";

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
        className={`flex w-[95%] items-center justify-between my-4 m-auto  ${
          openAddTask ? "blur" : ""
        }`}
        ref={animationAlert}
      >
        <div className="w-[15%] ">
          {/* <div className=" w-[40px] h-[40px] rounded ">
            <img src={logo} alt="" srcSet="" className=" w-full" />
          </div> */}
        </div>
        <div className="w-[60%] flex justify-center items-center">
          <button
            onClick={() => {
              if (tasksMain.length >= 62) {
                setShowAlert(true);
              } else {
                setOpenAddTask((prev) => !prev);
              }
            }}
            className={`
          relative w-[40px] h-[40px] flex justify-center shadow items-center font- rounded bg-white/60  hover:bg-slate-100 text-2xl`}
          >
            {tasksMain.length === 0 && (
              <p className=" absolute flex flex-col items-center  gap-1 w-[280px]  text-base left-1/2 -bottom-2  font-mali font-bold text-gray-300 -translate-x-1/2 translate-y-full">
                <FaArrowUp />
                <span>click here to create your first task list</span>
              </p>
            )}

            <FiPlus />
            {showAlert && (
              <div className=" z-50 absolute top-full --translate-x-[10px] w-[300px] shadow-md border-4 overflow-hidden bg-white border-slate-600 text-base rounded translate-y-[8px]">
                <div className=" rounded-lg  bg-white p-2">
                  You can only have 6 main tasks. More features coming soon.
                </div>
              </div>
            )}
          </button>
        </div>

        <div className="w-[15%] flex justify-end items-center">
          <MainMenu />
        </div>
      </div>

      {/* {openAddTask && <AddTaskForm setOpenAddTask={setOpenAddTask} />} */}
      {openAddTask && <AddNewTask setOpenAddTask={setOpenAddTask} />}
    </div>
  );
};

export default Navbar;
