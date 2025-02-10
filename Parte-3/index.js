const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json()); // Middleware to parse the body of the request as JSON
app.use(cors()); // Middleware to allow requests from other origins
app.use(express.static("dist")); // Middleware to serve static files

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

const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0; // Get the maximum id of the notes

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

app.post("/api/notes", (req, res) => {
  const body = req.body;
  if (!body.content) {
    return res.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    id: maxId + 1,
    content: body.content,
    important: body.important || false,
  };
  notes = notes.concat(note);
  res.json(note);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
