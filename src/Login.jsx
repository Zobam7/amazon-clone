import React, { useState } from 'react'
import "./login.css"
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';


function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [name, setName] = useState("")

    const signin = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push("/")
        })
        .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // console.log(auth)
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))

    }
  return (
    <div className='login'>
        <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
        alt="" className='login__logo'/>
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>

            <form action="">
                {/* <h5>Name</h5>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/> */}

                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button  onClick={signin} type='submit' className='login_signinbutton'>Sign In</button>
            </form>

            <p>By signing-in, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice. </p>

            <button onClick={register} className='login__registerbutton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login