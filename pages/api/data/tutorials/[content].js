import tutorialsRaw from "../../../../data/tutorials";


export default function handler(req, res) {
    const { content } = req.query;
    const query = content.toUpperCase();
/* Para buscar todos los tutoriales relacionados con un contenido dado */
let tutorials = [];
tutorialsRaw.map((tutos,i) => {
  const value = tutos.content_name.toUpperCase();

  if (value == query) {
      tutorials.push(tutos);
  }
}) 
    res.status(200).json(tutorials);
  }