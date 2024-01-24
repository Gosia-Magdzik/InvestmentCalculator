import { Header } from './components/Header';
import { UserInput } from './components/UserInput';
import { Results } from './components/Results';
import { useState } from 'react';
import { styled } from 'styled-components';

const Center = styled.p`
  text-align: center;
`

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
      {!inputIsValid && (<Center>Please put a positive value</Center>) }
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
