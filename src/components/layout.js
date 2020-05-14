import React from "react";
import Footer from "./footer/footer";
export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
