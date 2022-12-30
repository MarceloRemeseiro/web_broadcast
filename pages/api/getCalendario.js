const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

module.exports = async function handler(req, res) {
  const { jornada, programas, control, fecha } = req.body;
  await notion.pages
    .create({
      parent: {
        database_id: "b3e414c59aaf4c3a81f87ec3be38f369" || "",
      },

      properties: {
        jornada: {
          title: [
            {
              type: "text",
              text: {
                content: jornada,
              },
            },
          ],
        },
        programas: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: programas,
              },
            },
          ],
        },

        control: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: control,
              },
            },
          ],
        },
        fecha: {
          date: {
            start: fecha,
          },
        },
      },
    })
    .then(() => {
      res.status(201).json({ message: "Sucesso!" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Ops, algo deu errado!" });
    });
};
