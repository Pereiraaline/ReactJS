import "bootstrap/dist/css/bootstrap.min.css";

function Input(props) {
  return (
    <div className="mt-4">
      <label className="form-label bg-whithe" for="input">
        {props.label}
      </label>
      <input className="form-control" name="input" />
    </div>
  );
}

export default Input;
