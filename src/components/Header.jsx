import todoLogo from "../img/rocket.svg";

export const Header = () => {
  return (
    <header className="header">
      <img src={todoLogo} alt="" />
      <p className="header-title">todo</p>
    </header>
  );
};
