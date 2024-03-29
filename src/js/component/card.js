import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

function Card() {
  return (

    <div class="container col-12 ">
    <div className="card">
      <img
        src="/src/img/rigo-baby.jpg"
        className="card-img-top"
        alt="foto de rigo"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
    </div>
    
  );
}
export default Card;
