import { useState } from "react";
import { Input } from "./Input";
import { TodoInfo } from "./TodoInfo";
import { TodoItem } from "./TodoItem";

import plus from "../img/plus.svg";
import clipboard from "../img/Clipboard.svg";

export const TodoList = () => {
  const [newTitle, setNewTitle] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      checked: true,
    },
    {
      id: 2,
      title:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      checked: false,
    },
  ]);

  const handlerSetTitle = (value) => {
    setNewTitle(value);
  };

  const handlerAddTodo = () => {
    setTodoList([
      ...todoList,
      {
        title: newTitle,
      },
    ]);
  };

  const handlerDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handlerToogleCheckbox = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo
      )
    );
  };

  return (
    <section className="todolist">
      <div className="todolist-items">
        <Input onChange={handlerSetTitle} newTitle={newTitle} type={"text"} />
        <button onClick={() => handlerAddTodo()} className="todolist-items__btn">
          <p>Criar</p>
          <img src={plus} alt="plus" />
        </button>
      </div>
      <TodoInfo todoList={todoList} />
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            handlerDeleteTodo={handlerDeleteTodo}
            handlerToogleCheckbox={handlerToogleCheckbox}
            title={todo.title}
            id={todo.id}
            checked={todo.checked}
          />
        ))
      ) : (
        <div className="todolist-empty">
          <img src={clipboard} alt="clipboard" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p> Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </section>
  );
};
