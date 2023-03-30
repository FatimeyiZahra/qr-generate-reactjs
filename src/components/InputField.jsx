import React, { useContext } from "react";
import { InputContext } from "../App";

const InputField = () => {
  const { inputVal, setInputVal } = useContext(InputContext);
  const handleOnChange = (e) => {
    setInputVal({ ...inputVal, url: e.target.value });
  };

  return (
    <div>
      <label className="font-semibold text-md">Your URL</label>
      <input
        type="url"
        className="w-full border-2 py-1 px-3 text-gray rounded-sm"
        placeholder="https://example.com"
        value={inputVal.url}
        onChange={handleOnChange}
      ></input>
    </div>
  );
};

export default InputField;
