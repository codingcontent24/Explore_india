import React, { useRef, useEffect, useContext } from 'react'
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContect';

const Header = () => {

  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext)

  const logout = () => {
    dispatch({ type: 'Logout' })
    navigate('/')
  }

  return (
    <>
      <MainHeader>
        <div className="header_logo">
          <h1 className="logo">Explore India</h1>
        </div>
        <Nav>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            {/* <li><NavLink to="About">About</NavLink></li> */}
            <li><NavLink to="Tour">Tour</NavLink></li>
            {/* <li><NavLink to="Places">Places</NavLink></li> */}
            {user ? (
              <>
                <h5 className="username">{user.username}</h5>
                <div className='logout_btn'>
                  <button className='log_btn' onClick={logout}>Logout</button>
                </div>
              </>
            ) : (
              <>
                <li><NavLink to="login">Login</NavLink></li>
                <li><spam className="sapm_tag"><NavLink to="register">Register</NavLink></spam></li>
              </>
            )}

          </ul>
        </Nav>

      </MainHeader>
    </>
  )
}
const MainHeader = styled.section`
  display:flex;
  padding:0 5.5rem;
  justify-content:space-between;
  font-family: "Gill Sans", sans-serif;
  background:#ccc;
  top:0;
  left:0;
  position:Sticky; 
  z-index:999;

 .logo{
     font-size:2.5rem;
     font-weight:700;
     font-family:sans-serif;
     margin:0rem 6rem;
     margin-top:3.5rem;
     color:white; 
  }
 
`
const Nav = styled.section`
ul{
    display:flex;
   
    margin-right:2rem;
    margin-top:1rem;
}
li{
    list-style:none;
    margin:2rem;
    font-size:1.8rem;
}
a{
    color:white;
    text-decoration:none;
}
.sapm_tag
{
 
  padding:6px 15px;
  border-radius:20px;
  background:rgb(244,59,108);
  transition:0.3s all ease-in-out ;
}
.sapm_tag:hover
{
  background:none;
  border:1px solid rgb(244,59,108); 
 
}
.log_btn
{
  padding:0.7rem 2rem;
  border:none;
  background:rgb(244,59,108);
  border-radius:10px;
  color:white;
}
.username
{
  margin:2rem 1rem;
  color:rgb(244,59,108);
  font-size:1.7rem;
  font-weight:700;
}
.logout_btn
{
  margin:1.5rem 2rem;
 
}
`
export default Header
