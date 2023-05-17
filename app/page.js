/* import { CeoImg } from "@/components/CeoImg"; --*/
import { Header } from "/components/header";
import { Button } from "@/components/Button";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div className="containerText">
          <h1>
            A better way <br></br>to create
          </h1>
          <p>
            Bring your creative vision to life as you stream <br></br> work
            sessions in HD, video chat whit your team <br></br>and collaborate
            live - no matter where you are.
          </p>
          <div className="buttonText">
            <Button isTransparent={false} children={"GET STARTED"} />
            <Button isTransparent={true} children={"WATCH DEMO"} />
          </div>
        </div>
        <Image
          className="imagemLateral"
          src="/fotoLateral.png"
          width={535}
          height={535}
          alt="foto dos idealizadores"
        />
      </div>
    </>
  );
}
