import { Client } from "@notionhq/client";


export default function GetFechas() {
    return {
      getServerSideProps: async () => {
        const notion = new Client({ auth: process.env.NOTION_API_KEY });
    
        const respuesta = await notion.databases.query({
          database_id: "b3e414c59aaf4c3a81f87ec3be38f369",
          
         });
    
        return {
          props: {
            fechas: respuesta.results,
          },
        };
      }
    }
  }

 

