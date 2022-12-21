import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Script from "next/script";
import Superliga from "../components/programas/superliga";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Image from "next/image";

export default function Home({ ValorantNacional,superligaPrimera }) {
  return (
    <div>
      <Head>
        <title>Broadcast LVP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>

        <Navbar />
        <div className="m-28"></div>
        <div>
          <Header data="WEB BROADCAST LVP"/>
        </div>
        <div className="container flex justify-center items-center gap-10">
          <div className="w-full h-full overflow-hidden">
          <Image src="/racks.jpg" 
          width={800}
          height={800}
          className="opacity-25 w-full h-full object-cover"
          alt="fondo"
          />
          </div>   
        </div>
        <Footer />
      </main>
    </div>
  );
}

