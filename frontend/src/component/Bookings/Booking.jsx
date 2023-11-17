import React, { useState, useContext } from 'react'
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './../../context/AuthContect';
import { BASE_URL } from '../../utils/config';


const Booking = ({ tour, avgRating }) => {
    const navigate = useNavigate();
    const { price,reviews,title } = tour;
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName:title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: '',
    })
    const handleChange = e => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    const handleClick = async e => {
        e.preventDefault()

        console.log(booking);

        try {
            if (!user || user === undefined || user === null) {
                alert('please sing in')
                return toast.error("Please sign in ⚠️", { position: "top-center", theme: "colored", })
            }
            const res = await fetch(`${BASE_URL}/booking`,{
                method:'post',
                headers:{
                    'Content-type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(booking)
            })
            const result = await res.json();
            if(!res.ok)
            {
                return alert(result.message)
            }
            toast.success("Booking Successful 👍", { position: "top-center", theme: "colored" })
        } catch (error) {
          alert(error.message);
        }
 
    }

    return (
        <>
            <Bookingsec>
                <div className="booking">
                    <div className="booking_p1">
                        <h3>Rs {price} <span>/per person</span></h3>
                        <span className="tour_rating"> <StarIcon sx={{ fontSize: 13, color: "rgb(244, 59, 108)" }} />
                            {avgRating === 0 ? null : avgRating}({reviews?.length})
                        </span>
                    </div>
                    {/*===========================Booking Form=============================*/}
                    <div className="booking_form_conatiner">
                        <h5>Information</h5>
                        <div className="booking_form">
                            <form className='booking_info' onSubmit={handleClick}>
                                <div className="inputs">
                                    <input type="text" id='fullName' className='input_fields' placeholder='Full Name' required onChange={handleChange} />
                                </div>
                                <div className="inputs">
                                    <input type="number" id='phone' className='input_fields' placeholder='Phone' required onChange={handleChange} />
                                </div>
                                <div className="inputs">
                                    <input type="date" id='bookAt' className='input_fields' placeholder='Phone' required onChange={handleChange} />
                                    <input type="number" id='guestSize' className='input_fields' placeholder='Guest' required onChange={handleChange} />
                                </div>
                                <div className="book_now">
                                    <button class="book_btn" type='submit' onClick={handleClick}>Book Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/*=========================Booking Bottom===========================*/}
                    <div className="booking_bottom_conatiner">
                        <div className="booking_bottom">
                            <p>Rs {price}<CloseIcon className='star' />1 person</p>
                            <p>Rs {price}</p>
                        </div>
                        <div className="booking_bottom">
                            <p>Service Charge</p>
                            <p>Rs 10</p>
                        </div>
                        <div className="booking_bottom">
                            <h5>Total</h5>
                            <h5>Rs {totalAmount}</h5>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </Bookingsec>
        </>
    )
}

const Bookingsec = styled.section`
   
   .booking
   {
    border:1px solid #ccc;
    margin-top:3rem;
   }
.booking_p1
{
    border:1px solid #ccc;
    display:flex;
    justify-content:space-between;
    margin:3rem 4rem;
    align-items:center;
    width:30rem;
    padding:2rem 5rem;
}
.booking_p1 span
{
    font-size:1.6rem;
    font-weight:100;
}
.booking_form_conatiner
{
    border:1px solid #ccc;
    margin:3rem 4rem;
    padding:2rem;
}
.inputs
{
    margin:2rem 0rem;
}

.input_fields
{
    border:none;
    outline:none;
    font-size:1.5rem;
    margin:1rem 1rem;
    border-bottom:1px solid #ccc;
}
.booking_bottom
{
    display:flex;
    justify-content:space-between;
    margin:3rem 4rem;
    align-items:center;
}
.booking_bottom p
{
 font-size:1.5rem;
}
.book_now
{
    text-align:center;
    margin:1rem;
}
.book_btn
{
    padding:1rem 14rem;
    border-radius:10px;
    outline:none;
    color:white;
    border:none;
    background:rgb(244, 59, 108);

}
`
export default Booking;
