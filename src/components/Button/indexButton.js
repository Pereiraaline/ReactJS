import "bootstrap/dist/css/bootstrap.min.css";
import {PropTypes} from "prop-types";

const Button = ({title, onClick, bgColor, color, width}) => {
  return (
    <div>
      <button
        className="btn mb-3 w-100"
        style={({ backgroundColor: bgColor, color })}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  bgColor: "#000",
  color: "#fff",
};
export default Button;
