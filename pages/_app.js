import Head from "next/head";
import React from "react";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

// own css files here
import "../assets/styles/customcss.css";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

export default function App({ Component, pageProps, router }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  const pageTitle = Component.pageTitle || "Accueil";

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Coq Trotteur - Plateforme pour vous aider à proposer des produits et services en ligne"
        />
        <meta
          name="keywords"
          content="Coq Trotteur, marché en ligne, produits, services"
        />
        <meta name="author" content="coq-trotter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Coq Trotteur | {pageTitle}</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ApolloProvider>
    </>
  );
}
