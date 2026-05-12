
const heading = React.createElement("h1", {
   id: "heading"
}, "Hello From React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

const parent = React.createElement("div", { id: "parent" },
   [React.createElement("h1", { id: "child" }, "Namaste React"),
   React.createElement("h2", { id: "child2" }, "Namaste React 2"),
   React.createElement("h3", { id: "child3" }, "Namaste React 3"),

   ]
);

root.render(parent)


