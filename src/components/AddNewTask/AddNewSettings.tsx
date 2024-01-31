import React from "react";
import ColourStyles from "../ColourStyles";
import FontStyles from "../FontStyles";

type AddNewSettingsProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  fontStyle: string;
  setFontStyle: React.Dispatch<React.SetStateAction<string>>;
  prefix: string;
  setPrefix: React.Dispatch<React.SetStateAction<string>>;
};

const AddNewSettings = ({
  theme,
  setTheme,
  fontStyle,
  setFontStyle,
  prefix,
  setPrefix,
}: AddNewSettingsProps) => {
  return (
    <div className="  pt-1 pb-2 px-2 rounded max-sm:text-xs">
      <div className="   border-b  pb-2">
        <div className="  gap-2 items-center  text-xs">
          <div className=" grid grid-cols-8 gap-1">
            <ColourStyles theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </div>
      <div className="mt-2 text-sm">
        <div className=" grid grid-cols-3 gap-y-2 gap-x-2 text-sm items-center">
          <FontStyles fontStyle={fontStyle} setFontStyle={setFontStyle} />
        </div>
      </div>
      <div className="mt-2  border-t">
        {/* <h2 className=" text pb-2 font-semibold">Font Style</h2> */}
        <div className=" grid grid-cols-3 gap-y-2 gap-x-2 text-xs mt-2 items-center">
          <button
            onClick={() => setPrefix("none")}
            className={` border rounded shadow-sm p-1  bg-zinc-100  ${
              prefix === "none" ? " ring-2 ring-blue-500" : ""
            }`}
          >
            No prefix
          </button>
          <button
            onClick={() => setPrefix("letters")}
            className={`w-  border rounded shadow-sm p-1 px-2 bg-zinc-100  ${
              prefix === "letters" ? " ring-2 ring-blue-500" : ""
            }`}
          >
            a. b. c. d.
          </button>
          <button
            onClick={() => setPrefix("numbers")}
            className={`  border rounded shadow-sm p-1 px-2 bg-zinc-100   ${
              prefix === "numbers" ? " ring-2 ring-blue-500" : ""
            }`}
          >
            1. 2. 3. 4.
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewSettings;
