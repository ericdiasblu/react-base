import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  let teste = "banana";

  console.log("log", teste);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          teste = teste + "1";
        }}
      >
        {count}
      </button>
    </div>
  );
}
