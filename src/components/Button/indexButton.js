import "bootstrap/dist/css/bootstrap.min.css";

const Button = ({button, redirecionar}) => {
  return (
    <div>
      <button className="btn btn-light" onClick={redirecionar}>
        {button}
      </button>
    </div>
  );
}

export default Button;
