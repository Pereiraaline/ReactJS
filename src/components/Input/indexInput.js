import "bootstrap/dist/css/bootstrap.min.css";

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

export default Input;
