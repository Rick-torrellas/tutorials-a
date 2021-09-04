import tutorialsRaw from "../../../../data/tutorials";


export default function handler(req, res) {
    const { content } = req.query;
/* Para buscar todos los tutoriales relacionados con un contenido dado */
let tutorials = [];
const value = tutos.content_name;
tutorialsRaw.map((tutos) => {
  if (value == content) {
      tutorials.push(tutos);
  }
}) 
    res.status(200).json(tutorials);
  }