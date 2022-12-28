import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import GetEnlaces from "./api/getEnlaces";
import Link from "next/link";
import { BasicButton } from "../components/buttons/buttons";
export const getServerSideProps = GetEnlaces().getServerSideProps;

export default function Enlaces({ datos }) {
  console.log(datos);
  return (
    <div>
      <main>
        <Navbar />
        <div className="m-28"></div>
        <div>
          <Header data="Enlaces de interes" />
        </div>
        <div className=" flex justify-center items-center ">
          <div className="container  p-14">
            <div class="grid grid-cols-3 gap-10 ">
              {datos.map((item) => (
                <div
                  key={item.properties.link.url}
                  className="w-full h-64 object-cover bg-zinc-700 rounded-lg shadow-md gap-12"
                >
                  <h1 className="text-3xl text-center m-5">
                    {item.properties.PROGRAMA.select.name}
                  </h1>
                  <h5 className="mb-5 text-center">
                    {" "}
                    {item.properties.titulo.title[0].plain_text}
                  </h5>
                  <Link
                    href={item.properties.link.url}
                    as={item.properties.link.url}
                    target="_blank"
                  >
                    <div className="text-center">
                      <BasicButton>ACCEDER</BasicButton>
                    </div>
                  </Link>
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
