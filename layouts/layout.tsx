import { ReactNode } from "react";
import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { server } from "../config/index";
import { useRouter } from "next/router";

type MetaProps = {
  title: string;
  description: string;
};
type PageProps = {
  meta: MetaProps;
  children?: ReactNode;
};

const page = ({ meta, children }: PageProps) => {
  const router = useRouter();
  let home = false;
  if (router.pathname === "/") {
    home = true;
  } else {
    home = false;
  }
  return (
    <>
      <Head>
        <title>{home ? meta.title : `| Akunorogia | ${meta.title}`}</title>
        <meta name="desctiption" content={meta.description} />

        <meta property="og:title" content={"Shinigami no Akunorogia"} />
        <meta
          property="og:description"
          content={"Warewa Doragon Sureiyā Akunorogia!"}
        />
        <meta property="og:site_name" content={"Shinigami no Akunorogia"} />
        <meta property="og:url" content={server} />
        <meta property="og:type" content="website" />
        <meta name="image" property="og:image" content={""} />

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
