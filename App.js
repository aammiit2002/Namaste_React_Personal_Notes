//first react code
//This parent is an object

/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */
//three arguments - (object,attributes,children)
//why the object is empty-{}? because this is the place where we will give attributes to our tags
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);
// Just to create a simple nested elements of tags the react code looks so complex so to avoid that we use jsx

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //It is just putting the parent inside the div tag with id root.
