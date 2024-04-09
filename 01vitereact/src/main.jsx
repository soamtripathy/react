import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <>
      <h1>Custom App</h1>
    </>
  );
}
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Google
  </a>
);
const anotherUser = "CHai aur code"
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google", 
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
