import { ReactNode } from "react";
import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { server } from "../config/index";
type MetaProps = {
  title: string;
  description: string;
};
type PageProps = {
  meta: MetaProps;
  children?: ReactNode;
};
const page = ({ meta, children }: PageProps) => {
  return (
    <>
      <Head>
        <title>{`| Akunorogia | ${meta.title}`}</title>
        <meta name="desctiption" content={meta.description} />
        <meta property="og:title" content="Akunorogia" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={server} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="min-h-screen bg-gradient-to-r from-mineDarker ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default page;
