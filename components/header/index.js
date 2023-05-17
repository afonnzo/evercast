import Raposa from "next/image";
import { Button } from "../Button";

export function Header() {
  return (
    <header id="header1">
      <nav id="logo">
        <Raposa src="/raposa.png" width={50} height={50} alt="" />
        <h2>Evercast</h2>
      </nav>
      <nav id="containerLista">
        <ul id="listaHeader">
          <li>WHY EVERYCAST</li>
          <li>WORKFLOWS</li>
          <li>PRICING</li>
          <li>SUPPORT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <div>
        <Button isTransparent={true}>GET STARTED</Button>
        <Button>SIGN IN</Button>
      </div>
    </header>
  );
}
