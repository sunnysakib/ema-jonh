// import '../../../src/App.css';
import React, { useContext } from 'react';

import { useState } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { initalizeLoginFrameWork, handleSignIn, handleFbSignIn, handleSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email:'',
        photoURL:'',
        error:'',
        success:''
  })
  initalizeLoginFrameWork();
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
  const googleSignIn = () => {
    handleSignIn()
    .then(res => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    })
  }
  
  const facebookSignIn = () => {
    handleFbSignIn()
    .then(res => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    })
  }

  const SignOut = () => {
    handleSignOut()
    .then(res => {
      setUser(res);
      setLoggedInUser(res);
    })
  }


  // HANDLE CHANGE
  const handleChange = (e) => {
      let validForm = true;
      if (e.target.name === 'email'){
        const validEmail = /\S+@\S+\.\S+/.test(e.target.value);
        validForm = validEmail;
      }
      if(e.target.name === 'password'){
        const validPassword = e.target.value.length > 6 && /\d{1}/.test(e.target.value);
         validForm = validPassword;
      }
      if(validForm){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
        
      }
  }
  
  // HANDLE SUBMIT
  const handleSubmit = (e) => {
      if(newUser && user.email && user.password){
          createUserWithEmailAndPassword(user.name, user.email, user.password)
          .then(res => {
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
          })
      }

      if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
        })
      }
      e.preventDefault();
  }
   
  
  // RETURN
  return (
    <div className="App">
      {
        user.isSignedIn ? <button onClick = {SignOut}>Sign out</button>
        :<button onClick = {googleSignIn}>Sign in by Gmail</button>
      }
      <br/>
      <button onClick = {facebookSignIn}>Sign in by Facebook</button>
      {
        user.isSignedIn && 
        <div>
            <h3>Welcome, {user.name}</h3>
            <h4>Email: {user.email}</h4>
            <img src={user.photoURL} alt=""/>  
        </div>
      }
      
      <h1>Our own Authentication</h1>
      <input type="checkbox" onChange={()=> setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New user sign up</label>
      {/* FORM SECTION */}
      <form action="">
        {newUser && <input name="name" onBlur = {handleChange} placeholder="Enter Name" type="text"/>}
        <br/>
        <input type="text" onBlur = {handleChange}  placeholder = 'Enter email' name="email" required/>
        <br/>
        <input type="password" onBlur = {handleChange} placeholder ='Enter Password' name="password" id="" required/>
        <br/>
        <input type="submit"   onClick ={handleSubmit} value={newUser ? 'Submit': 'Sign in'}/>
      </form>
      {
        user.success ? <p style={{color:'green'}}>{!newUser ? 'Login': 'create'} successfully</p>
        : <p style={{color:'red'}}>{user.error}</p>
      }
    </div>
  );
};

export default Login;