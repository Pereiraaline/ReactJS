import "bootstrap/dist/css/bootstrap.min.css";
import { PropTypes } from "prop-types";

function Title({title}) {
  return <h1 className="mb-3 mt-3">{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string,
};


export default Title;
