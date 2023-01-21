import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../../components/Title/indexTitle";
import Input from "../../components/Input/indexInput";
import Button from "../../components/Button/indexButton";
import Link from "../../components/Link/indexLink";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Subtitle from "../../components/Subtitle/indexSubtitle";

const Login = () => {
  // const [listaUsuarios, setListaUsuarios] = useState("");
  const [usuarios, setUsuarios] = useState([
    {
      email: "joao@email",
      senha: "oidevs",
    },
    {
      email: "jady@email",
      senha: "oidevs",
    },
    {
      email: "raniel@email",
      senha: "caneta",
    },
  ]);

  const navigate = useNavigate();
  const [title, setTitle] = useState("Login");
  const [showError, setShowError] = useState(false);
  const [colorInput, setColorInput] = useState(false);

  //valor input usuario
  const [nomeUsuario, setNomeUsuario] = useState("");

  //valor input senha
  const [senha, setSenha] = useState("");

  const vaPraHome = () => {
    const usuarioEscolhido = usuarios.find(usuario => usuario.email === nomeUsuario && usuario.senha === senha);

    if(usuarioEscolhido){
      navigate("/home");

    }else{
      setShowError(true)
      mudarColorInput(true)
    }
  };

  const mudarTitulo = () => {
    setTitle("Novo Título");
  };

  const mudarColorInput = () => {
    setColorInput("red")
  }

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5 w-100 h-100">
      <div className="card text-dark bg-body-secondary mt-5 w-50 p-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <Title title={title} />
        {showError ? <Subtitle text="Credenciais Inválidas" /> : null}
        <Input
          label="E-mail"
          type="email"
          color={colorInput}
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
        />
        {colorInput ? true : null}
        <Input
          label="Senha"
          color={colorInput}
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button title="Entrar" onClick={vaPraHome} />
        <Button
          title="Trocar Título"
          onClick={mudarTitulo}
          bgColor="gray"
          color="#000"
        />
        <Link href="https://www.google.com/" link="Esqueceu a senha?" />
      </div>
    </div>
  );
};

export default Login;
