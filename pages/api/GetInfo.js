import { Client } from "@notionhq/client";


export default function GetInfo(database) {
    return {
      getServerSideProps: async () => {
        const notion = new Client({ auth: process.env.NOTION_API_KEY });
    
        const respuesta = await notion.databases.query({
          database_id: database,
          sorts: [
            {
              property: "orden",
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
