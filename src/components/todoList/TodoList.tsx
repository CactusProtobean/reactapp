interface TodoListProps {
  items: string[];
  onRemove: (index: number) => void;
}

function TodoList({ items, onRemove }: TodoListProps) {
  return (
    <div>
      <h1>Todo List</h1>
      {items.length === 0 ? (
        <p>No todos yet.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}{' '}
              <button type="button" onClick={() => onRemove(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList