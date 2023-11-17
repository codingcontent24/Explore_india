import React from 'react'
import Carousel from "react-elastic-carousel";
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import styled from 'styled-components';
import Commonheading from '../../shared/Commonheading';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];


const Testimonial = () => {



    return (
        <>
        <Commonheading heading={"Out Testimonials"}/>
            <Carousel breakPoints={breakPoints}>
                <Item>
                    <div className="slider">
                        <p className="slider_content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius praesentium rem alias placeat debitis! Consectetur alias nobis at blanditiis eos, sint sit possimus nihil culpa, minima voluptate ducimus expedita ab!
                        </p>
                        <div className="slider_image_cont">
                            <img src={ava01} alt="image" className="silder_image" />
                            <div className="test_name">
                                <h5>John Doe</h5>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                </Item>
                <Item>
                    <div className="slider">
                        <p className="slider_content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius praesentium rem alias placeat debitis! Consectetur alias nobis at blanditiis eos, sint sit possimus nihil culpa, minima voluptate ducimus expedita ab!
                        </p>
                        <div className="slider_image_cont">
                            <img src={ava02} alt="image" className="silder_image" />
                            <div className="test_name">
                                <h5>John Doe</h5>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                </Item>
                <Item>
                    <div className="slider">
                        <p className="slider_content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius praesentium rem alias placeat debitis! Consectetur alias nobis at blanditiis eos, sint sit possimus nihil culpa, minima voluptate ducimus expedita ab!
                        </p>
                        <div className="slider_image_cont">
                            <img src={ava03} alt="image" className="silder_image" />
                            <div className="test_name">
                                <h5>John Doe</h5>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                </Item>
            </Carousel>
        </>
    )
}
const Item=styled.div`
 
 display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  background-color: #ccc;
  color: #fff;
  margin: 10px; 15px;
  font-size: 4em;

.slider
{
    border-radius:10px;
}

.silder_image
{
    height:10rem;
    width:10rem;
    object-fit:cover;
    margin:4px 10px;
}
.slider_content
{
    font-size:1.7rem;
    margin:10px;
    color:black;
}
.test_name
{
    margin:4px;
}
h5
{
    font-size:2rem;
    color:rgb(244, 59, 108);
}
p{
    font-size:2.5rem;
}
`
export default Testimonial;
