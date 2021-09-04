
import axios from "axios";
import Link from "next/link";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useRouter } from 'next/router'

import Layout from "../../components/Layout";
import Grid_ from "../../react-components/Grid/Grid";
import config from "./../../config";
/* 
PARA BUSCAR LOS TUTORIALES DE UN CONTENIDO */

export default function Content({ data }) {
    const router = useRouter();
    const { content } = router.query;
    process.env.NEXT_PUBLIC_CONTENT = content;
    return (
      <Layout>
          <p>EMPANADA</p>
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
  const href = `${config.host}/content/${title}`;
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
  const content = process.env.NEXT_PUBLIC_CONTENT
  console.log(content)
    const res = await axios.get(`${config.host}/api/data/tutorials/${content}`);
    return {
      props: { 
        data: res.data,
      },
    };
  }