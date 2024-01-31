import React from "react";

type Props = {
  fontStyle: string;
  setFontStyle: React.Dispatch<React.SetStateAction<string>>;
};

export default function FontStyles({ fontStyle, setFontStyle }: Props) {
  return (
    <>
      {" "}
      <button
        onClick={() => setFontStyle("font-poppins")}
        className={`w- font-poppins ${
          fontStyle === "font-poppins" ? " ring-2 ring-blue-500" : ""
        } border rounded shadow-sm p-1 px-2 bg-zinc-100`}
      >
        Font Style
      </button>
      <button
        onClick={() => setFontStyle("font-playpen")}
        className={`w- font-playpen ${
          fontStyle === "font-playpen" ? " ring-2 ring-blue-500" : " "
        }  border rounded shadow-sm p-1 px-2 bg-zinc-100`}
      >
        Font Style
      </button>
      <button
        onClick={() => setFontStyle("font-mali")}
        className={`w- font-mali ${
          fontStyle === "font-mali" ? " ring-2 ring-blue-500" : ""
        }  border rounded shadow-sm p-1 px-2 bg-zinc-100 `}
      >
        Font Style
      </button>
      <button
        onClick={() => setFontStyle("font-mplus")}
        className={` font-mplus ${
          fontStyle === "font-mplus" ? " ring-2 ring-blue-500" : ""
        }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
      >
        Font Style
      </button>{" "}
      <button
        onClick={() => setFontStyle("font-philosopher")}
        className={` font-philosopher ${
          fontStyle === "font-philosopher" ? " ring-2 ring-blue-500" : ""
        }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
      >
        Font Style
      </button>{" "}
      <button
        onClick={() => setFontStyle("font-lora")}
        className={` font-lora ${
          fontStyle === "font-lora" ? " ring-2 ring-blue-500" : ""
        }  border rounded shadow-sm p-1 px-2 bg-zinc-100  `}
      >
        Font Style
      </button>{" "}
    </>
  );
}
