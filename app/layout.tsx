import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Providers } from "./providers";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "E-commerce Store",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="layout">
            <header>
              <Navbar />
            </header>
            <main className="main-container">{children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
