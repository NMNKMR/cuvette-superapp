import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './css/Signup.scss'

const inputs = [
  {name: "name", type: "text", placeholder: "Name"}, 
  {name: "username", type: "text", placeholder: "UserName"},
  {name: "email", type: "email", placeholder: "Email"},
  {name: "mobile", type: "number", placeholder: "Mobile"}
]

function Signup() {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    shareCheck: false,
  })

  const [inputErrors, setInputErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    shareCheck: "",
  })

  const handleInputChange = (e)=> {
    if(inputErrors[e.target.name]) {
      e.target.value.trim().length > 0 && setInputErrors((prev)=> ({...prev, [e.target.name]: ""}));
    }
    
    setInputValues((prev)=> ({...prev, [e.target.name]: e.target.value}));
  }

  const handleFormSubmit = (e)=> {
    e.preventDefault();
    let valid = true;
    
    for(let input in inputValues) {
      if (input !== "shareCheck" && inputValues[input].trim().length === 0) {
        valid = false;
        setInputErrors((prev) => ({ ...prev, [input]: "Field is required!" }))

      }
      else if (input === "email" && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputValues[input])) {
        setInputErrors((prev) => ({ ...prev, [input]: "Email is Invalid!" }));
        valid = false;
      }
      else if (input === "mobile" && inputValues[input].length !== 10) {
        setInputErrors((prev) => ({ ...prev, [input]: "Mobile number should be of 10 digits!" }));
        valid = false;
      }

      if(input === "shareCheck" && !inputValues[input]) {
        valid = false;
        setInputErrors((prev)=> ({...prev, [input]: "Check this box if you want to proceed!"}))
      }
    }
    
    if(valid) {
      localStorage.setItem('user', JSON.stringify(inputValues));
      navigate('/category')
    } 
  }
  
  return (
    <div className='sign-up'>
        <h3>Super app</h3>
        <p>Create your new account</p>
        <form onSubmit={handleFormSubmit}>
          {inputs.map((input, index)=> (
            <div key={index}>
              <input type={input.type} name={input.name} style={inputErrors[input.name]? {border: "1px solid #F00"} : null}
                value={inputValues[input.name]} placeholder={input.placeholder}
                onChange={(e)=> handleInputChange(e)}/>
              {inputErrors[input.name] && <p className='error'>{inputErrors[input.name]}</p>}
            </div>
          ))}
          
        <div>
          <input name='shareCheck' value={inputValues.shareCheck}
            type="checkbox" id='check' onChange={(e) => {
              setInputValues((prev) => ({ ...prev, shareCheck: !prev.shareCheck }))
              inputErrors[e.target.name] && setInputErrors((prev)=> ({...prev, [e.target.name]: ""}));
              }} />
          <label htmlFor="check">Share my registration data with Superapp</label>
          {inputErrors.shareCheck && <p className='signup-error'>{inputErrors.shareCheck}</p>}
        </div>

          <button type="submit">SIGN UP</button>
        </form>
        <p className='terms'>By clicking on Sign up. you agree to Superapp <a href="#">Terms and Conditions of Use</a></p>
        <p className='policy'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="#">Privacy Policy</a></p>
    </div>
  )
}

export default Signup