import { Header } from './components/Header';
import { UserInput } from './components/UserInput';
import { Results } from './components/Results';
import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });


  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput, 
            [inputIdentifier]: +newValue //+ is forcing for a number value
        };
    });
}

  return (
    <>
      <Header/>
      <UserInput onChange={handleChange} userInput={userInput}  />
      {!inputIsValid && (<p style={{ textAlign: "center" }}>Please put a positive value</p>) }
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
