import { Client } from "@notionhq/client";


export default function Get(programa) {
    return {
      getServerSideProps: async () => {
        const notion = new Client({ auth: process.env.NOTION_API_KEY });
    
        const respuesta = await notion.databases.query({
          database_id: "832742f9d10248f0b192c4387c85fd26",
          filter: {
            property: "PROGRAMA",
            multi_select: {
              contains: programa
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
    }
  }

 

