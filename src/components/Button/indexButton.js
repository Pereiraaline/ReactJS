import "bootstrap/dist/css/bootstrap.min.css";

function Button(props) {
  return (
    <div className="mt-4">
      <button className="btn btn-light btn-lg">
        <a
          className="text-decoration-none text-dark p-3"
          href={props.href}
        >
          {props.button}
        </a>
      </button>
    </div>
  );
}

export default Button;
