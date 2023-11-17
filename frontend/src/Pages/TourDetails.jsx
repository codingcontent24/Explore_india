import React, { useRef, useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours';
import styled from 'styled-components';
import calculateAvgRating from '../utils/avgRating';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import avtar from '../assets/images/avatar.jpg';
import { Avatar } from '@mui/material';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import Booking from '../component/Bookings/Booking';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { AuthContext } from './../context/AuthContect';
import { ToastContainer, toast } from 'react-toastify';

const TourDetails = () => {

  const { id } = useParams()

  const reviewMegRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

  const { user } = useContext(AuthContext)

  // fetch datafrom database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`)

  // destructure properties from tour object
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const option = { day: 'numeric', month: 'long', year: 'numeric' }

  const submitHandler = async e => {
    e.preventDefault()
    const reviewText = reviewMegRef.current.value;
    // alert(`${reviewText},${tourRating}`)

    

    try {
      if (!user || user === undefined || user === null) {
        alert('please sign in')
        return toast.error("Please sign in ⚠️", { position: "top-center", theme: "colored", })
      }

     const reviewObj = {
      username:user?.username,
      reviewText,
      rating:tourRating
     }


      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers:{
          'Content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj),
      })
     
     const result= await res.json()
     if(!res.ok) {
      return alert(result.message);
     }
      alert(result.message)
    } 
    catch (error) {
      alert(error.message);
    }
  };





  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tour])

  return (
    <>
      {loading && <h4 className="text_center">Loading........</h4>}
      {error && <h4 className="text_center">{error}</h4>}

      {
        !loading && !error && (
          <TourDetail>

            <div className="tour_content">
              <img src={photo} alt="image" className='tour_detail_img' />
              <div className="tour_info">
                <h2 className="title">{title}</h2>
                <div className="tour_sub_info">
                  <span className="tour_rating"> <StarIcon sx={{ fontSize: 13, color: "rgb(244, 59, 108)" }} />
                    {avgRating === 0 ? null :
                      avgRating}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) : (
                      <span>
                        ({reviews?.length})
                      </span>)}
                  </span>
                  <span>
                    <LocationOnIcon sx={{ fontSize: 17, color: "rgb(7, 23, 54)" }} className='star' />{address}
                  </span>
                </div>
                <div className="tour_extra_details">
                  <span><LocationCityIcon sx={{ fontSize: 20, color: "rgb(7, 23, 54)" }} className='star' />{city}</span>
                  <span><AttachMoneyIcon sx={{ fontSize: 20, color: "rgb(7, 23, 54)" }} className='star' />{price}/per person</span>
                  <span><SocialDistanceIcon sx={{ fontSize: 20, color: "rgb(7, 23, 54)" }} className='star' />{distance} Day/Night</span>
                  <span><PeopleIcon sx={{ fontSize: 20, color: "rgb(7, 23, 54)" }} className='star' />{maxGroupSize}</span>
                </div>
                <div className="description">
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
              </div>
              {/*==============================revive section ======================================*/}
              <div className="tour_review">

                <h4>Reviews({reviews?.length}reviews)</h4>
                <form onSubmit={submitHandler}>
                  <div className="review_form">
                    <span onClick={() => setTourRating(1)}  >1.<StarIcon sx={{ fontSize: 17, color: "rgb(244, 59, 108)" }} className='star' /></span>
                    <span onClick={() => setTourRating(2)}>2.<StarIcon sx={{ fontSize: 17, color: "rgb(244, 59, 108)" }} className='star' /></span>
                    <span onClick={() => setTourRating(3)}>3.<StarIcon sx={{ fontSize: 17, color: "rgb(244, 59, 108)" }} className='star' /></span>
                    <span onClick={() => setTourRating(4)}>4.<StarIcon sx={{ fontSize: 17, color: "rgb(244, 59, 108)" }} className='star' /></span>
                    <span onClick={() => setTourRating(5)}>5.<StarIcon sx={{ fontSize: 17, color: "rgb(244, 59, 108)" }} className='star' /></span>
                  </div>
                  <div className="review_input">
                    <input type="text" placeholder='Share Your Thoughts..' className='input_fileds' ref={reviewMegRef} required />
                    <button type='submit' >Submit👍</button>
                  </div>
                </form>
                <div className="listgroup">
                  {
                    reviews?.map(review => (
                      <div className="review_items">
                        <img src={avtar} alt="image" className='review_avtar' />
                        <div className="review_info">
                          <div className="review_subinfo">
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleDateString('en-US', option)}</p>
                            </div>
                            <span><StarIcon sx={{ fontSize: 17, color: "rgb(244, 59, 108)" }} className='star'/>{review.rating}</span>
                          </div>
                          <h5>{review.reviewText}</h5>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <Booking tour={tour} avgRating={avgRating} />
          </TourDetail>
        )}
      <ToastContainer />
    </>

  )
}
const TourDetail = styled.section`
display:flex;


.tour_detail_img
{
  height:60rem;
  width:70rem;
  object-fit:cover;
  border-radius:10px;
}
.tour_info
{
  border:1px solid #ccc;
 margin:1rem 0rem;
}
.description_head,.description
{
  margin: 2rem 3rem ;
}
.tour_content
{
  margin:3.5rem;
}
  
.tour_extra_details
{
  margin:1rem 2rem;
}
.tour_extra_details span
{
  margin:0 1rem;
  font-size:1.7rem;
}
.tour_sub_info
{
  margin:1rem 2rem;
}
.tour_sub_info span
{
  margin:0 1rem;
  font-size:1.7rem;
}
.title
{
  margin:1rem 3rem;
  color:rgb(244, 59, 108);
  font-weight:700;
  font-size:2rem;
}
${'' /* .star
{
  margin:-3px 5px;
} */}
.tour_review
{
  border:1px solid #ccc;
  padding:3rem;
 }
.tour_review h4
{
  font-size:2rem;
  font-weight:700;
  margin:1rem 0;
}
.review_input
{
  border:1px solid rgb(244, 59, 108);
  margin:3rem 0rem;
  display:inline-block;
  border-radius:51px;
  background:#ccc;
}
.input_fileds
{
  padding:1rem 11rem;;
  margin:1rem 2rem;
  border:none;
  outline:none;
  font-size:1.7rem;
  background:none;
}
.review_input button
{
  margin:1REM;
  padding:1rem;
  font-size:1.7rem;
  border-radius:51px;
  border:none;
  background:rgb(244, 59, 108);
}
.review_avtar
{
  height:10rem;
  width:10rem;
}

.review_subinfo
{
  display:flex;
  justify-content:space-between;
}
.review_subinfo p
{
  font-size:1.6rem;
  margin-bottom:.9rem;
}
.description
{
  margin:3rem 4rem;
}
.description h5
{
  margin:1rem 0rem;
}

`

export default TourDetails


