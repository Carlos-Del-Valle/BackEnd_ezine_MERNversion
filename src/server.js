const express = require("express");
const bodyParser = require("body-parser")

const articlesInfo = {
    "learn-react": {
        comments: [],
    },
    "cabezazo-contra-teclado": {
        comments: [],
    },
    "barrigazo-contra-esquina": {
      comments: [],
    },
};

const app = express();

app.use(bodyParser.json());

//Testing:
//app.get("/hello",(req, res) => res.send("Hello"));
//app.post("/hello", (req,res) => res.send(`Hello ${req.body.name}`));
//app.post("/hello/:name", (req,res) => res.send(`Hello ${req.params.name}`));

app.post('/api/articles/:name/add-comments', (req, res) => {
    const {username, text} = req.body
    const articleName = req.params.name

    articlesInfo[articleName].comments.push({ username, text });
    res.status(200).send(articlesInfo[articleName]);
});

app.listen (8000, () => console.log("listening on port 8000"));

