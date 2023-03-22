import { useState } from "react";

export default function InputsHeader({ mood }) {
  const [value, setValue] = useState("");
  function handlerInputValue(e) {
    setValue(e.target.value);
  }
  return (
    <header className="w-4/5 flex gap-3 box-border">
      <input
        type="text"
        placeholder="javiercarrasco08..."
        value={value}
        onInput={handlerInputValue}
        className="w-3/4 px-7 py-2 rounded-3xl outline-none border-primaryBackgroundMoon border box-border"
      />
      <input
        type="button"
        className="border-none outline-none bg-reposSun text-primaryBackgroundCard px-10 py-3 rounded-3xl cursor-pointer box-border font-semibold"
        value="Send"
      />
    </header>
  );
}
