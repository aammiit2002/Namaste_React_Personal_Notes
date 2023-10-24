import React from "react";
import ReactDOM from "react-dom/client";

//React Element = React.createElement => is an object => when rendered in DOM it becomes an HTML element.

//But the syntax below looks very bad as it is not easy to write as compared to simple html

//So the developers created JSX
// NOTE: JSX IS NOT A PART OF REACT, BOTH ARE DIFFERENT
//Because we can build react apps with using JSX all the big apps can be built
//But JSX makes the life of developers easy
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//HOW TO REACTE H1 TAG INSIDE JSX
//JSX IS NOT HTML INSIDE JAVASCRIPT 📌📌📌
//The jsxHeading here is a react element
const re = <span>I am </span>;
const jsxHeading = (
  <h1 className="head">{re}react element in react component</h1>
);

//React functional Component: It is a normal javascript function
const Title = () => <h1 className="header">Namaste React using JSX</h1>;

const HeadingComponent = () => (
  <div id="conatiner">
    <Title />
    <Title></Title>
    {Title()}
    {jsxHeading}
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
