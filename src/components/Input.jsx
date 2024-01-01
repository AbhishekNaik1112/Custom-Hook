import React from "react";
import useStorage from "./useStorage";

const Input = () => {
  const [InputValue, setInputValue] = useStorage("inputValue");

  const onInputChange = (e) => {
    const newValue = e.target.value;
    console.log(setInputValue)  //from useStorage
                                // (newValue) => {
                                //   setValue(newValue);
                                //   localStorage.setItem(key, JSON.stringify(newValue));
                                //   sessionStorage.setItem(key, JSON.stringify(newValue));
                                // }
    console.log(InputValue) //actual input -1 or Previous Value
    console.log(newValue) // actual input or New Value
    setInputValue(newValue);
  };

  return (
    <div className="container bg-black text-white w-full h-screen flex flex-col justify-center items-center text-3xl font-bold">
      <label className="label" htmlFor="textField">
        Enter Text:
      </label>
      <input
        type="text"
        id="textField"
        placeholder="Type Something...."
        value={InputValue}
        onChange={onInputChange}
        className="textInput text-black mb-10 text-red-600"
      />
      <p className="valueDisplay">Entered Value:</p>
      <p className="text-red-600">{InputValue}</p>
    </div>
  );
};

export default Input;
