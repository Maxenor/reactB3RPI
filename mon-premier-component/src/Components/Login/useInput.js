import { useState } from 'react'; 

// needs a validateValue function parameter
const useInput = (validateValue) => { 

// useState declaration with variables enteredValue and isTouched, 2 setter functions with default values empty string & boolean false
  const [enteredValue, setEnteredValue] = useState(''); 
  const [isTouched, setIsTouched] = useState(false); 
  const [enteredEmail, setEnteredEmail] = useState(''); 
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid = enteredEmail.includes('@'); 

//using function passed we check if value is valid, we set what would be an error in variable hasError
  const valueIsValid = validateValue(enteredValue); 
  const hasError = (!valueIsValid && isTouched);
  const emailHasError = (!enteredEmailIsValid && enteredEmailTouched)


// handles the action of changing the value by updating the state
  const valueChangeHandler = (event) => { 
    setEnteredValue(event.target.value); 
  }; 

// handles when the field was touched by user 
  const inputBlurHandler = (event) => { 
    setIsTouched(true); 
  }; 

  const emailInputChangeHandler = (event) => { 
    setEnteredEmail(event.target.value); 

  }; 
  const emailInputBlurHandler = (event) => { 
    setEnteredEmailTouched(true); 
  }; 

  // resets the value state to default empty string and boolean state to false
  const reset = () => { 

    setEnteredValue(''); 
    setEnteredEmail('')
    setIsTouched(false); 
    setEnteredEmailTouched(false);
  }; 

  // assign the values to the keys value,isValid & hasError to be return, returns them and then clear the states
  return { 

    value: enteredValue, 
    isValid: valueIsValid,
    email: enteredEmail,
    enteredEmailIsValid: enteredEmailIsValid,
    hasError,
    emailHasError,
    valueChangeHandler, 
    inputBlurHandler,
    emailInputChangeHandler,
    emailInputBlurHandler,
    reset 
  }; 

}; 

export default useInput; 