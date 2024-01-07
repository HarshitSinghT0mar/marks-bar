import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [number, setNumber] = useState();
  const [input, setInput] = useState(null);
  const [color, setColor] = useState('');
  

  useEffect(()=>{
    
   number<33 ? setColor('red'): setColor('green')
  },[number,input])

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
        <input type="number" onChange={handleInput} placeholder="enter your marks" style={{border: "1px solid black"}} />
      </form>

     {!(number<0 || number>100) ?<div className="w-60 h-10 border-[1px] border-solid border-black bg-green relative">
        <div className={`absolute h-full z-10 max-w-full`}  style={{width: `${number}%`,backgroundColor: `${color}`}}></div>
      </div>: <p className="text-red-500">{`${number} is invalid, enter number between 0-100`}</p>}
    </div>
  );
}

export default App;
