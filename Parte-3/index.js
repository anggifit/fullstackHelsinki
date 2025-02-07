const express = require("express");
const app = express();

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>"); // Send a response to the client, stablishing the content type as text/HTML
});

app.get("/api/notes", (request, response) => {
  response.json(notes); // Send a response to the client, stablishing the content type as application/json
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id); // Convert the id parameter to a number
  const note = notes.find((note) => note.id === id);

  note ? res.json(note) : res.status(404).end();
});

app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);
  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
