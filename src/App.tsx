import {useState} from 'react';
import Button from "./components/Button";
import TodoItem from './components/todoItem/TodoItem';
import TodoList from './components/todoList/TodoList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <Button color="secondary" onClick={() => setCount(0)}>
          Click me
        </Button>
        <Button color="primary" onClick={() => setCount(count - 1)}>
          -
        </Button>
        <span>{count}</span>
        <Button color="success" onClick={() => setCount(count + 1)}>
          +
        </Button>
        <br />
         <Button color="danger" onClick={() => setCount(count * 2)}>
          x2
        </Button>
         <Button color="warning" onClick={() => setCount(count / 2)}>
          /2
        </Button>
        <br />
          <Button color="info" onClick={() => setCount(count ** 2)}>
          **2
        </Button>
        <br />
        <TodoItem />
        <br />
        <TodoList />
    </div>
  );
}

export default App;