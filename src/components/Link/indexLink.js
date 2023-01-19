import "bootstrap/dist/css/bootstrap.min.css";
import {PropTypes} from "prop-types";

function Link({href, link}) {
  return (
    <div className="mb-3 text-center">
      <a className="text-decoration-none text-dark" href={href}>
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
