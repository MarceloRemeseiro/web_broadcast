import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Calendario from "../components/calendario/calendario";
import GetFechas from "./api/getFechas";

export const getServerSideProps = GetFechas().getServerSideProps;

export default function CalendarioPage({ fechas }) {
  return (
    <div>
      <main>
        <Navbar />
        <div className="m-28"></div>
        <div>
          <Header data="CALENDARIO" />
        </div>

        <div className="container flex justify-center items-center gap-10">
          <div className="container  bg-dark rounded">
            <h1 className="text-3xl p-3">
              NOTA: En esta lista solo se muestran las siguientes 100 fechas.
              Puedes entrar en PROGRAMAS y allí verás las fechas de cada
              competición al completo
            </h1>
            <Calendario datos={fechas} />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
