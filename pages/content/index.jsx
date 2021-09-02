import Layout from "../../react-components/Layaout/Layout";
import Grid_ from "../../react-components/Grid/Grid";
import axios from "axios";
import Link from "next/link";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Content({ data }) {
  console.log(data[0].title);
  return (
    <Layout>
      <Grid_>
        <Contenido />
      </Grid_>
    </Layout>
  );
}

function Contenido({ data }) {

  return (
    <Col>
      <Link href="">
        <a className="no-link">
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>ola</Card.Title>
            </Card.Body>
          </Card>
        </a>
      </Link>
    </Col>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/data/content`);
  return {
    props: { 
      data: res.data,
    },
  };
}
