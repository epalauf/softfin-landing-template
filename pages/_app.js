import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />
}
