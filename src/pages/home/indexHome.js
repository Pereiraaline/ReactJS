import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/indexButton";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
  const navigate = useNavigate();

  function sair() {
    navigate("/");
  }

  return (
    <>
      <div class="bg-dark bg-opacity-60 p-2 px-3 d-flex justify-content-between align-items-center sticky-top">
        <h2 class="text-secondary fw-light">
          Home<span class="fw-semibold fst-italic text-light">Page</span>
          <span class="fw-light display-7 text-light">
            <i class="bi bi-book"></i>
          </span>
        </h2>
        <Button button="Sair" redirecionar={sair} />
      </div>
    </>
  );
}

export default Home;
