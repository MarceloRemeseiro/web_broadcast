import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Script from "next/script";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { Client } from "@notionhq/client";
import Programa from "../components/programas/superliga";


export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
  
    const respuesta = await notion.databases.query({
      database_id: "832742f9d10248f0b192c4387c85fd26",
      filter: {
        property: "PROGRAMA",
        multi_select: {
          contains: "VALORANT INT"
        },
      },
      sorts: [
        {
          property: "SERIAL",
          direction: "ascending"
        }
      ]
      
    });
  
    return {
      props: {
        datos: respuesta.results,
      },
    };
  }
  export default function SuperligaPage({ datos }) {
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
            <Header data="Máquinas Game Changers"/>
          </div>
          <div className="container flex justify-center items-center gap-10">
            <div className="container  bg-dark rounded">
              <Programa  data ={datos}/>
            </div>   
          </div>
          <Footer />
        </main>
      </div>
    );
  }