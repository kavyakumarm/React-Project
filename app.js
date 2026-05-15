import * as React from "react";
import { createRoot } from "react-dom/client";
const heading = React.createElement("h1", {
   id: "heading"
}, "Hello From React!");
const root = createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("h1", { id: "child", key: "c1" }, "Namaste React"),
    React.createElement("h2", { id: "child2", key: "c2" }, "Namaste React 2"),
    React.createElement("h3", { id: "child3", key: "c3" }, "Namaste React 3"),
  ]
);

root.render(parent);


