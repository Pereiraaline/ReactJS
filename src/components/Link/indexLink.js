import "./style.css";
import {PropTypes} from "prop-types";

function Link({href, link}) {
  return (
    <div className="container-link">
      <a href={href}>
        {link}
      </a>
    </div>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  link: PropTypes.string,
}

export default Link;
