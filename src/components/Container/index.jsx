// To solve the problems of different screen sizes from my website and their website

import React from "react";
import BootstrapContainer from "react-bootstrap/Container";

export default function Container({ children }) {
  return <BootstrapContainer>{children}</BootstrapContainer>;
}


