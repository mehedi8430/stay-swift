import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stay Swift",
  description: "One place stop for Hospitability",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar sideMenu={false} />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
