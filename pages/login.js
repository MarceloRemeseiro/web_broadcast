import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/header";
import FormularioLogin from "../components/login/formularioLogin";

export default function login() {
    return (
      <div>
        <main>
          
          <Header data="WEB BROADCAST LVP" />
            <div className="container flex justify-center items-center gap-10">
            <div className="container  bg-dark rounded">
            <FormularioLogin/>
            </div>
          </div>
         
        </main>
      </div>
    );
  }