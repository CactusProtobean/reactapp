import { useState } from 'react';

interface TodoItemProps {
  onAdd: (text: string) => void;
}

function TodoItem({ onAdd }: TodoItemProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo-input">New todo:</label>
      <input
        id="todo-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoItem