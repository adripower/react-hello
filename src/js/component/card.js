import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

function Card(props) {
  console.log(props)
  return (

    <div className="container col-12 ">
    <div className="card">
      <img
        src="/src/img/rigo-baby.jpg"
        className="card-img-top"
        alt="foto de rigo"
      />
      <div className="card-body">
        <h5 className="card-title ">{props.titulo}</h5>
        <p className="card-text">
         {props.historia}
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
