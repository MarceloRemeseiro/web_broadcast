import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Programa from "../components/programas/programa";
import Get from "./api/get"
import GetFechas from "./api/getFechas";
import Calendario from "../components/calendario/calendario";

export async function getServerSideProps() {
  const programas = await Get("PROGRAMA", "WORLDS").getServerSideProps();
  const fechas = await GetFechas("WORLDS").getServerSideProps();
  return {
    props: {
      datos: programas.props.datos,
      fechas: fechas.props.fechas,
    },
  };
}

export default function worlds({ datos, fechas }) {
  return (
    <div>
      <main>
        <Navbar />
        <div className="m-28"></div>
        <div>
          <Header data="WORLDS" />
        </div>
        <Header data="MAQUINAS" />

        <div className="container flex justify-center items-center gap-10">
          <div className="container  bg-dark rounded">
            <Programa data={datos} />
            <Header data="FECHAS" />
            <Calendario datos={fechas} />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}