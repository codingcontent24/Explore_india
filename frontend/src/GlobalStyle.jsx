import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  font-family: sans-serif;
}

html{
    font-size: 62.5%;
}

h1{
    font-size: 2.5rem;
    color:white;
  }  
  a.active{
    color:White;
    border-bottom:2px solid rgb(244,59,108);
}
h6{
  font-size:1.8rem;
  font-weight:600;
 
}
h5{
  font-size:1.7rem;
}
.star
{
  margin:-3px 5px;
  
}
h3
{
  font-size:2rem;
  font-weight:700;
}

`