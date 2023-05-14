import Navbar from "@/components/navbar";
import LeftBar from "@/components/leftBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Head from "next/head";

Router.events.on("routeChangeComplete", () => {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => link.classList.remove("active"));
  const currentPath = window.location.pathname;
  const link = document.querySelector(`.nav-link[href="${currentPath}"]`);
  if (link) {
    link.classList.add("active");
  }
});

const App = ({ Component, pageProps }: AppProps) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (pageProps.session) {
      setIsAuthenticated(true)
    }
  }, [pageProps.session]);

  return (
    <SessionProvider session={pageProps.session}>
      <div
        className="w-full min-h-screen sml:h-screen font-bodyFont bg-bodyColor text-textLight 
        overflow-x-hidden overflow-y-auto scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60"
      >
        <Head>
          <link rel="icon" href="/assets/images/j-icon.png"></link>
        </Head>
        {isAuthenticated && <Navbar />}
        <div className="xl:flex items-center gap-20 justify-between">
          {isAuthenticated && <LeftBar />}
          <div className="max-w-containerSmall mx-auto xs:px-10 xl:px-4">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};

export default App