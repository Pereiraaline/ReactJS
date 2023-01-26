import "./style.css";
import {PropTypes} from "prop-types";


const Input = ({label, value, onChange, type, color}) => {

 return (
   <div className="container-input">
     <label
       style={{ color: color }}
     >
       {label}
     </label>
     <input
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
  color: "#808080",
}

export default Input;
