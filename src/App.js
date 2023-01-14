import './App.css';
import Title from './components/Title/indexTitle';
import Input from './components/Input/indexInput';
import Button from './components/Button/indexButton';
import Link from './components/Link/indexLink';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5">
      <div className="card text-bg-dark mt-5 w-50 p-3 opacity-80 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <Title title="Login" />
        <Input label="Usuário" />
        <Input label="Senha" />
        <Button button="Login" />
        <Link link="Esqueceu a senha?" />
      </div>
    </div>
  );
}

export default App;
