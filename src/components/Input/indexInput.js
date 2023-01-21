import "bootstrap/dist/css/bootstrap.min.css";
import {PropTypes} from "prop-types";


const Input = ({label, value, onChange, type, color}) => {

 return (
   <div className="mb-3">
     <label
       className="form-label bg-whithe"
       for="input"
       style={{ color: color }}
     >
       {label}
     </label>
     <input
       className="form-control border-bottom"
       type={type}
       value={value}
       onChange={onChange}
     />
   </div>
 );

}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  color: "#000",
}

export default Input;
