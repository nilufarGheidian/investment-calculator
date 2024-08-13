import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Resault from "./Components/Resault";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onchange={handleChange} />
      {!inputValid && <p className="center">plase enter the duration greater than zero.</p>}
      {inputValid && <Resault userInput={userInput} />}
    </>
  );
}

export default App;
