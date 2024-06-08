import Head from "next/head";
import Herobaner from "./Components/H/Herobaner";
import Layout from "./Components/L/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - UDTech</title>
        <meta
          name="description"
          content="Innovation to tech. Access your skills with Professionals Sugestions."
        />
      </Head>
      <Layout>
        <div className="flex flex-col">
          <Herobaner />
        </div>
      </Layout>
    </>
  );
}
