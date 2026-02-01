import { useState, useEffect } from "react";
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";
import { TodoAPI, type ITodo } from "./shared/services/api/TodoAPI";

export function App() {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    TodoAPI.getAll().then((data) => setList(data));
  }, []);

  const handleAdd = (value: string) => {
    TodoAPI.create({ label: value, complete: false }).then((data) => {
      setList([...list, data]);
    });
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
