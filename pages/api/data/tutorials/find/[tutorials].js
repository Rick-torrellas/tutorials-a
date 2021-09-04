import tutorialsRaw from "../../../../../data/tutorials";

export default function handler(req, res) {
    const { tutorial } = req.query;
    const query = tutorial.toUpperCase();
let tutorials = [];
/* busca varios tutoriales */

for (let index = 0; index < tutorialsRaw.length; index++) {
    const element = tutorialsRaw[index];
    const value = element.title.toUpperCase();
    if (value.indexOf(query) > -1) {
        tutorials.push(element);
    }
}
    res.status(200).json(tutorials);
  }