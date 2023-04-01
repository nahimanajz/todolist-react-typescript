import { FC, ReactElement } from "react";

export default function Header() {
  return (
    <div className="grid grid-cols-3 grid-flow-col gap-0 w-full bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
      <div className="row-span-3 bg-auto bg-no-repeat bg-center"></div>
      <div className="col-span-2 h-0">02</div>
      <div className="row-span-2 col-span-2 bg-white">03</div>
    </div>
  );
}
