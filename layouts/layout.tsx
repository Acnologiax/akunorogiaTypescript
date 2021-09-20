import { ReactNode } from "react";
import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
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
        <title>{`${meta.title} || Akunorogia`}</title>
        <meta name="desctiption" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default page;
