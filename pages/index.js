import { useQuery } from "@apollo/client";
import { NextSeo } from "next-seo";
import ListItems from "../components/Cards/ListItems";
import Page from "../layouts/Page";

export default function Index() {
  return (
    <>
      <NextSeo
        title="Coq Trotteur | Accueil"
        description="Découvrez c'est quoi Coq Trotteur?"
      />
      <h2 class="font-weight-bold mb-2">Boutique</h2>
      <p class="font-italic text-muted mb-4">
        Manipulez vos produits librement.
      </p>
      <div class="row pb-5 mb-4">
        <ListItems />
      </div>
    </>
  );
}

Index.layout = Page;
