import { useState } from "react";
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";
import { TodoAPI } from "./shared/services/api/TodoAPI";

TodoAPI.getAll().then((data) => console.log("1", data));

TodoAPI.create({ label: "Fazer Almoço", complete: false });
TodoAPI.create({ label: "Fazer Lanche", complete: false });

TodoAPI.getAll().then((data) => console.log("2", data));

TodoAPI.updateById("1", { label: "Fazer Janta", complete: false });

TodoAPI.getAll().then((data) => console.log("3", data));

TodoAPI.deleteById("1");

TodoAPI.getAll().then((data) => console.log("4", data));

export function App() {
  const [list, setList] = useState([
    { id: "1", label: "Fazer café", complete: false },
    { id: "2", label: "Fazer café", complete: false },
    { id: "3", label: "Fazer almoço", complete: false },
    { id: "4", label: "Fazer janta", complete: false },
  ]);

  const handleAdd = (value: string) => {
    setList([
      ...list,
      {
        id: (list.length + 1).toString(),
        complete: false,
        label: value,
      },
    ]);
  };

  const handleComplete = (id: string) => {
    setList([...list.filter((item) => item.id !== id)]);
  };

  const handleRemove = (id: string) => {
    setList([
      ...list.map((item) => ({
        ...item,
        complete: item.id === id ? true : item.complete,
      })),
    ]);
  };

  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <List>
        {list.map((listItem) => (
          <TodoItem
            key={listItem.id}
            onComplete={() => handleComplete(listItem.id)}
            onRemove={() => handleRemove(listItem.id)}
            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}
          />
        ))}
      </List>
    </div>
  );
}
