import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [stars, setStars] = React.useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setStars} />
      <p>This movies was rated {stars} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating
      maxRating={5}
      size={24}
      messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
    />
    <StarRating
      maxRating={10}
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    />

    <Test /> */}
  </React.StrictMode>
);
