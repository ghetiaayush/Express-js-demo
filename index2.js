const express = require("express");
const app = express();

app.get("", (req, resp) => {
  resp.send("<h1>Basic Node js example</h1>");
});

app.get("/about", (req, resp) => {
  resp.send("<h1>This is about page</h1>");
});

app.get("/contact", (req, resp) => {
  resp.send("<h1>This is contact page</h1>");
});

app.listen(3200);

/* 

Note: 
to use this file make sure to change "type": "module" to "type": "commonjs" in package.json

Explanation:
app.get() – Handles GET requests.
resp.send() – Sends HTML or plain text response.
app.listen(3200) – Server listens on port 3200.

*/