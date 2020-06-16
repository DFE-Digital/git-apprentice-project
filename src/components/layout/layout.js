import React from "react";
import Footer from "../footer/footer";
import "./layout.scss";

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
