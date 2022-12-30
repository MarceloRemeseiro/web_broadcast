import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Programa from "../components/programas/programa";
import Get from "./api/get"

export const getServerSideProps = Get("PROGRAMA",'LEC').getServerSideProps;


  export default function lec({ datos }) {
    return (
      <div>         
      <main>  
        <Navbar />
        <div className="m-28"></div>
        <div>
          <Header data="Máquinas LEC" />
        </div>
        <div className="container flex justify-center items-center gap-10">
          <div className="container  bg-dark rounded">
            <Programa  data ={datos}/>
          </div>   
        </div>
        <Footer />
      </main>
    </div>
    );
  }