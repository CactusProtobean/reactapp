import {useState} from 'react';

import TodoItem from './components/todoItem/TodoItem';
import TodoList from './components/todoList/TodoList';

function App() {

  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [...prev, trimmed]);
  };

  const removeTodo = (indexToRemove: number) => {
    setTodos((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
        
        <TodoItem onAdd={addTodo} />
        <br />
        <TodoList items={todos} onRemove={removeTodo} />
    </div>
  );
}

export default App;