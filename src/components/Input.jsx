export const Input = ({ onChange, newTitle, type }) => {
  return (
    <input
      value={newTitle}
      onChange={(e) => onChange(e.target.value)}
      type={type || "text"}
      placeholder="Adicione uma nova tarefa"
    />
  );
};
