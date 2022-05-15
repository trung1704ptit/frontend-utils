import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState(false);

  return (
    <div>
      <h2>{text === true ? "Sign In" : "Sign Up"}</h2>
      <button onClick={() => setText(!text)}>Change Text.</button>
    </div>
  );
};
export default App;
