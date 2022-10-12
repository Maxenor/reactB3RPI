import useInput from './useInput';

//function simpleinput
const SimpleInput = (props) => { 

  const { 
// declare properties value, isValid etc with values from custom hook useInput
    value: enteredName, 
    isValid: enteredNameIsValid, 
    email : enteredEmail,
    enteredEmailIsValid,
    hasError: nameInputHasError,
    enteredEmailIsInvalid,
    valueChangeHandler: nameChangedHandler, 
    inputBlurHandler: nameBlurHandler, 
    emailInputChangeHandler,
    emailInputBlurHandler,
    reset: resetNameInput 
  } = useInput(value => value.trim() !== ''); 

  let formIsValid = false;
// if both boolean are true then form is valid
  if (enteredNameIsValid && enteredEmailIsValid) { 
    formIsValid = true; 
  }
  //handle submission of form
  const formSubmissionHandler = (event) => { 
    //prevents page reload
    event.preventDefault();
    // if name or email isnt valid quit sending the form
    if ((!enteredNameIsValid || !enteredEmailIsValid)){ 

      return; 

    } 
    //console log the entered name and reset the inputs
    console.log(enteredName); 
    resetNameInput(); 
  }; 

  // custom css if the name or email is valid or not
  const nameInputClasses = nameInputHasError 
    ? 'form-control invalid' 
    : 'form-control';
  const emailInputClasses = enteredEmailIsInvalid 
    ? 'form-control invalid' 
    : 'form-control'; 
  return ( 
// html of tge form, on submit will call function formSubmissionHandler
// custom css called for the div
// inputs have onChange property which will call useInput hook functions to change the values, also handles blur 
    <form onSubmit={formSubmissionHandler}> 
      <div className={nameInputClasses}> 
        <label htmlFor='name'>Your Name</label> 
        <input 
          type='text' 
          id='name' 
          onChange={nameChangedHandler} 
          onBlur={nameBlurHandler} 
          value={enteredName} 
        /> 
        {nameInputHasError && ( 
          <p className='error-text'>Name must not be empty.</p> 
        )} 
      </div> 
      <div className={emailInputClasses}> 
        <label htmlFor='email'>Your E-Mail</label> 
        <input 
          type='email' 
          id='email' 
          onChange={emailInputChangeHandler} 
          onBlur={emailInputBlurHandler} 
          value={enteredEmail} 
        /> 
        {enteredEmailIsInvalid && ( 
          <p className='error-text'>Please enter a valid email.</p> 
        )} 
      </div> 
      <div className='form-actions'> 
        <button disabled={!formIsValid}>Submit</button> 
      </div> 
    </form> 
  ); 
}; 

export default SimpleInput; 
