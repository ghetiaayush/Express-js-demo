import express from "express";
import home from "./pages/home.js";
import about from "./pages/about.js";
import contact from "./pages/contact.js";
import demo, { demo2 } from "./pages/demo.js"; //example of more than one export of function from same file

const app = express();

app.get("", (req, resp) => {
  resp.send(home());
});

app.get("/about", (req, resp) => {
  resp.send(about());
});

app.get("/contact", (req, resp) => {
  resp.send(contact());
});

app.get("/demo", (req, resp) => {
   resp.send(demo());
});

app.get("/demo2", (req, resp) => {
   resp.send(demo2())});

app.listen(3200);

/* 

Explanation:

app.get() – Handles GET requests.
resp.send() – Sends HTML or plain text response.
app.listen(3200) – Server listens on port 3200.

*/