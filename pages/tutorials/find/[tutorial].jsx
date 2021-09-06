import { useRouter } from 'next/router'
import {RenderContent} from "../../../react-components/bootstrap-services";
import Layout from '../../../components/Layout';


import axios from "axios";
import Link from "next/link";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Grid_ from "./../../../react-components/Grid/Grid";
import config from "./../../../config";

/* PARA BUSCAR UN SOLO TUTORIAL */

export default function FindTutorial({data}) {
    const router = useRouter();
    const { tutorial , content_name } = router.query;
    process.env.NEXT_PUBLIX_TUTORIAL = tutorial;
    process.env.NEXT_PUBLIX_CONTENT_NAME = content_name;
    console.log(process.env.NEXT_PUBLIX_TUTORIAL,process.env.NEXT_PUBLIX_CONTENT_NAME)
    return (
        <Layout>
          <p>EMPAN</p>
        <Grid_ 
        md={6}
        >
          {data.map((Data,i) => {
            return (
                <>
              <RenderContent
                key={i}
                type={Data.type}
                data={Data.data}
              />
              </>
            )
          })}
        </Grid_>
      </Layout>
    )
}

function Contenido({ title }) {
    const href = `${config.host}/tutorials/${title}`;
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
    const tutorial = process.env.NEXT_PUBLIX_TUTORIAL;
    const content_name = process.env.NEXT_PUBLIX_CONTENT_NAME;
    console.log(1, tutorial , content_name)
    const query = `${config.host}/api/data/tutorials/findOne/${tutorial}?content_name=${content_name}`;
    console.log(query)
      const res = await axios.get(query);
      return {
        props: { 
          data: res.data,
        },
      };
    }