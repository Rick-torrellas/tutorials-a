import tutorials from "../../../../data/tutorials";

export default function handler(req, res) {
  
    res.status(200).json(tutorials);
  }