import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Programa from "../components/programas/programa";
import Get from "./api/get"

export const getServerSideProps = Get("PROGRAMA",'VALORANT INT').getServerSideProps;


  export default function gameChangers({ datos }) {
    return (
      <div>         
        <main>  
          <Navbar />
          <div className="m-28"></div>
          <div>
            <Header data="Máquinas GAME CHANGERS" />
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