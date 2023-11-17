import React from 'react';
import { Container, Row } from 'reactstrap';
import styled from 'styled-components';
import SearchBar from '../shared/SearchBar';
import FeaturedTourList from '../component/Featured-tours/FeaturedTourList';
import Testimonial from '../component/Testimonial/Testimonial';
import Commonheading from '../shared/Commonheading';
const Home = () => {
  return (
    <>
      <Wrapper>
        <div className="hero_sec">
          <div className="sub_hero">
            <h3 className="text_1">Explore</h3>
            <h3 className="text_2">Your Amazing City</h3>
            <h3 className="text_3"> Make sure Your Amazig Tour With Us</h3>
            <div className="buttons">
              <button className="btn_1">Heritage</button>
              <button className="btn_1">Places</button>
              <button className="btn_1">Package</button>
            </div>
            <SearchBar />
          </div>
        </div>
      </Wrapper>

      <Commonheading heading={"Our Tour Packages"}/>
      
      <Wrapper_Tour>
        <Container>
          <Row>
            <FeaturedTourList />
          </Row>
        </Container>
      </Wrapper_Tour>
      <Experience_section>
        <div className="exp_cont">
          <h2 className="experience_heading"><sapn className="spec_comp">WHY </sapn> BOOk WITH US</h2>
          <p className="experience_text">Explore India is a rapidly-growing global online travel agency. Trip.com is here to help you plan the perfect trip
            With our easy-to-use website and app, along with 24-hour customer support, booking your next trip couldn't be simpler.</p>

        </div>
        <div className="exp-img">
          <img src="./image/person_tarvel.jpg" alt="image" className="exp_image" />
        </div>
      </Experience_section>
      <Testimonial_section>
        <Testimonial />
      </Testimonial_section>
    </>
  )
}
const Wrapper = styled.section`

.hero_sec{
  background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("./image/bg-1.jpg")no-repeat center center/cover;
   height:100vh;
    width:99vw;
}
.sub_hero
{
    top:50%;
    left:50%;
    position:absolute;
    transform:translate(-50%,-50%);
}
.text_1
{
    font-size:3.5rem;
    font-family:sans-serif;
    font-weight: 1000;
    color:#fff;
}
.text_2
{
    font-size:2.5rem;
    font-family:sans-serif;
    font-weight: 700;
    color:white;
}
.text_3
{
    font-size:2rem;
    font-family:sans-serif;
    font-weight: 1000;
    color:white;
}
.buttons
{
    margin: 2rem 0; 
}
.btn_1
{
    margin:0 1rem;
    padding:1rem;
    font-size:2rem;
    background:none;
    border:2px solid rgb(244, 59, 108);
    color:white;
    transition: 0.3s all ease-in-out;
}
.btn_1:hover
{
    background:rgb(244, 59, 108);
    color:white;
}
`
const Wrapper_Tour = styled.section``
const Experience_section = styled.section`
   display:flex;
   margin:3rem;
   align-items:center;

   .exp_image
   {
    height:36rem;
    width:28rem;
    margin-right:10rem;
   }
   
   .experience_heading
   {
    font-size:2rem;
    margin:2rem;
   }
   .spec_comp
  {
    font-size:3rem;
    border-bottom:4px solid rgb(244, 59, 108);
  }
  .experience_text
  {
    font-size:2rem;
    margin:2rem;
  }
`
const Testimonial_section = styled.section`
 
 `
export default Home;
