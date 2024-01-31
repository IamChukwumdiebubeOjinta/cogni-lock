"use client";

// import { NavigationMenu, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import React, { FC, useState } from "react";
import Mobilebtn from "./partials/mobilebtn";
import Logo from "./partials/logo";
import Menu from "./partials/menu";

const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<Boolean>(false);

  return (
    <header className="bg-inherit">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Logo />
        <Menu />
        <Mobilebtn setMobileMenuOpen={setMobileMenuOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
