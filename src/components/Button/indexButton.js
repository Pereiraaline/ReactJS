import "./style.css";
import {PropTypes} from "prop-types";

const Button = ({title, onClick, bgColor, color, width}) => {
  return (
    <div>
      <button
        className="button"
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
  bgColor: "#262626",
  color: "#fff",
};

export default Button;
