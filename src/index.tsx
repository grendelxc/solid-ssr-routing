import express from "express";

import { renderToString } from "solid-js/web";
import App from './App';

const app = express();
const port = 8080;

app.get("(.*)", (req, res) => {
  let html;
  try {
    html = renderToString(() => <App />);
  } catch (err) {
    console.error(err);
  } finally {
    res.send(html);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
