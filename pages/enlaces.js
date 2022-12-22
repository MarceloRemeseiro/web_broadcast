import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import GetEnlaces from "./api/getEnlaces";
import Link from "next/link";

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
        <div className="container flex justify-center items-center gap-10">
          <div className="container  bg-dark rounded">
            <div class="grid grid-cols-3 gap-4">
              {datos.map((item) => (
                <div
                  key={item.properties.link.url}
                  className="w-full h-64 object-cover rounded-lg shadow-md gap-12"
                >
                  <h1>{item.properties.PROGRAMA.select.name}</h1>
                  <h5> {item.properties.titulo.title[0].plain_text}</h5>
                  <Link href={item.properties.link.url} as={item.properties.link.url} target="_blank">
                    <h6>ACCEDER</h6>
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
