'use client'

import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <div className="px-8">{props.children}</div>
  </div>
);

export default Layout;
