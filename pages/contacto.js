import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Programa from "../components/programas/programa";
import GetInfo from "./api/GetInfo"
import Link from "next/link";

export const getServerSideProps = GetInfo("1c3ef8af8ec2489ab24cfd4ffb3f8470").getServerSideProps;

  export default function ContactoPage( {datos} ) {
    return (
      <div>         
          <main>
        <Navbar />
        <div className="m-28"></div>
        <div>
          <Header data="CONTACTOS" />
        </div>
        <div className=" flex justify-center items-center ">
          <div className="container  p-14">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 ">
              {datos.map((item) => (
                <div
                  key={item.properties.CORREO.url}
                  className="w-full h-64 object-cover bg-zinc-700 rounded-lg shadow-md gap-12"
                >
                  <h1 className="text-3xl text-center m-5">
                    {item.properties.CONTACTO.select.name}
                  </h1>
                  <h5 className="mb-5 text-center">
                    {" "}
                    {item.properties.titulo.title[0].plain_text}
                  </h5>
                  <h5 className="mb-5 text-center">
                    📩 {item.properties.CORREO.email}
                  </h5>
                  <h5 className="mb-5 text-center">
                    ☎ {item.properties.TELEFONO.phone_number}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
      </div>
    );
  }