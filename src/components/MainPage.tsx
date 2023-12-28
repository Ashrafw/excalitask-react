import { MainTaskType, usePersistStore } from "../lib/zustand";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import DisplayTask from "./DisplayMainTask/DisplayTask";

const MainPage = () => {
  const { tasksMain } = usePersistStore();
  const [data, setData] = useState<MainTaskType[]>();
  const [animationMother] = useAutoAnimate();
  const [editModeId, setEditModeId] = useState("");

  useEffect(() => {
    if (tasksMain) setData(tasksMain);
  }, [tasksMain]);
  return (
    <div
      className="flex flex-wrap items-start justify-center gap-4 p-2 px-4 mb-[90px]"
      ref={animationMother}
    >
      {data?.map((task) => (
        <DisplayTask
          key={task.id + "0"}
          actualMainTask={task}
          editModeId={editModeId}
          setEditModeId={setEditModeId}
        />
      ))}
    </div>
  );
};

export default MainPage;
