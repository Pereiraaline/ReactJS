import "bootstrap/dist/css/bootstrap.min.css";
import {PropTypes} from "prop-types";

const Input = ({label}) => {
 return (
   <div className="mt-4 mb-4">
     <label className="form-label bg-whithe" for="input">
       {label}
     </label>
     <input className="form-control" name="input" />
   </div>
 );
}

Input.propTypes = {
  label: PropTypes.string
};


export default Input;
