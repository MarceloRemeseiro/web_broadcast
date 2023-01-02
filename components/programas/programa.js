import React from "react";


const Programa = ({data}) => {
  
   return (
    <>
      <div className="flex flex-col mb-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white bg-fondo px-6 py-4 text-center"
                    >
                      CATERGORIA
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white bg-fondo px-6 py-4 text-center"
                    >
                      NOMBRE
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white bg-fondo px-6 py-4 text-center"
                    >
                      IP
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white bg-fondo px-6 py-4 text-center"
                    >
                      IP DANTE
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white bg-fondo px-6 py-4 text-center"
                    >
                      PARSEC
                    </th>                  
                  </tr>
                </thead>
                <tbody className="text-white bg-medium text-center">
                {data.map((item) => (
                    <tr className="border-b " key="">
                      
                      <td className="  px-6 py-4 whitespace-nowrap">
                      {item.properties.CATEGORIA.select.name}
                      </td>
                      <td className="  px-6 py-4 whitespace-nowrap">
                      {item.properties.NOMBRE.select.name}
                      </td>
                      <td className="  px-6 py-4 whitespace-nowrap">
                      {item.properties.IP.rich_text.length > 0 ? item.properties.IP.rich_text[0].plain_text : 'No'}
                      </td>
                      <td className="  px-6 py-4 whitespace-nowrap">
                      {item.properties.IP_DANTE.rich_text.length > 0 ? item.properties.IP.rich_text[0].plain_text : 'No'}
                      </td>
                      <td className="  px-6 py-4 whitespace-nowrap">
                      {item.properties.PARSECROLL.rollup.array.length > 0 ? item.properties.PARSECROLL.rollup.array.map(multiSelectOption => multiSelectOption.title[0].plain_text).join(', ') : 'No'}
                      </td>                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programa;
