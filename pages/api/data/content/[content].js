import content from "../../../../data/content";
import { useRouter } from 'next/router';

function Param(){
    const router = useRouter();
    const { find } = router.query;
    return find;
}

export default function handler(req, res) {
    const find = Param();

    res.status(200).json(content);
  }