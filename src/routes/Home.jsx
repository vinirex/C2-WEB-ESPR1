import { } from 'react';
import '../css/estilo.css';


function Home() {
  return (
    <>
      <div className="container bg-image">
        <div className="produtos">
          <h1>Produtos</h1>

          <p>CONHEÇAS OS NOVOS PRODUTOS DA LOJA</p>
          <a href="" className="btn">
            Conheça mais
          </a>
        </div>
      </div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..."></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
