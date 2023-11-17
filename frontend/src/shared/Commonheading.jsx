import react from 'react';
import styled from 'styled-components';
const Commonheading = ({ heading }) => {
  return (
    <>
      <Heading_section>
        <div className='heading_title'>
           <p>{heading}</p>
        </div>
      </Heading_section>

    </>
  )
}

const Heading_section = styled.div`
.heading_title
{
 
  text-align: center;
  margin:3rem 4rem;
  padding:1rem 0;
  background:rgb(244, 59, 108);
}
.heading_title p
{
  color:white;
  font-size:2.5rem;
  font-weight:700;
}
  
`
export default Commonheading;