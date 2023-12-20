import Link from "next/link";
import Card from "./components/Card/Card";
import SmallCard from "./components/SmallCard/SmallCard";
import ImageCard from "./components/ImageCard/ImageCard";
import Search from "./components/Search/Search";

export default function Home() {
  return (
    <main className="bg-background">
      <div className="w-screen bg-background-2">
        <div className="py-8 mx-auto max-w-screen-xl">
          <h3 className="m-0 font-bold h-8 text-xl text-white">
            ¿Cual es tu proximo destino?
          </h3>
        </div>
      </div>

      {/*Form Vuelos */}
      <Search />


      <div className="p-6">

      </div>

      <div className="mx-auto max-w-screen-xl">
        <ImageCard header="ESCAPE TO THE SUNSHINE" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." imageSrc="imagenes\paisaje.jpg" />

      </div>

      <div className=" p-4">

      </div>

      {/*Cartas */}
      <div className="mx-auto max-w-screen-xl gap-10 flex justify-center items-center">

        <Card imageSrc="\imagenes\card.jpg" heading="Nicaragua" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Card imageSrc="\imagenes\card1.jpg" heading="Carta 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>



      <div className="max-w-screen-xl mx-auto ">
        <h2 className="text-text text-2xl my-3 font-semibold">Explora estadias en destinos de moda</h2>

        <div className="max-w-screen-xl mx-auto flex justify-between">
          <SmallCard heading="Paquera" text="Costa Rica" imageSrc="imagenes\Paquera.avif" />
          <SmallCard heading="Cartagena" text="Colombia" imageSrc="imagenes\Cartagena.avif" />
          <SmallCard heading="Ciudad de Guatemala" text="Guatemala" imageSrc="imagenes\CdGuatemala.avif" />
          <SmallCard heading="San Juan del Sur" text="Nicaragua" imageSrc="imagenes\San Juan.avif" />
        </div>

        <div className=" p-4">

        </div>





      </div>

    </main>
  );
}
