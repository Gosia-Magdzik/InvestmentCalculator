import { UserInputWrapper,
        InputGroup,
        Label,
        Input,
} from './styled'

export const UserInput = ({ onChange, userInput }) => {

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
                        onChange('initialInvestment', event.target.value)
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
                        onChange('annualInvestment', event.target.value)
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
                        onChange('expectedReturn', event.target.value)
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
                        onChange('duration', event.target.value)
                    }
                /> 
            </p>
        </InputGroup>
    </UserInputWrapper>
  )
}
