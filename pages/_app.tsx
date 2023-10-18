import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";

const rubikFont = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${rubikFont.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
