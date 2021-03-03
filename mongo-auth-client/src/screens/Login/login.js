import React, {useState, useEffect} from 'react'

const Login = (props)=>{

    const [loginState, setLoginState]=useState(true)
    const toggleLogin = ()=>{
        if(loginState === true){
            setLoginState(false)
        }else{
            setLoginState(true)
        }
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
              />
            </div>
            <button type="submit" className="submitButton">
              Sign in
            </button>
          </form>
        </div>
      </div> : 
         <div></div>)
}
export default Login;