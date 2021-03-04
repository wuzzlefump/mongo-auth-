import React, {useState, useEffect} from 'react'
import './style.css'

const Login = (props)=>{

  //toggle between signup and login
    const [loginState, setLoginState]=useState(true)
      const toggleLogin = ()=>{
        if(loginState === true){
            setLoginState(false)
        }else{
            setLoginState(true)
        }
    }
    //toggle
    //signup states
    const [signUpEmail, setSignUpEmail]=useState()
    const [signUpPass, setSignUpPass]=useState()
    //signup States
    // Login States
    const [loginEmail, setLoginEmail]=useState()
    const [loginPass, setLoginPass]=useState()
    // Login States

    //handleLogin
    const handleLogin = (e)=>{
      e.preventDefault()
      let request = {
        email:loginEmail,
        password:loginPass
      }
      console.log(request)
    }
    const handleSignup = (e)=>{
      e.preventDefault()
      let request = {
        email:signUpEmail,
        password:signUpPass
      }
      console.log(request)
    }


    return(loginState === true ?
        <div className="loginCard">
        <div className="formHeader">Mongo Auth User Login</div>
        <div className="formContainer">
          <form  className= "form">
            <div className="formField">
              <label htmlFor="email" className="formLabel">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="user@example.com"
                required
                className="formInput"
                value = {loginEmail}
                onChange={(e)=>{setLoginEmail(e.target.value)} }
              />
            </div>
            <div className="formField">
              <label htmlFor="password" className="formLabel">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                required
                className="formInput"
                value={loginPass}
                onChange={(e)=>{setLoginPass(e.target.value)} }
              />
            </div>
            <div className="loginButtonContainer">
            <button type="submit" className="submitButton" onClick={handleLogin}>
              Sign in
            </button>
            <button type="submit" className="submitButton" onClick={toggleLogin}>
              New User
            </button>
            </div>
          </form>
        </div>
      </div> : 
         <div className="loginCard">
           <div className="formHeader">Mongo Auth User Sign Up</div>
        <div className="formContainer">
          <form  className= "form">
            <div className="formField">
              <label htmlFor="email" className="formLabel">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="user@example.com"
                required
                className="formInput"
                value={signUpEmail}
                onChange={(e)=>{setSignUpEmail(e.target.value)}}
              />
            </div>
            <div className="formField">
              <label htmlFor="password" className="formLabel">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                required
                className="formInput"
                value={signUpPass}
                onChange={(e)=>{setSignUpPass(e.target.value)}}
              />
            </div>
            <div className="loginButtonContainer">
            <button type="submit" className="submitButton" onClick={handleSignup}>
              Sign up
            </button>
            <button type="submit" className="submitButton" onClick={toggleLogin}>
              Existing User
            </button>
            </div>
          </form>
          </div>
         </div>)
}
export default Login;