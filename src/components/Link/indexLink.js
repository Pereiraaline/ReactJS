import "bootstrap/dist/css/bootstrap.min.css";

function Link(props) {
  return (
    <div className="mt-3 mb-3">
      <a
        className="text-decoration-none link-light"
        href={props.href}
      >
        {props.link}
      </a>
    </div>
  );
}

export default Link;
