import { useState } from "react";

import "./App.css";

function App() {
  const [number, setNumber] = useState();

  const handleInput = (e) => {
    const { value } = e.target;
    setNumber(value);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center h-screen gap-6">
      <div onChange={handleInput}>
        <input
          type="number"
          placeholder="enter your marks"
          onChange={handleInput}
          style={{ border: "1px solid black" }}
        />
      </div>

      {!(number < 0 || number > 100) ? (
        <div className="w-60 h-10 border-[1px] border-solid border-black bg-green relative">
          <div
            className={`absolute h-full z-10 max-w-full`}
            style={{ width: `${number}%`,   backgroundColor: number > 33 ? 'green' : 'red', }}
          ></div>
        </div>
      ) : (
        <p className="text-red-500">{`${number} is invalid, enter number between 0-100`}</p>
      )}
    </div>
  );
}

export default App;
