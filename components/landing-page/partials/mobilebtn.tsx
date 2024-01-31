"use client";

import { MouseEvent } from "react";

export default function Mobilebtn({ setMobileMenuOpen }: any) {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={(e: MouseEvent<HTMLButtonElement>) => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icon">
            <path
              id="Vector"
              d="M4.45312 12H20.4531"
              stroke="#4B5563"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M4.45312 6H20.4531"
              stroke="#4B5563"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_3"
              d="M4.45312 18H20.4531"
              stroke="#4B5563"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}
