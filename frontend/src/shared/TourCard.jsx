import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import calculateAvgRating from '../utils/avgRating';
const TourCard = ({ tour }) => {

  const { _id, title, city, photo, price, featured, reviews } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <MainCard>
      <div className="tour_img">
        <img src={photo} alt="tour_img" className="card_image" />
        {featured && <span className='card_fea'>featured</span>}
      </div>
      <div className="cardbody">
        <span className="tour_location"><LocationOnIcon sx={{ fontSize: 13, color: "rgb(244, 59, 108)" }} />{city}</span>
        <span className="tour_rating"> <StarIcon sx={{ fontSize: 13, color: "rgb(244, 59, 108)" }} />
         {avgRating === 0 ? null : 
         avgRating}
          {totalRating === 0 ? (
            "Not rated"
          ) : (
            <span>
              ({reviews.length})
              </span>)}
        </span>
      </div>
      <h5 className="tour_title"><Link to={`/tour/${_id}`}>{title}</Link></h5>
      <div className="card_bottom">
        <h5 className='tour_price'>Rs .{price} <span className='tour_persion'>/per person</span></h5>
        <button className="card_btn">
          <Link to={`/tour/${_id}`}>Book Now</Link>
        </button>
      </div>
    </MainCard>
  )
}
const MainCard = styled.div`
border-radius:8px;
 height:40rem;
 width:31rem;
 box-shadow:5px 10px 20px #ccc;

.card_image
{
  height:25rem;
  width:31rem;
  object-fit:cover;
}
.card_fea
{
  
  padding:4px;
  font-size:20px;
  display:inline-block;
  background:rgb(244, 59, 108);
  color:#fff;
}
.cardbody
{
  display:flex;
  justify-content:space-between;
  margin:10px;
}
.tour_location
{
  font-size:1.3rem;
  font-weight:600;
}
.tour_rating
{
  font-size:1.3rem;
  font-weight:600;
}
.card_bottom
{
  display:flex;
  justify-content:space-between;
  margin:20px 10px;
}
.card_btn
{
  padding:6px;
  background:rgb(244, 59, 108);
  border:none;
  outline:none;
  
  border-radius:7px;
}
.card_btn a
{
  text-decoration:none;
  color:white;
}

.tour_title
{
  margin:0 10px;
  text-decoration:none;
}
.tour_title a
{
  text-decoration:none;
  color:black;
}
.tour_persion
{
  font-size:1.3rem;
  color:black;
}  
.tour_price
{
  color:rgb(244, 59, 108);
  font-size:1.7rem;
}

`
export default TourCard
