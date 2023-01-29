import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/Button/indexButton";


import "./style.css";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { listaUsuarios, nomeUsuario } = location.state;
  let { usuarioLogado, setUsuarioLogado } = useState();

  const [count, setCount] = useState(0);

  useEffect(() => {
     usuarioLogado = JSON.stringify(nomeUsuario);
     localStorage.setItem("usuario logado", usuarioLogado);
     setUsuarioLogado = localStorage.getItem(usuarioLogado);
  }, [count]);

  const sair = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <div>
      <div className="header">
        <h2>Olá, {nomeUsuario}!</h2>
      </div>
      <div className="container-home">
        <h3>Usuários Cadastrados:</h3>
        <ul>
          {listaUsuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.nome}</li>
          ))}
        </ul>
        <h3>Incremente ou Decremente valores:</h3>
        <div className="container-contador">
          <Button
            title="+"
            onClick={() => setCount((prevCount) => prevCount + 1)}
            bgColor="#7ac377"
            color="#262626"
          />
          <h3>{count}</h3>
          <Button
            title="-"
            onClick={() => setCount((prevCount) => prevCount - 1)}
            bgColor="#dc7250"
            color="#262626"
          />
        </div>
        <Button title="Sair" onClick={sair} bgColor="#506f81" color="#262626" />
      </div>
    </div>
  );
};

export default Home;
