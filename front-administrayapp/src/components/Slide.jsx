import React from "react";
import MinTic from "../images/MinTic.jpg"
import devs from "../images/devs.jpg"
import dev from "../images/dev.jpg"
import utp from "../images/UTP.jpg"

const Slide = () => {
    return (
        
        <div id="carousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={dev} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h1>Misión TIC 2022</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src={MinTic} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h1>Ciclo 4</h1> 
            </div>
          </div>
          <div class="carousel-item" >
            <img src={devs} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h1>Grupo 18</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src={utp} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h1>Universidad Tecnológica de Pereira</h1>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
}
export default Slide