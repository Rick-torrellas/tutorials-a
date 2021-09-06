
import axios from "axios";
import Link from "next/link";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useRouter } from 'next/router'

import Layout from "../../components/Layout";
import Grid_ from "./../../react-components/Grid/Grid";
import config from "./../../config";
/* 
PARA BUSCAR LOS TUTORIALES DE UN CONTENIDO */

export default function Content({ data }) {
    const router = useRouter();
    const { content } = router.query;
    process.env.NEXT_PUBLIC_CONTENT = content;
    console.log(process.env.NEXT_PUBLIC_CONTENT);
    return (
      <Layout>
          <p>EMPANADASx</p>
        <Grid_ 
        md={6}
        >
          {data.map((Data,i) => {
            return (
              <Contenido 
              key={i}
              title={Data.title}
              content={content}
              />
            )
          })}
        </Grid_>
      </Layout>
    );
  }
  
  function Contenido({ title , content }) {
  const href = `${config.host}/tutorials/find/${title}?content_name=${content}`;
  console.log(href);
    return (
      <Col className="mb-5">
        <Link href={href}>
          <a className="no-link">
            <Card >
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
  const content = process.env.NEXT_PUBLIC_CONTENT;
  const query = `${config.host}/api/data/tutorials/${content}`;
  console.log(query)
    const res = await axios.get(query);
    console.log(res.data)
    return {
      props: { 
        data: res.data,
      },
    };
  }