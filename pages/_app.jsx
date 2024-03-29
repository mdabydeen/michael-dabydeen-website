// import type { AppProps } from "next/app";

import { useEffect, useRef } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Analytics } from '../components/analytics/index'

import "../styles/globals.css"
import "focus-visible";

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function MyApp({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          <Analytics />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
