interface ITodoItemProps {
  id: string;
  label: string;
  complete: boolean;
  onComplete(): void;
  onRemove(): void;
}

export const TodoItem = ({
  id,
  label,
  complete,
  onComplete,
  onRemove,
}: ITodoItemProps) => {
  const handleComplete = () => {
    onComplete();
  };

  const handleRemove = () => {
    onRemove();
  };

  return (
    <li key={id}>
      {label}

      {complete ? "Concluido" : ""}
      <button onClick={() => handleComplete()}>Remover</button>

      <button onClick={() => handleRemove()}>Concluir</button>
    </li>
  );
};
