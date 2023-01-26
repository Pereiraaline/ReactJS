import { PropTypes } from "prop-types";

const Subtitle = ({ text, color }) => {
  return <p style={{ color: color }}>{text}</p>;
};

Subtitle.propTypes = {
  text: PropTypes.string,
};

Subtitle.defaultProps = {
  color: "red",
};

export default Subtitle;
