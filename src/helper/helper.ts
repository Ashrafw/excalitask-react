import { MainTaskType } from "../lib/zustand";
export const accentVariants: { [key: string]: string } = {
  "bg-slate-950": "accent-slate-950",
  "bg-slate-800": "accent-slate-800",
  "bg-slate-600": "accent-slate-600",
  "bg-slate-500": "accent-slate-500",
  "bg-zinc-800": "accent-zinc-800",
  "bg-zinc-700": "accent-zinc-700",
  "bg-zinc-600": "accent-zinc-600",
  "bg-zinc-500": "accent-zinc-500",
  "bg-red-800": "accent-red-800",
  "bg-red-700": "accent-red-700",
  "bg-red-600": "accent-red-600",
  "bg-red-500": "accent-red-500",
  "bg-yellow-800": "accent-yellow-800",
  "bg-yellow-700": "accent-yellow-700",
  "bg-yellow-600": "accent-yellow-600",
  "bg-yellow-500": "accent-yellow-500",
  "bg-emerald-900": "accent-emerald-900",
  "bg-emerald-800": "accent-emerald-800",
  "bg-emerald-700": "accent-emerald-700",
  "bg-emerald-600": "accent-emerald-600",
  "bg-cyan-900": "accent-cyan-900",
  "bg-cyan-800": "accent-cyan-800",
  "bg-cyan-700": "accent-cyan-700",
  "bg-cyan-600": "accent-cyan-600",
  "bg-indigo-800": "accent-indigo-800",
  "bg-indigo-700": "accent-indigo-700",
  "bg-indigo-600": "accent-indigo-600",
  "bg-indigo-500": "accent-indigo-500",
  "bg-violet-800": "accent-violet-800",
  "bg-violet-700": "accent-violet-700",
  "bg-violet-600": "accent-violet-600",
  "bg-violet-500": "accent-violet-500",
  "bg-fuchsia-800": "accent-fuchsia-800",
  "bg-fuchsia-700": "accent-fuchsia-700",
  "bg-fuchsia-600": "accent-fuchsia-600",
  "bg-fuchsia-500": "accent-fuchsia-500",
  "bg-rose-800": "accent-rose-800",
  "bg-rose-700": "accent-rose-700",
  "bg-rose-600": "accent-rose-600",
  "bg-rose-500": "accent-rose-500",
};
export const letters: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
export const getDateFormatStart = () => {
  const nthNumber = (number: number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `${days[date.getDay()]} ${date.getDate()}${nthNumber(date.getDate())}, ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
};

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function checkCompletionPercentage(task: MainTaskType) {
  const theTasks = task.taskList;
  const totalTasks = theTasks.length;
  const numCompleteTaskWithNoSub = theTasks.filter(
    (item) => item.isComplete && !item.isSubtask
  ).length;
  const theSubtasks = theTasks.filter((item) => item.isSubtask);
  let a: number[] = [];
  for (let i = 0; i < theSubtasks.length; i++) {
    a = [
      ...a,

      theSubtasks[i].subTaskList.filter((item) => item.isComplete).length /
        theSubtasks[i].subTaskList.length,
    ];
  }
  const completion = a.reduce((acc, item) => item + acc, 0) + numCompleteTaskWithNoSub;
  const percentage = Math.round((completion / totalTasks) * 100);
  if (percentage > -1) {
    return Math.round((completion / totalTasks) * 100);
  } else {
    return 0;
  }
}
