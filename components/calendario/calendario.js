import React, { useEffect, useState } from "react";


const Calendario = ({datos}) => {
   return (
    <>
      <div className="flex flex-col">
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
                      FECHA
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white bg-fondo px-6 py-4 text-center"
                    >
                      JORNADA
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white bg-fondo px-6 py-4 text-center"
                    >
                      PROGRAMA
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white bg-fondo px-6 py-4 text-center"
                    >
                      CONTROL
                    </th>                                 
                  </tr>
                </thead>
                <tbody className="text-white bg-medium text-center">
                {datos.map((item) => (
                    <tr className="border-b " key="">
                      <td className="  px-6 py-4 whitespace-nowrap">
                      {(new Date(item.properties.fecha.date.start)).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      {item.properties.jornada.title[0].plain_text}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      {item.properties.programas.rich_text[0].plain_text}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      {item.properties.control.rich_text[0].plain_text}
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

export default Calendario;
