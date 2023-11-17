import React from 'react'
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Footer = () => {
    return (
        <>

            <Bottom>
                <div class="different-form">
                    <div className="form_p_1">
                        <h5 className="footer_heading">Subscribe Now To Get <br />Useful Traveing information 👍</h5>
                        <form action="https://formspree.io/f/mnqypqvo" method="POST">
                            <div>
                                <input type="text" name="name" placeholder="Enter Your name" className="defff-filed" />
                            </div>

                            <div>
                                <input type="test" name="email" placeholder="Enter Your Email" className="defff-filed" />
                            </div>

                            <div>
                                <input type="text" name="phone" placeholder="Enter Your phonr" className="defff-filed" />
                            </div>

                            <div>
                                <textarea name="Message" rows="4" cols="25" className="fields-7"
                                    placeholder="write the query" id="messagevalidation"></textarea>

                            </div>
                            <div id="btn-2">
                                <button class="btn-2" type="submit">Submit</button>
                            </div>
                        </form>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur sequi unde cum tempore<br />quibusdam exercitationem dolor! Sit, quaerat molestiae. Veniam?</p>
                    </div>
                    <div className="form_p_1">
                        <img src="./image/male-tourist.png" alt="image" className='footer_image' />
                    </div>
                </div>
                <div class="footer">
                    <div className="web_heading">
                        <h1>Explore India</h1>
                        <h6>Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Ipsum, labore!</h6>
                        <div className="icons">
                            <InstagramIcon sx={{ fontSize: 30, color: "#071736" }} />
                            <YouTubeIcon  sx={{ fontSize:30, color: "#071736" }}/>
                            <FacebookIcon sx={{ fontSize: 30, color: "#071736" }}/>
                            <LinkedInIcon sx={{ fontSize: 30, color: "#071736" }}/>
                        </div>
                    </div>
                    <div class="our-services">
                        <h2 class="service-heading">Dicover</h2>
                        <p class="service-1"><span class="dot"></span>Best Price Guarantee</p>
                        <p class="service-1"><span class="dot"></span>Travellers Love Us</p>
                        <p class="service-1"><span class="dot"></span>Best Travel Agent</p>
                        <p class="service-1"><span class="dot"></span>Our Dedicated Support</p>
                    </div>
                    <div class="our-services">
                        <h2 class="service-heading">Quick Links</h2>
                        <p class="service-1"><span class="dot"></span>Home</p>
                        <p class="service-1"><span class="dot"></span>About Us</p>
                        <p class="service-1"><span class="dot"></span>Tour</p>
                        <p class="service-1"><span class="dot"></span>Places</p>
                        <p class="service-1"><span class="dot"></span>Sign Up</p>
                    </div>
                    <div class="our-services">
                        <h2 class="service-heading">Contact Details</h2>
                        <p class="service-1"><EmailIcon sx={{ fontSize: 30, color: "#071736" }} className='star' />CodingContent@gmail.com</p>
                        <p class="service-1"><LocalPhoneIcon sx={{ fontSize: 30, color: "#071736" }} />Contact:7039840362</p>
                    </div>
                </div>
            </Bottom>
        </>
    )
}
const Bottom = styled.footer`

.icons
{
    margin:3rem;
}
h5
{
    color:white;
    margin:2rem 3rem;
    font-size:2.5rem;
}
p
{
    color:white;
    margin:2rem 3rem;
    font-size:1.7rem; 
}
h1
{
    color:rgb(244, 59, 108);
    margin-left:18rem;
    margin-top:4rem;
    font-size:5rem;
}
h6
{
  font-size:1.7rem;
  margin:2rem 3rem;
}
.footer
   {
     display: flex;
     background:#ffff;
   }
   .footer_image
   {
    height:25rem;
    width:25rem;
    object-fit:cover;
   }
   .different-form
   {
     background:#81a3e6;
     display:flex;
     justify-content:center;
     align-items:center;
   }
   .different-form form
   {
    display:flex;
   }
   .btn-2
   {
     padding:.5rem 2rem;
     border-radius:20px;
     font-size:1.7rem;
     color:white;
     background:rgb(244, 59, 108);
     border:none;
     outline:none;
     margin:2rem;
    }
    #btn-2
    {
     text-align: center;
    }

   .defff-filed
   {
     text-align: center;
     padding:1rem;
     margin:1rem 2rem;
     border:none;
     outline: none;
     border-radius: 20px;
   }
   .different-thing
   {
     font-size: 1.7rem;
     margin:2rem 2rem;
   }
   .our-services
   {
     
     margin: 0 4rem ;
     justify-content:center;
   }

   .service-heading
   {
     text-align: center;
     font-size: 2rem;
     margin:2rem 0;
     color:#071736;
   }
   .service-1
   {
     font-size: 1.8rem;
     margin:1rem 1rem;
     color:#071736;
   }
   .fields-7
   {
    margin:0 1rem;
   }
`
export default Footer


