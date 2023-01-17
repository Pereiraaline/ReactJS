import "bootstrap/dist/css/bootstrap.min.css";

function Button(props) {
  return (
    <div>
      <button className="btn btn-light" onClick={props.redirecionar}>
        {props.button}
      </button>
    </div>
  );
}

export default Button;
