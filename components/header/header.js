import React from "react";

const Header = ({data}) => {
  console.log(data);
  return (
    <div className="container h-[150px] bg-black mb-10 rounded">
      <h1 className="text-secondary text-6xl text-center pt-8">{data}</h1>
    </div>
  );
};

export default Header;
