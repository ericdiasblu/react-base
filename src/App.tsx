import { useState } from "react";

export function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    { id: "1", label: "Fazer café" },
    { id: "2", label: "Fazer café" },
    { id: "3", label: "Fazer almoço" },
    { id: "4", label: "Fazer janta" },
  ]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          setList([
            ...list,
            { id: (list.length + 1).toString(), label: value },
          ]);
          setValue("");
        }}
      >
        Adicionar
      </button>

      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>{listItem.label}</li>
        ))}
      </ol>
    </div>
  );
}
