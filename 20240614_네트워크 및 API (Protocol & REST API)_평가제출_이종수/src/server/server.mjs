import express from "express";
import path, { dirname } from "path";
import fs from "node:fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve();

const app = express();

app
  .get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `public/index.html`));
  })
  .listen(8080, () => {
    console.log(`the server is processing on http://localhost:8080`);
  });
