import "bootstrap/dist/css/bootstrap.min.css";
import {PropTypes} from "prop-types";


const Input = ({label, value, onChange, type}) => {

 return (
   <div className="mb-3">
     <label className="form-label bg-whithe" for="input">
       {label}
     </label>
     <input className="form-control border-bottom" type={type} value={value} onChange={onChange} />
   </div>
 );

}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};


export default Input;
