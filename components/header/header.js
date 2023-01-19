import React from "react";

const Header = ({ data }) => {
  return (
    <div className="container h-28 bg-black mb-10 rounded flex">
      <h1 className="text-secondary my-auto mx-auto text-center text-3xl">
        {data}
      </h1>
    </div>
  );
};

export default Header;
