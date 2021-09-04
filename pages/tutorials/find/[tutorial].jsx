import { useRouter } from 'next/router'
import {RenderContent} from "../../../react-components/bootstrap-services";
import Layout from '../../../components/Layout';

/* PARA BUSCAR UN SOLO TUTORIAL */

export default function FindTutorial() {
    const router = useRouter();
    const { tutorial } = router.query;
    return (
        <Layout 

        />
    )
}

