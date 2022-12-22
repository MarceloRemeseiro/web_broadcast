import { Client } from "@notionhq/client";


export default function GetEnlaces() {
    return {
      getServerSideProps: async () => {
        const notion = new Client({ auth: process.env.NOTION_API_KEY });
    
        const respuesta = await notion.databases.query({
          database_id: "e2a75febc30046f98ce1f33863f690aa",
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
