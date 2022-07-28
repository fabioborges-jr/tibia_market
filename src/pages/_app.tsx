import { AppProps } from "next/app";
import Header from "../components/Header/Header";

import "../styles/global.scss"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Header />
    </>
  )
}

