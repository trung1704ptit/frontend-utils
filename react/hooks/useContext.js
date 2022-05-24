import React, { useContext, createContext, useState } from "react";

const RandomPasswordContext = createContext();
const SetRandomPasswordContext = createContext();

function RandomPassword() {
  const randomPassword = useContext(RandomPasswordContext);
  return <div>Password: {randomPassword}</div>;
}

function PasswordGenerator() {
  let text = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const setRandomNumber = useContext(SetRandomPasswordContext);
  const generateRandomNumber = () => {
    for (let i = 1; i < 7; i++) {
      setRandomNumber(
        (text += characters.charAt(
          Math.floor(Math.random() * characters.length)
        ))
      );
    }
  };
  return (
    <button onClick={generateRandomNumber}>Generate Random Password</button>
  );
}

const App = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  return (
    <div>
      <RandomPasswordContext.Provider value={randomNumber}>
        <SetRandomPasswordContext.Provider value={setRandomNumber}>
          <RandomPassword />
          <PasswordGenerator />
        </SetRandomPasswordContext.Provider>
      </RandomPasswordContext.Provider>
    </div>
  );
};

export default App;
