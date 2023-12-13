// ... (previous imports and useState)
import { useState, react } from "react";
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
    setResult(result.slice(0, -1));
  };

  const buttonElements = [
    "C",
    "X",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
        <div className="mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden w-[35%] h-[70%]">
          <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
            <div className="w-full py-5 px-6 text-6xl text-white font-thin">
              {result}
            </div>
          </div>

          <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
            <div className="flex w-full flex-wrap">
              {buttonElements.map((element, index) => (
                <div
                  key={index}
                  className={`w-${
                    element === "=" ? "2/4" : "1/4"
                  } border border-indigo-800`}
                >
                  <Input
                    value={element}
                    onClick={() => {
                      if (element === "=") {
                        calculate();
                      } else if (element === "C") {
                        clearDisplay();
                      } else if (element === "X") {
                        clearLastValue();
                      } else {
                        handleClick({ target: { value: element } });
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
