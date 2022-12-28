import { Client } from 'notion-client';

export default function ManageData(action, data) {
  return {
    props: {
      getServerSideProps: async () => {
        const notion = new Client({
          auth: process.env.NOTION_API_KEY,
        });

        switch (action) {
          case 'create': {
            const respuesta = await notion.pages.create({
              parent: {
                database_id: 'b3e414c59aaf4c3a81f87ec3be38f369',
              },
              properties: data.properties,
            });
            console.log(respuesta);
            break;
          }
          case 'update': {
            const respuesta = await notion.pages.update({
              pageId: data.pageId,
              properties: data.properties,
            });
            console.log(respuesta);
            break;
          }
          case 'delete': {
            const respuesta = await notion.pages.delete({
              pageId: data.pageId,
            });
            console.log(respuesta);
            break;
          }
          default: {
            throw new Error('Invalid action');
          }
        }
      },
    },
  };
}
