import React from "react";

function CardWithImage(){
    return <div className="col-lg-3 col-md-5 col-sm-11 col-11 mt-4 mx-auto">
    <div className="card mx-auto">
        <div className="ratio ratio-16x9 bg-secondary">
            <div className="d-flex justify-content-center align-items-center text-light fs-3">500 x 325</div>
        </div>
        <div className="card-body">
            <h5 className="card-title text-center">Card title</h5>
            <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card-footer d-flex">
            <a href="#" className="btn btn-primary mx-auto">Find Out More</a>
        </div>
    </div>
</div> 
}

export default CardWithImage;