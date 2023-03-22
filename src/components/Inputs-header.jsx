import { useState } from "react";

export default function InputsHeader({ bg, border, color }) {
  const [value, setValue] = useState("");
  function handlerInputValue(e) {
    setValue(e.target.value);
  }
  return (
    <header className="w-full flex flex-col items-center gap-2 box-border">
      <input
        type="text"
        placeholder="javiercarrasco08..."
        value={value}
        onInput={handlerInputValue}
        className={`w-3/4 px-7 py-1 bg-transparent rounded-3xl outline-none ${border} border box-border font-normal ${color} transition duration-1000`}
      />
      <input
        type="button"
        className={`border-none outline-none ${bg} text-primaryBackgroundCard px-8 py-1 rounded-3xl cursor-pointer box-border font-semibold duration-1000 hover:opacity-50 transition`}
        value="Send"
      />
    </header>
  );
}
