import Button from "../Button";
import TodoItem from "../todoItem/TodoItem";

<TodoItem />

function TodoList() {
        const item = {id: 1, title: "Todo 1", completed: false}

  return (
    <div>
        <h1>Todo List</h1>
        <TodoItem />
        <Button color="primary" onClick={() => {}}>
          Add Todo
        </Button>
        <br />
        {item.title}
        <br />
        <label>
        Checkbox: <input type="checkbox" name="myCheckbox" />
      </label>
    </div>
  )
}

export default TodoList