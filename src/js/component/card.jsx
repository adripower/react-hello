import React from "react";

// style={{marginRight: spacing + 'em'}}

function Card() {
    let nombre="adrian";
    return(
        <div className="card" style={{width:"18rem"}}>
        <img src="/src/img/rigo-baby.jpg" className="card-img-top" alt="forito"/>
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

)

}
export default Card;