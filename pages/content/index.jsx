
import axios from "axios";
import Link from "next/link";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


import Layout from "../../components/Layout";
import Grid_ from "../../react-components/Grid/Grid";
import config from "./../../config";

export default function Content({ data }) {
  return (
    <Layout>
      <Grid_ 
      md={6}
      >
        {data.map((Data,i) => {
          return (
            <Contenido 
            key={i}
            title={Data.title}
            icon={Data.icon}
            />
          )
        })}
      </Grid_>
    </Layout>
  );
}

function Contenido({ title , icon }) {
const href = `${config.host}/tutorials/${title}`;
  return (
    <Col className="mb-5">
      <Link href={href}>
        <a className="no-link">
          <Card >
            <Card.Img variant="top" src={icon} />
            <Card.Body className="text-center">
              <Card.Title>{title}</Card.Title>
            </Card.Body>
          </Card>
        </a>
      </Link>
    </Col>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(`${config.host}/api/data/content`);
/*   console.log(res.data[0].content); */
  return {
    props: { 
      data: res.data,
    },
  };
}
