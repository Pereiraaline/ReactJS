import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../../components/Title/indexTitle";
import Input from "../../components/Input/indexInput";
import Button from "../../components/Button/indexButton";
import Link from "../../components/Link/indexLink";
import Subtitle from "../../components/Subtitle/indexSubtitle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {

const navigate = useNavigate();
const [title, setTitle] = useState("Login");
const [subtitle, setSubtitle] = useState("");

const vaPraHome = () => {
  navigate("/home");
}

const mudarTitulo = () => {
  setTitle("Novo Título")
}

const onChange = (event) => {
  setSubtitle(event.target.value)
}

return (
  <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5 w-100 h-100">
    <div className="card text-dark bg-body-secondary mt-5 w-50 p-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <Title title={title} />
      <Subtitle text={subtitle} />
      <Input label="Usuário" value={subtitle} onChange={onChange} />
      <Input label="Senha" />
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
}

export default Login;
