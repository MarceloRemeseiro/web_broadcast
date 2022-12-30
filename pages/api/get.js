import { Client } from "@notionhq/client";


export default function Get(propiedad="SERIAL",programa="",database="832742f9d10248f0b192c4387c85fd26", orden="SERIAL") {
    return {
      getServerSideProps: async () => {
        const notion = new Client({ auth: process.env.NOTION_API_KEY });
    
        const respuesta = await notion.databases.query({
          database_id: database,
          filter: {
            property: propiedad,
            multi_select: {
              contains: programa
            },
          },
          sorts: [
            {
              property: orden,
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

 

