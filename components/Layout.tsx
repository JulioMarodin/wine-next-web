import Head from "next/head";
import React from "react";
import { LayoutStyled } from "./Layout.styled";
import { Props } from "./Layout.types";

export function Layout({title}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <LayoutStyled>
        <div className="layoutOptions">
          <nav>WIINE</nav>
          <nav>Clube</nav>
          <nav>Loja</nav>
          <nav>Produtores</nav>
          <nav>Ofertas</nav>
          <nav>Eventos</nav>
          <nav>Search</nav>
          <nav>Profile</nav>
          <nav>Pitcure</nav>
        </div>
        <main>main</main>
        <footer>footer</footer>
      </LayoutStyled>
    </>
  )
}
