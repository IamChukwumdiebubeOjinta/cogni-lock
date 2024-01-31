import { NAV_ITEMS } from "@/lib/data";
import Link from "next/link";
import React, { FC } from "react";
import Button from "./Button";

const Menu: FC = () => (
  <div className="flex gap-8 items-center">
    <ul className="flex gap-4 items-center">
      {NAV_ITEMS.map(({ name, href }, idx) => (
        <li key={idx}>
          <Link href={href}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
    <ul className="flex gap-4 items-center">
      <span>|</span>
      <Button className="border border-[#380017] text-[#380017]" text="Login" />
    </ul>
  </div>
);

export default Menu;
