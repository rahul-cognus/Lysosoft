import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/layout/Header";
import Footer from "@/app/ui/layout/Footer";


const quicksand = Quicksand({ subsets: ["latin"],
  weight: ["400", "500", "700"],
   });

export const metadata = {
  title: "Lysosoft - Lyft Your Digital Growth",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} h-screen bg-black`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
