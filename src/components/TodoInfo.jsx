export const TodoInfo = ({ todoList }) => {
  const selectedsCheckbox = todoList.reduce((summa, item) => {
    return item.checked ? summa + 1 : summa;
  }, 0);

  return (
    <div className="todolist-subtitle">
      <div className="todolist-subtitle-items">
        <p className="todolist-subtitle-items__text">Tarefas criadas</p>
        <p className="todolist-subtitle-items__text--special">{todoList?.length}</p>
      </div>
      <div className="todolist-subtitle-items">
        <p className="todolist-subtitle-items__text--primary">Concluídas</p>
        <p className="todolist-subtitle-items__text--special">
          {selectedsCheckbox || 0} de {todoList?.length}
        </p>
      </div>
    </div>
  );
};
