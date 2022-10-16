import React from "react";

function Divider({ text }) {
  return (
    <div className="w-full cursive text-5xl text-secondary text-center flex justify-center my-10">
      ~ {text} ~
    </div>
  );
}

export default Divider;
