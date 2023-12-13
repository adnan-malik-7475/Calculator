import { useState } from "react";

import "./App.css";
import { Input } from "./components/components";

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };
  const clearDisplay = () => {
    setResult("");
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };

  const clearLastValue = () => {
    setResult(result.split("").slice(0, -1).join(""));
  };

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
        <div className=" mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden w-[30%] h-[70%]">
          <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
            <div className="w-full py-5 px-6 text-6xl text-white font-thin">
              {result}
            </div>
          </div>

          <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
            <div className="flex w-full">
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={"C"} onClick={clearDisplay} />
              </div>

              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={"X"} onClick={clearLastValue} />
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={"%"} onClick={handleClick} />{" "}
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={"/"} onClick={handleClick} />
              </div>
            </div>
            <div className="flex w-full ">
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={7} onClick={handleClick} />
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={8} onClick={handleClick} />
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={9} onClick={handleClick} />
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={"*"} onClick={handleClick} />
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={4} onClick={handleClick} />
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={5} onClick={handleClick} />
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={6} onClick={handleClick} />
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={"-"} onClick={handleClick} />
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={1} onClick={handleClick} />
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={2} onClick={handleClick} />
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={3} onClick={handleClick} />
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <Input value={"+"} onClick={handleClick} />
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-r border-indigo-400">
                <Input value={0} onClick={handleClick} />
              </div>
              <div className="w-1/4 border-r border-indigo-400">
                <Input value={"."} onClick={handleClick} />
              </div>
              <div className="w-2/4 border-r border-indigo-400">
                <Input value={"="} onClick={calculate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
