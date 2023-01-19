import "bootstrap/dist/css/bootstrap.min.css";
import { PropTypes } from "prop-types";

const Subtitle = ({ text }) => {
  return <h4>{text}</h4>
};

Subtitle.propTypes = {
  text: PropTypes.string,
};

export default Subtitle;
