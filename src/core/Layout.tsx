import React from "react";
import SearchUsers from "./SearchUsers";
import { Link } from "react-router-dom";
import ToggleThem from "./ToggleThem";
import RouteConfig from './../config/router.json'

interface propsType {
  children: React.ReactNode;
  onChangeSearch: Function;
  displayInput?: boolean;
}

const logo = require("./../assets/images/chingal-logo.png") as string;

const Layout = ({
  children,
  onChangeSearch,
  displayInput = true,
}: propsType) => {
  return (
    <>
      <header className="bg-surface-100 border-b-2 border-surface-300 py-4">
        <div className="container flex justify-between  mx-auto items-center">
          <figure className="w-40">
            <img src={logo} alt="logo" />
          </figure>
          
          <div className="flex">
            {displayInput && (
              <SearchUsers
                onChange={(value: string) => onChangeSearch(value)}
              />
            )}
            <ToggleThem />
          </div>
        </div>
      </header>
      <div className="container mx-auto">{children}</div>
    </>
  );
};

export default Layout;
