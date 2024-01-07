import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [number, setNumber] = useState();
  const [input, setInput] = useState(null);
  const [color, setColor] = useState('grey');
  

  useEffect(()=>{
   number<33 ? setColor('red'): setColor('green')
  },[number])
  const handleInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center h-screen gap-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNumber(Number(input));
     
        }}
      >
        <input type="number" onChange={handleInput} style={{border: "1px solid black"}} />
      </form>

      <div className="w-60 h-10 border-[1px] border-solid border-black bg-green relative">
        <div className={`absolute h-full z-10`}  style={{ width: `${number}%`,backgroundColor: `${color}`}}></div>
      </div>
    </div>
  );
}

export default App;
