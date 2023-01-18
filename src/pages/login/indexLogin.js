import Title from "../../components/Title/indexTitle";
import Input from "../../components/Input/indexInput";
import Button from "../../components/Button/indexButton";
import Link from "../../components/Link/indexLink";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
const navigate = useNavigate();

const vaPraHome = () => {
  navigate("/home");
}

return (
  <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5 w-100 h-100">
    <div className="card text-bg-dark mt-5 w-50 p-3 opacity-80 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <Title title="Login" />
      <Input label="Usuário" />
      <Input label="Senha" />
      <Button button="Entrar" redirecionar={vaPraHome} />
      <Link href="https://www.google.com/" link="Esqueceu a senha?" />
    </div>
  </div>
);
}

export default Login;
