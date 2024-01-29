import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SubTaskType = {
  id: string;
  title: string;
  isComplete: boolean;
  isSubtask: boolean;
};
export type taskType = {
  id: string;
  title: string;
  isComplete: boolean;
  subTaskList: SubTaskType[];
  isSubtask: boolean;
};
export type MainTaskType = {
  id: string;
  title: string;
  isComplete: boolean;
  taskList: taskType[];
  isSubtask: boolean;
  theme: string;
  fontStyle: string;
  prefix: string;
};
interface StateStore {
  zoomNum: string;
  setZoomNum: (zoomNum: string) => void;

  backgroundColour: string;
  setBackgroundColour: (backgroundColour: string) => void;
  //

  tasksMain: MainTaskType[];
  setTaskMain: (id: MainTaskType[]) => void;
}
export const usePersistStore = create<StateStore>()(
  persist(
    (set) => ({
      zoomNum: "zoom100",
      setZoomNum: (zoomNum: string) => set({ zoomNum }),

      backgroundColour: "bg-[#333333]",
      setBackgroundColour: (backgroundColour: string) => set({ backgroundColour }),
      //
      tasksMain: [],
      setTaskMain: (tasksMain: MainTaskType[]) => set({ tasksMain }),
    }),

    {
      name: "excalitask",
    }
  )
);
