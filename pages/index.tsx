import Head from "next/head";
import Herobaner from "./Components/H/Herobaner";
import Layout from "./Components/L/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>UDTech || Home</title>
        <meta name="description" content="Innovation to tech. Access your skills with Professionals Sugestions." />
      </Head>
      <Layout>
        <Herobaner />
      </Layout>
    </>
  )
}
