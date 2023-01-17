import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/indexButton";
import Imagem from "../../assets/png/urban-line-305.png";
import Gif from "../../assets/gif/urban-line-305.gif";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
  const navigate = useNavigate();

  function sair() {
    navigate("/");
  }

  return (
    <>
      <div className="bg-dark bg-opacity-60 p-2 px-3 d-flex justify-content-between align-items-center sticky-top">
        <h2 className="text-secondary fw-light">
          Home<span className="fw-semibold fst-italic text-light">Page</span>
          <span class="fw-light display-7 text-light">
            <i class="bi bi-book"></i>
          </span>
        </h2>
        <Button button="Sair" redirecionar={sair} />
      </div>
      <img className="img-fluid rounded mx-auto d-block mt-20" src={Gif} />
      <h4 className="text-dark fw-light text-center mt-5">
        OOOPS<span className="fw-semibold fst-italic text-secondary"> Algo deu errado :/</span>
        <span class="fw-light display-7 text-light">
          <i class="bi bi-book"></i>
        </span>
      </h4>
    </>
  );
}

export default Home;
