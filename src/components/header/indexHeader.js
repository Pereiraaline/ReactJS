import "./style.css";

const Header = ({nomeUsuario}) => {
  return (
    <div className="header">
      <h2>HomePage</h2>
      <p nome={nomeUsuario} >Olá {nomeUsuario}</p>
    </div>
  );
};


export default Header;
