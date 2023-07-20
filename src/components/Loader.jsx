import React from "react";
import  {PacmanLoader}  from "react-spinners";

const Loader = ({ isLoad }) => {
  return (
    <div className="loader__wrapper">
     <PacmanLoader color="#36d7b7"loading={isLoad} size={50} />
    </div>
  );
};

export default Loader;