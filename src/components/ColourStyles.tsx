type Props = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export default function ColourStyles({ theme, setTheme }: Props) {
  return (
    <>
      <button
        onClick={() => setTheme("bg-slate-950")}
        className={` w-full h-6 bg-slate-950 rounded border ${
          theme === "bg-slate-950" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-slate-800")}
        className={` w-full h-6 bg-slate-800 rounded border ${
          theme === "bg-slate-800" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-slate-600")}
        className={` w-full h-6 bg-slate-600 rounded border ${
          theme === "bg-slate-600" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      <button
        onClick={() => setTheme("bg-slate-500")}
        className={` w-full h-6 bg-slate-500 rounded border ${
          theme === "bg-slate-500" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      {/* ===================================== */}
      {/* ===================================== */}
      {/* ===================================== */}
      <button
        onClick={() => setTheme("bg-zinc-800")}
        className={` w-full h-6 bg-zinc-800 rounded border ${
          theme === "bg-zinc-800" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-zinc-700")}
        className={` w-full h-6 bg-zinc-700 rounded border ${
          theme === "bg-zinc-700" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-zinc-600")}
        className={` w-full h-6 bg-zinc-600 rounded border ${
          theme === "bg-zinc-600" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      <button
        onClick={() => setTheme("bg-zinc-500")}
        className={` w-full h-6 bg-zinc-500 rounded border ${
          theme === "bg-zinc-500" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      {/* ===================================== */}
      {/* ===================================== */}
      {/* ===================================== */}
      <button
        onClick={() => setTheme("bg-red-800")}
        className={` w-full h-6 bg-red-800 rounded border ${
          theme === "bg-red-800" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-red-700")}
        className={` w-full h-6 bg-red-700 rounded border ${
          theme === "bg-red-700" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-red-600")}
        className={` w-full h-6 bg-red-600 rounded border ${
          theme === "bg-red-600" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      <button
        onClick={() => setTheme("bg-red-500")}
        className={` w-full h-6 bg-red-500 rounded border ${
          theme === "bg-red-500" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      {/* ===================================== */}
      {/* ===================================== */}
      {/* ===================================== */}
      <button
        onClick={() => setTheme("bg-yellow-800")}
        className={` w-full h-6 bg-yellow-800 rounded border ${
          theme === "bg-yellow-800" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-yellow-700")}
        className={` w-full h-6 bg-yellow-700 rounded border ${
          theme === "bg-yellow-700" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-yellow-600")}
        className={` w-full h-6 bg-yellow-600 rounded border ${
          theme === "bg-yellow-600" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      <button
        onClick={() => setTheme("bg-yellow-500")}
        className={` w-full h-6 bg-yellow-500 rounded border ${
          theme === "bg-yellow-500" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      {/* ===================================== */}
      {/* ===================================== */}
      {/* ===================================== */}
      <button
        onClick={() => setTheme("bg-emerald-900")}
        className={` w-full h-6 bg-emerald-900 rounded border ${
          theme === "bg-emerald-900" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-emerald-800")}
        className={` w-full h-6 bg-emerald-800 rounded border ${
          theme === "bg-emerald-800" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-emerald-700")}
        className={` w-full h-6 bg-emerald-700 rounded border ${
          theme === "bg-emerald-700" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      <button
        onClick={() => setTheme("bg-emerald-600")}
        className={` w-full h-6 bg-emerald-600 rounded border ${
          theme === "bg-emerald-600" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      {/* ===================================== */}
      {/* ===================================== */}
      {/* ===================================== */}
      <button
        onClick={() => setTheme("bg-cyan-900")}
        className={` w-full h-6 bg-cyan-900 rounded border ${
          theme === "bg-cyan-900" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-cyan-800")}
        className={` w-full h-6 bg-cyan-800 rounded border ${
          theme === "bg-cyan-800" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-cyan-700")}
        className={` w-full h-6 bg-cyan-700 rounded border ${
          theme === "bg-cyan-700" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      <button
        onClick={() => setTheme("bg-cyan-600")}
        className={` w-full h-6 bg-cyan-600 rounded border ${
          theme === "bg-cyan-600" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      {/* ===================================== */}
      {/* ===================================== */}
      {/* ===================================== */}
      <button
        onClick={() => setTheme("bg-indigo-800")}
        className={` w-full h-6 bg-indigo-800 rounded border ${
          theme === "bg-indigo-800" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-indigo-700")}
        className={` w-full h-6 bg-indigo-700 rounded border ${
          theme === "bg-indigo-700" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-indigo-600")}
        className={` w-full h-6 bg-indigo-600 rounded border ${
          theme === "bg-indigo-600" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      <button
        onClick={() => setTheme("bg-indigo-500")}
        className={` w-full h-6 bg-indigo-500 rounded border ${
          theme === "bg-indigo-500" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      {/* ===================================== */}
      {/* ===================================== */}
      {/* ===================================== */}
      <button
        onClick={() => setTheme("bg-violet-800")}
        className={` w-full h-6 bg-violet-800 rounded border ${
          theme === "bg-violet-800" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-violet-700")}
        className={` w-full h-6 bg-violet-700 rounded border ${
          theme === "bg-violet-700" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-violet-600")}
        className={` w-full h-6 bg-violet-600 rounded border ${
          theme === "bg-violet-600" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      <button
        onClick={() => setTheme("bg-violet-500")}
        className={` w-full h-6 bg-violet-500 rounded border ${
          theme === "bg-violet-500" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      {/* ===================================== */}
      {/* ===================================== */}
      {/* ===================================== */}
      <button
        onClick={() => setTheme("bg-fuchsia-800")}
        className={` w-full h-6 bg-fuchsia-800 rounded border ${
          theme === "bg-fuchsia-800" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-fuchsia-700")}
        className={` w-full h-6 bg-fuchsia-700 rounded border ${
          theme === "bg-fuchsia-700" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-fuchsia-600")}
        className={` w-full h-6 bg-fuchsia-600 rounded border ${
          theme === "bg-fuchsia-600" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      <button
        onClick={() => setTheme("bg-fuchsia-500")}
        className={` w-full h-6 bg-fuchsia-500 rounded border ${
          theme === "bg-fuchsia-500" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      {/* ===================================== */}
      {/* ===================================== */}
      {/* ===================================== */}
      <button
        onClick={() => setTheme("bg-rose-800")}
        className={` w-full h-6 bg-rose-800 rounded border ${
          theme === "bg-rose-800" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-rose-700")}
        className={` w-full h-6 bg-rose-700 rounded border ${
          theme === "bg-rose-700" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>{" "}
      <button
        onClick={() => setTheme("bg-rose-600")}
        className={` w-full h-6 bg-rose-600 rounded border ${
          theme === "bg-rose-600" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
      <button
        onClick={() => setTheme("bg-rose-500")}
        className={` w-full h-6 bg-rose-500 rounded border ${
          theme === "bg-rose-500" ? " ring-2 ring-blue-500" : ""
        }`}
      ></button>
    </>
  );
}
