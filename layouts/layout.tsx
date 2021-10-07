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
        <title>{meta.title}</title>
        <meta name="desctiption" content={meta.description} />

        <meta property="og:title" content={"Shinigami no Akunorogia"} />
        <meta
          property="og:description"
          content={"Warewa Doragon Sureiyā Akunorogia!"}
        />
        <meta property="og:site_name" content={"Shinigami no Akunorogia"} />
        <meta property="og:url" content={server} />
        <meta property="og:type" content="website" />
        <meta
          name="image"
          property="og:image"
          content="https://i.imgur.com/Zxf9RKI.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className=" min-h-screen bg-gradient-to-r from-mine2Darker dark:from-mineDarker   ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default page;
