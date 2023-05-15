import Raposa from "next/image";

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

      <nav id="buttonsHeader">
        <button id="gtButton">GET STARTED</button>
        <button id="SignIn">SIGN IN</button>
      </nav>
    </header>
  );
}
