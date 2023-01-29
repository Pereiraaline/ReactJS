import "./style.css";
import Title from "../../components/Title/indexTitle";
import Input from "../../components/Input/indexInput";
import Button from "../../components/Button/indexButton";
import Link from "../../components/Link/indexLink";
import Subtitle from "../../components/Subtitle/indexSubtitle";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [usuarios] = useState([
    {
      id: 1,
      nome: "João",
      email: "joao@email",
      senha: "oidevs",
    },
    {
      id: 2,
      nome: "Jady",
      email: "jady@email",
      senha: "oidevs",
    },
    {
      id: 3,
      nome: "Raniel",
      email: "raniel@email",
      senha: "oidevs",
    },
  ]);

  const navigate = useNavigate();
  const [title, setTitle] = useState("Login");
  const [showError, setShowError] = useState(false);
  const [colorInput, setColorInput] = useState("");

  //valor input usuario
  const [nomeUsuario, setNomeUsuario] = useState("");

  //valor input senha
  const [senha, setSenha] = useState("");

  const vaPraHome = () => {
    const usuarioEscolhido = usuarios.find(
      (usuario) => usuario.email === nomeUsuario && usuario.senha === senha
    );

    if (usuarioEscolhido) {
      navigate("/home", { state: {listaUsuarios: usuarios, nomeUsuario: usuarioEscolhido.nome}});
    } else {
      setShowError(true);
      mudarColorInput("red");
    }
  };

  const mudarTitulo = () => {
    setTitle("Novo Título");
  };

  const mudarColorInput = () => {
    setColorInput("red");
  };

  return (
    <div className="container">
      <div className="container-login">
        <Title title={title} />
        {showError ? <Subtitle text="Credenciais Inválidas" /> : null}
        <Input
          label="E-mail"
          type="email"
          color={colorInput}
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
        />
        <Input
          label="Senha"
          color={colorInput}
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button
          title="Entrar"
          onClick={vaPraHome}
          bgColor="#506f81"
          color="#262626"
        />
        <Button
          title="Trocar Título"
          onClick={mudarTitulo}
          bgColor="#9cb2af"
          color="#000"
        />
        <Link href="https://www.google.com/" link="Esqueceu a senha?" />
      </div>
    </div>
  );
};

export default Login;
