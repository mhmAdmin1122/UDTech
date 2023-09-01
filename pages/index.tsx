import Head from "next/head";
import Navbar from "./Components/N/Navbar";
import Herobaner from "./Components/H/Herobaner";

export default function Home() {
  return (
    <>
      <Head>
        <title>UDTech || Home</title>
        <meta name="description" content="Innovation to tech. Access your skills with Professionals Sugestions." />
      </Head>
      <Navbar />
      <Herobaner />
      <b className="mt-5">
        Comming Soon....! Development Process START foe site site completed on 12-Sep-2023
      </b>
    </>
  )
}
