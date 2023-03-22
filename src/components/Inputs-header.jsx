import { useState } from "react";

export default function InputsHeader({ bg }) {
  const [value, setValue] = useState("");
  function handlerInputValue(e) {
    setValue(e.target.value);
  }
  return (
    <header className="w-full flex flex-col items-center gap-1 box-border">
      <input
        type="text"
        placeholder="javiercarrasco08..."
        value={value}
        onInput={handlerInputValue}
        className="w-3/4 px-7 py-1 bg-transparent rounded-3xl outline-none border-primaryBackgroundMoon border box-border font-normal"
      />
      <input
        type="button"
        className={`border-none outline-none ${bg} text-primaryBackgroundCard px-8 py-1 rounded-3xl cursor-pointer box-border font-semibold transition-colors duration-1000`}
        value="Send"
      />
    </header>
  );
}
