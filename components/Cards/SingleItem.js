import React from "react";

const SingleItem = ({ product }) => {
  return (
    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 d-flex mb-4 align-items-stretch">
      <div class="card rounded-5 shadow-sm border-0" style={{ width: "300px" }}>
        <div class="card-body p-4">
          <h4 class="card-title">
            <div class="dropdown">
              <button
                class="btn b-right shadow border-2 rounded-5"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-cog"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Modifier
                </a>
                <a class="dropdown-item" href="#">
                  Supprimer
                </a>
              </div>
            </div>
          </h4>
          <img
            src={
              product.image
                ? product.image
                : "https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg"
            }
            alt=""
            style={{ height: "150px" }}
            class="img-fluid d-block mx-auto mb-3"
          />
          <p class="text-dark font-italic mt-2">{product.title}</p>
          <div class="d-flex align-items-center">
            <span class="rounded-8 bg-gradient-secondary border-0 shadow">
              <i class="fa fa-euro-sign"></i>
            </span>
            <span class="text-muted ml-2">{product.price} €</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
