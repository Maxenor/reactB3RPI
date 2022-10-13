import { useState } from 'react'; 

// needs a validateValue function parameter
const useInput = (validateValue) => { 

// useState declaration with variables enteredValue and isTouched, 2 setter functions with default values empty string & boolean false
  const [enteredValue, setEnteredValue] = useState(''); 
  const [isTouched, setIsTouched] = useState(false); 
  const [enteredPassword, setEnteredPassword] = useState(''); 
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const enteredPasswordIsValid = enteredPassword.length > 8; 

//using function passed we check if value is valid, we set what would be an error in variable hasError
  const valueIsValid = validateValue(enteredValue); 
  const hasError = (!valueIsValid && isTouched);
  const passwordHasError = (!enteredPasswordIsValid && enteredPasswordTouched)


// handles the action of changing the value by updating the state
  const valueChangeHandler = (event) => { 
    setEnteredValue(event.target.value); 
  }; 

// handles when the field was touched by user 
  const inputBlurHandler = (event) => { 
    setIsTouched(true); 
  }; 

  const passwordInputChangeHandler = (event) => { 
    setEnteredPassword(event.target.value); 

  }; 
  const passwordInputBlurHandler = (event) => { 
    setEnteredPasswordTouched(true); 
  }; 

  // resets the value state to default empty string and boolean state to false
  const reset = () => { 

    setEnteredValue(''); 
    setEnteredPassword('')
    setIsTouched(false); 
    setEnteredPasswordTouched(false);
  }; 

  // assign the values to the keys value,isValid & hasError to be return, returns them and then clear the states
  return { 

    value: enteredValue, 
    isValid: valueIsValid,
    password: enteredPassword,
    enteredPasswordIsValid: enteredPasswordIsValid,
    hasError,
    passwordHasError,
    valueChangeHandler, 
    inputBlurHandler,
    passwordInputChangeHandler,
    passwordInputBlurHandler,
    reset 
  }; 

}; 

export default useInput; 