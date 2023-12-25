"use client";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import { useState } from "react";

export default function Home() {
  const [openAddTask, setOpenAddTask] = useState(false);

  return (
    <div
      className={`relative bg-white text-gray-950 w-screen min-h-screen flex flex-col  `}
    >
      <Navbar openAddTask={openAddTask} setOpenAddTask={setOpenAddTask} />
      <div className={`${openAddTask ? "blur" : ""} mb-[90px]`}>
        <MainPage />
      </div>
      <div
        className={`w-full absolute bottom-0 flex items-center  ${"bg-[#131e2611] text-[rgb(255, 255, 255)]"}`}
      >
        <a
          href="https://www.ashrafmedia.com"
          className={` text-center m-auto p-[6px] px-6 rounded-md font-semibold max-sm:text-md  max-sm:text-sm  max-sm:p-1  max-sm:px-4   hover:bg-opacity-10  ${" hover:bg-black  hover:bg-opacity-5"}`}
        >
          {" "}
          Created by @ashrafmedia
        </a>
      </div>
    </div>
  );
}
