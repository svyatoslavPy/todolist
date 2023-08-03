import trash from "../img/trash.svg";

export const TodoItem = ({ title, handlerDeleteTodo, id, checked, handlerToogleCheckbox }) => {
  return (
    <div className="todolist-item">
      <input onClick={() => handlerToogleCheckbox(id)} type="checkbox" checked={checked} />
      <p>{title}</p>
      <img onClick={() => handlerDeleteTodo(id)} src={trash} alt="trash" />
    </div>
  );
};
