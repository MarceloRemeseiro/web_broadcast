import { Client } from "@notionhq/client";


const yesterday = new Date(Date.now() - 86400000);
const yesterdayISO = yesterday.toISOString();


export default function GetFechas(programa = "") {
  return {
    getServerSideProps: async () => {
      const notion = new Client({ auth: process.env.NOTION_API_KEY });

      const respuesta = await notion.databases.query({
        database_id: "b3e414c59aaf4c3a81f87ec3be38f369",
        filter: {
          and: [
            {
              property: "programas",
              rich_text: {
                contains: programa,
              },
            },
            {
              property: "fecha",
              date: {
                after: yesterdayISO,
              },
              
            },
           ],
        },

        sorts: [
          {
            property: "fecha",
            direction: "ascending",
          },
          {
            property: "programas",
            direction: "ascending",
          },
        ],
      });

      return {
        props: {
          fechas: respuesta.results,
        },
      };
    },
  };
}
