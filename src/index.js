import express from "express";
import markoPlugin from "@marko/express";
import template from "./template.marko";

const app = express();
app.use(markoPlugin()); // Enables `res.marko(template, input)`

app.get("/", function (req, res) {
  res.marko(template, {
    name: "Frank",
    count: 30,
    colors: ["red", "green", "blue"]
  });
});

app.listen(8080);
