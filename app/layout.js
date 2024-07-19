/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navabar/page";
import { AuthProvider } from "./provider";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " className=" scrollbar-hide ">
      <body className={poppins.className}>
        <AuthProvider>
          <header className="sticky top-0 w-full bg-white z-50">
            <Navbar />
          </header>
          <main >
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
