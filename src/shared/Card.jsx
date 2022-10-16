import React from "react";

function Card({ children, styles, onClick }) {
  const { image, title, content, actions } = children;
  return (
    <div
      className={`card md:w-96 bg-base-100 shadow-xl ${styles}`}
      onClick={onClick}
    >
      {image ? (
        <figure className="px-10 pt-10">
          <img src={image} alt="" className="rounded-xl" />
        </figure>
      ) : null}
      <div className="card-body items-center text-center">
        {title ? <h2 className="card-title"> {title}</h2> : null}
        {content ? content : null}
        {actions ? (
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
