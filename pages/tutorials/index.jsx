
import axios from "axios";
import Link from "next/link";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useRouter } from 'next/router'

import Layout from "../../components/Layout";
import Grid_ from "../../react-components/Grid/Grid";
import config from "./../../config";
import {RenderContent} from "./../../react-components/bootstrap-services";

const path = "content/"

export default function Content({ data }) {
  const router = useRouter();
  const { pid } = router.query
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
            content={Data.content}
            />
          )
        })}
      </Grid_>
    </Layout>
  );
}

function Contenido({ title , icon , content }) {
console.log(2,content)
  return (
    <Col className="mb-5">
      <Link href={path+title}>
        <a className="no-link">
          <Card >
            <Card.Img variant="top" src={icon} />
            <Card.Body className="text-center">
              <Card.Title>{title}</Card.Title>
               {content.map((Content,i) => {
                  return (
                    <RenderContent 
                      key={i}
                      type={Content.type}
                      data={Content.data}
                      alt={Content.alt}
                      href={Content.href}
                      li={Content.li}
                      src={Content.src}
                    />
                  )
                })}
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
