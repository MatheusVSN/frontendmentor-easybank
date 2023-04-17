import Head from "next/head";

import NavigationBar from "@/components/navigation/navbar";
import MainComponent from "@/components/main-content/main";
import Footer from "@/components/main-content/sections/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easybank - Lading Page</title>
      </Head>

      <NavigationBar />
      <MainComponent/>
      <Footer/>
    </>
  );
}
