import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
function App() {
  const [count, setCount] = useState(0);
  const [openAddTask, setOpenAddTask] = useState(false);

  return (
    <div
      className={` text-gray-950  min-h-screen flex flex-col justify-between overflow-x-hidden `}
    >
      <div>
        <Navbar openAddTask={openAddTask} setOpenAddTask={setOpenAddTask} />
        <div className={`${openAddTask ? "blur" : ""} `}>
          <MainPage />
        </div>
      </div>
      <div
        className={` w-[100%]   flex items-center  ${"bg-[#00000008] text-[rgb(255, 255, 255)]"}`}
      >
        <a
          href="https://www.ashrafmedia.com"
          className={` text-center m-auto p-[6px] px-6 rounded-md font-normal max-sm:text-md  max-sm:text-sm  max-sm:p-1  max-sm:px-4   hover:bg-opacity-10  ${" hover:bg-black  hover:bg-opacity-5"}`}
        >
          Created by @ashrafmedia
        </a>
      </div>
    </div>
  );
}

export default App;
