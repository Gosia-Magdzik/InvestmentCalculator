import React, { useState } from 'react';
import { UserInputWrapper,
        InputGroup,
        Label,
        Input,
} from './styled'

export const UserInput = () => {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput, 
                [inputIdentifier]: newValue
            }
        })
    }

    return (
    <UserInputWrapper>
        <InputGroup>
            <p>
                <Label>Initial Investment</Label>
                <Input 
                    type="number" 
                    required
                    value={userInput.initialInvestment}
                    onChange={(event) => 
                        handleChange('initialInvestment', event.target.value)
                    }
                />
            </p>
            <p>
                <Label>Annual Investment</Label>
                <Input 
                    type="number" 
                    required
                    value={userInput.annualInvestment}
                    onChange={(event) => 
                        handleChange('annualInvestment', event.target.value)
                    }
                />
            </p>
        </InputGroup>
        <InputGroup>
            <p>
                <Label>Expected Return</Label>
                <Input 
                    type="number" 
                    required
                    value={userInput.expectedReturn}
                    onChange={(event) => 
                        handleChange('expectedReturn', event.target.value)
                    }
                />        
            </p>
            <p>
                <Label>Duration</Label>
                <Input 
                    type="number" 
                    required
                    value={userInput.duration}
                    onChange={(event) => 
                        handleChange('duration', event.target.value)
                    }
                /> 
            </p>
        </InputGroup>
    </UserInputWrapper>
  )
}
