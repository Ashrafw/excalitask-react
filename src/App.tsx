import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import { usePersistStore } from "./lib/zustand";
function App() {
  const [openAddTask, setOpenAddTask] = useState(false);
  const { backgroundColour, zoomNum } = usePersistStore();

  return (
    <div
      className={` text-gray-950  ${backgroundColour} min-h-screen flex flex-col justify-between overflow-x-hidden  `}
    >
      <div>
        <Navbar openAddTask={openAddTask} setOpenAddTask={setOpenAddTask} />
        <div className={`${openAddTask ? " " : ""}  ${zoomNum}  `}>
          <MainPage />
        </div>
      </div>
      <div className={` w-[100%]   flex items-center bg-white/25 `}>
        <a
          href="https://www.ashrafmedia.com"
          className={` text-center m-auto p-[6px] px-6 rounded-md font-normal text-sm max-sm:text-md text-black/70 max-sm:text-sm  max-sm:p-1  max-sm:px-4   hover:bg-opacity-10  ${" hover:bg-black  hover:bg-opacity-10"}`}
        >
          Created by @ashrafmedia
        </a>
      </div>
    </div>
  );
}

export default App;
