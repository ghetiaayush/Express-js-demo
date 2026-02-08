import express from "express";
import home from "./pages/home.js";
import about from "./pages/about.js";
import contact from "./pages/contact.js";
import demo, { demo2 } from "./pages/demo.js"; //example of more than one export of function from same file
import login from "./pages/login.js";
import submit from "./pages/submit.js";


const app = express();

app.get("/", (req, resp) => {
  resp.send(home());
});

app.get("/about", (req, resp) => {
  resp.send(about());
});

app.get("/contact", (req, resp) => {
  resp.send(contact());
});

//  Render html elements and forms
app.get("/login", (req, resp) => {
  resp.send(login());
});

/* When the form is submitted, this route handles the POST request and returns a success message. */
app.post("/submit", (req, resp) => {
  resp.send(submit());
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
app.post() – Handles POST requests.
req – Represents the request object.
resp – Represents the response object.
resp.send() – Sends HTML or plain text response.
app.listen(3200) – Server listens on port 3200.

*/