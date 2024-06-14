import express from "express";
import path from "node:path";
const __dirname = path.resolve();

const app = express();

app.set(`port`, process.env.PORT ?? 8080);

app.use("/src", express.static(path.join(__dirname, "/src")));

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `public/index.html`));
});

app.listen(app.get(`port`), () => {
  console.log(`the server is processing on http://localhost:8080`);
});
