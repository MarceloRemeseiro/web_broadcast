import FormularioFechas from "../components/calendario/formFechas";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Get from "./api/get";
import GetFechas from "./api/getFechas";
import Calendario from "../components/calendario/calendario";
import { useState } from "react";

export async function getServerSideProps() {
  const programas = await Get("PROGRAMA").getServerSideProps();
  return {
    props: {
      datos: programas.props.datos,
    },
  };
}

export default function Formulario({ datos }) {
  

  return (
    <div>
      <main>
        <Navbar />
        <div className="m-28"></div>
        <div>
          <Header data="Formulario Fechas" />
        </div>
        <div className="container flex items-center gap-10">
          <div className="container bg-dark rounded">
          <FormularioFechas datos={datos}/>
            
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
