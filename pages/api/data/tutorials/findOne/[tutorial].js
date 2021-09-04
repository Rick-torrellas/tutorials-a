import tutorialsRaw from "../../../../../data/tutorials";

export default function handler(req, res) {
  const { tutorial, content_name } = req.query;
  const queryTitle = tutorial.toUpperCase();
  let tutorials = [];
  /* te busca un solo tutorial */

  tutorialsRaw.map((tutos) => {
    let tutorialsTitle = tutos.title.toUpperCase();
    let tutorialsContentName = tutos.content_name.toUpperCase();
    const queryContentName = content_name.toUpperCase();
    if (tutorialsTitle == queryTitle && tutorialsContentName == queryContentName ) {
      tutorials.push(tutos);
    }
  });
  res.status(200).json(tutorials);
}
