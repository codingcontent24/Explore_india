import React from 'react'
import styled from 'styled-components';
const CommonSection = ({title}) => {
  return (
   <>
     <Common_section>
       <h1>{title}</h1>
     </Common_section>
   </>
  )
}

const Common_section=styled.section`
  
  background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("./image/bg_2.jpg")no-repeat center center/cover;
   height:54vh;
    width:99vw;
    justify-content:center;
    align-items:center;
  h1
  {
    font-size:3rem;
    top:50%;
    left:50%;
    position:absolute;
    transform: translate(-50%,-50%);
  }

` 
export default CommonSection
