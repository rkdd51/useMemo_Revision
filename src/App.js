import "./styles.css";
import { useState, useMemo } from "react";
export default function App() {
  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setState((prevState) => prevState + 1);
  };
  const handleClickTwo = () => {
    setCount((prevState) => prevState + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 10000) i++;
    return state % 2 === 0;
  }, [state]);
  // const isEven = () => {
  //   let i=0
  //   while(i<10000)i++
  //   return state % 2 === 0;
  // };
  return (
    <div className="App">
      {isEven ? "Even" : "Odd"}
      <button onClick={handleClick}>Click - {state}</button>
      <button onClick={handleClickTwo}>Click - {count}</button>
    </div>
  );
}
