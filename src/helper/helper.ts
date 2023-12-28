import { MainTaskType } from "../lib/zustand";

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
