import express from "express";
import path from "path";
import submit from "./pages/submit.js";

// import home from "./pages/home.js";
// import about from "./pages/about.js";
// import contact from "./pages/contact.js";
// import demo, { demo2 } from "./pages/demo.js"; //example of more than one export of function from same file
// import login from "./pages/login.js";


//created absolute path to the view folder to avoid repeating the same code in every route handler
const absPath = path.resolve("view");

const app = express();

// serve static assets from public directory (css, js, images)
app.use(express.static('public'));

app.get("/", (req, resp) => {
  // resp.send(home());
  // const absPath = path.resolve("view/home.html");
  resp.sendFile(absPath+"/home.html");
});


app.get("/login", (req, resp) => {
  // resp.send(login());
  // const absPath = path.resolve("view/login.html");
  resp.sendFile(absPath+"/login.html");
});

 /* When the form is submitted, this route handles the POST request and returns a success message. */
app.post("/submit", (req, resp) => {
  resp.send(submit());
});

app.get("/about", (req, resp) => {
  //resp.send(about());
  // const absPath = path.resolve("view/about.html");
  resp.sendFile(absPath+"/about.html");
});

app.get("/contact", (req, resp) => {
  //resp.send(about());
  // const absPath = path.resolve("view/contact.html");
  resp.sendFile(absPath+"/contact.html");
});

//CODE FOR 404 error page
app.use((req, resp) => {
 // const absPath = path.resolve("view/404.html");
  resp.status(404).sendFile(absPath+"/404.html");
});


// app.get("/contact", (req, resp) => {
//   resp.send(contact());
// });
// app.get("/demo", (req, resp) => {
//    resp.send(demo());
// });

// app.get("/demo2", (req, resp) => {
//    resp.send(demo2())});

app.listen(3200);



/* 

Explanation:

app.get() – Handles GET requests.
app.post() – Handles POST requests.
req – Represents the request object.
resp – Represents the response object.
resp.send() – Sends HTML or plain text response.
resp.sendFile() – Sends a file as response.
app.listen(3200) – Server listens on port 3200.

*/