import "bootstrap/dist/css/bootstrap.min.css";
import {PropTypes} from "prop-types";

const Button = ({title, redirecionar, bgColor, color}) => {
  return (
    <div>
      <button className="btn" 
              style={{backgroundColor: bgColor, color}}
              onClick={redirecionar}>
        {title}
      </button>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  redirecionar: PropTypes.func,
}

Button.defaultProps = {
  bgColor: "#fff",
  color: "#000"
}
export default Button;
