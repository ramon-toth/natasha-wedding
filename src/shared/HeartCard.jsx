import React from "react";

function HeartCard({ children }) {
  const { title, content, image } = children;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl md:w-2/4 bg-opacity-90">
      <figure>
        <img className="mask mask-heart mx-5 w-64" src={image} alt="" />
      </figure>
      <div className="card-body">
        {title ? (
          <h2 className="card-title text-secondary cursive text-3xl">
            {" "}
            {title}
          </h2>
        ) : null}
        {content ? <span className="text-xl">{content}</span> : null}
        {/*<div className="card-actions justify-end">*/}
        {/*    <button className="btn btn-primary">Listen</button>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default HeartCard;
