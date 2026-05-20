import * as React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

//React element
const reactElement = <span>Composite Component</span>;
// root.render(ReactElement);

const Title = () =>{
  return (
    <h1 className="heading">
      {reactElement}
      Namaste from Title component🚀
    </h1>
  )
}



const SpanElement = <span>From span element</span>;
//JSX Functional Component
// const HeaderElelment = () => (
//   <div id="container">
//   <Title/>
//    <h1 className="">Namaste from JSX element🚀</h1>;
//    </div>
// );

const HeaderElelment = () => (
    <div id="container">

    <Title/>
        <h1 className="">Namaste from JSX element🚀</h1>
  </div>
)
root.render(<HeaderElelment/>);