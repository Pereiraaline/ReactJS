import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Button/indexButton";
import Header from "../../components/header/indexHeader";
import Gif from "../../assets/gif/looney-20.gif";

import "./style.css";


const Home = () => {
 const navigate = useNavigate();

 const location = useLocation();

 const { listaUsuarios } = location.state;

 const sair = () => {
  navigate("/");
 }


 return (
   <>
     <Header />
     <div className="container-home">
       <h3>Usuários</h3>
       <ul>
         {listaUsuarios.map((usuario) => (
           <li key={usuario.id}>{usuario.nome}</li>
         ))}
       </ul>
       <img src={Gif} alt="" />
     <Button title="Sair" onClick={sair} bgColor="#f54018c9" color="#262626" />
     </div>
   </>
 );
}


export default Home;
