import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 30000,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {userInput.duration <= 0 ? <p className="center">Please enter duration greather than 0.</p> : <Results userInput={userInput} />}
    </>
  )
}

export default App;
