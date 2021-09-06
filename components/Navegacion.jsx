import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Image from "react-bootstrap/Image"
import config from "./../config";

export default function Navegacion() {
  return (
    <Nav>
      <Nav.Item>
      <Image src={config.icon} alt="Main Icon" width="50" className="me-5" />
      </Nav.Item>
      <Nav.Item>
        <Link href="/">
          <a className="nav-link active">Home</a>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/content">
          <a className="nav-link">Contenido</a>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/categorias">
          <a className="nav-link">Categorias</a>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/tutorials">
          <a className="nav-link">Tutoriales</a>
        </Link>
      </Nav.Item>
    </Nav>
  );
}
