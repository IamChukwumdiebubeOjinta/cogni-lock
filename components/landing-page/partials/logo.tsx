import React from "react";

export default function Logo() {
  return (
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Congi-Lock</span>
        <img className="h-8 w-auto" src="./logo/logo.png" alt="" />
      </a>
    </div>
  );
}
