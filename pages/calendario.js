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
              <Calendario  datos ={fechas}/>
            </div>   
          </div>
          <Footer />
        </main>
      </div>
    );
  }