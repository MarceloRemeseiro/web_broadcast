import { Formik, Form, Field } from 'formik';
import { Client } from '@notionhq/client';


const ManageData = () => (
  <Formik
    initialValues={{
      fecha: '',
      programas: [],
      control: '',
    }}
    onSubmit={async (values, { setSubmitting }) => {
      // Envía los datos a la base de datos de Notion
      const notion = new Client({
        auth: process.env.NOTION_API_KEY,
      });
      await notion.pages.create({
        parent: {
          database_id: 'b3e414c59aaf4c3a81f87ec3be38f369',
        },
        properties: {
          fecha: {
            title: [
              {
                text: {
                  content: values.fecha,
                },
              },
            ],
          },
          programas: {
            multi_select: values.programas,
          },
          control: {
            select: values.control,
          },
        },
      });
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <label htmlFor="fecha">Fecha:</label>
        <Field type="date" name="fecha" />
        <br />
        <label htmlFor="programas">Programas:</label>
        <Field name="programas" component="select" multiple>
          <option value="programa-1">Programa 1</option>
          <option value="programa-2">Programa 2</option>
        </Field>
        <br />
        <label htmlFor="control">Control:</label>
        <Field name="control" component="select">
          <option value="control-1">Control 1</option>
          <option value="control-2">Control 2</option>
        </Field>
        <br />
        <button type="submit" className='text-white bg-green-700' disabled={isSubmitting}>
          Enviar
        </button>
      </Form>
    )}
  </Formik>
);

export default ManageData