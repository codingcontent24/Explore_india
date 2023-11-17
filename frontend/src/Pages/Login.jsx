import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContect';
import {BASE_URL} from './../utils/config';
const Login = () => {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  })

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async e => {
    e.preventDefault()

   dispatch({type:'LOGIN_START'})

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type':'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      })

      const result = await res.json();
      if (!res.ok) alert(result.message);

      console.log(result.data);
      dispatch({ type:'Login_success',payload:result.data });
  
      navigate('/')

    }
    catch (error) {
      dispatch({ type:'Login_failure',payload:error.message });
    }
  };
 



  return (
    <>
      <Login_container>
        <div className="login_form_container">
          <div className="login_image">
            <img src="./image/login.jpg" alt="images" className="login_pic" />
          </div>
          <div className="login_from">
            <div className="avtar-pic">
              <img src="./image/avtar.png" alt="" className="avtar" />
            </div>
            <form method="" onSubmit={handleClick}>
              <div className="fileds">
                <EmailIcon sx={{ fontSize: 15, color: "rgb(244, 59, 108)" }} /><input type="email" placeholder='Enter Your Email' autoComplete='off'
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="fileds">
                <PasswordIcon sx={{ fontSize: 15, color: "rgb(244, 59, 108)" }} /> <input type="password" placeholder='Enter Your Password' autoComplete='off'
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <div className="btn">
                <button type='submit' className="btn_1">Sing in</button>
              </div>
            </form>
            <p>Don't have an account?<Link to="/register"> Create</Link></p>
          </div>
        </div>
      </Login_container>
    </>
  )
}

const Login_container = styled.section`
    background:url("./image/plce_bg.jpg")no-repeat center center/cover;
    height:85vh;
    width:98.7vw;

    .login_form_container{
    display:flex;
    top:50%;
    left:50%;
    position:absolute;
    transform:translate(-50%,-50%);
    border:2px solid rgb(244, 59, 108);
    box-shadow:5px 10px 20px black;
}
.login_pic{
     width:35rem;
    height:30rem;
    }
.avtar{
    height:10rem;
    width:10rem;
    border-radius:50%;
    margin:0 6rem;
}
.login_from{
    background:rgb(233, 128, 179);
    padding:2rem 2rem;
 }
 .fileds{
   padding:1rem;
   margin:1rem;
   background:#ffff;
   border-radius:10px;
}
input{
    text-align:center;
    font-size:1.3rem;
    outline:none;
    border:none;
    font-weight:700;
}
.btn_1{
   padding:0.6rem 7rem;
   margin:0 2rem;
   border-radius:10px;
    background:rgb(244, 59, 108);
    color:white;
    border:none;
}
.login_from p{
  font-size:1.7rem;
  color:white;
  margin:1rem 0;
}
`
export default Login
