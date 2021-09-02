import Layout from "./../react-components/Layaout/Layout";
import axios from "axios";
import { _Sample } from "./../react-components/icons/react-bootstrap";

export default function Home({ res }) {
  return (
    <Layout title="" >
      <Content res={res} />
    </Layout>
  );
}
function Content({ res }) {

  return (
    <>
    <p>ola</p>
        <p>{process.env.TEST}</p>
      <_Sample width="5%" />
      {res.map((Res, i) => {
        return <p key={i}>{Res.name}</p>
      })}
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/data/home");
  return {
    props: { res: res.data },
  };
}
