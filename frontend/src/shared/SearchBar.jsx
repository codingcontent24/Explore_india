import React, { useRef } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import Groups2Icon from '@mui/icons-material/Groups2';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)
    const navigate = useNavigate();

    const searchHandler = async (e) => {
        e.preventDefault()
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if (location == "" || distance == "" || maxGroupSize == "") {
            return toast.error("All Filed Required ⚠️", { position: "top-center", theme: "colored", })
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
        if (!res.ok) alert('Something went wrong')
        const result = await res.json()

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,{state:result.data})
    }

    return (
        <>
            <Wrapper>
                <form action="" className="search_form">
                    <div className="search_bar">
                        <div className="form_fields">
                            <span className="searchbar_icons"><LocationOnIcon sx={{ fontSize: 40, color: "rgb(244, 59, 108)" }} /></span>
                            <div className="search_fields">
                                <h6>Location</h6>
                                <input type="text" placeholder="Where are you Going ?" className="search_inputs" ref={locationRef} />
                            </div>
                        </div>
                        <div className="form_fields">
                            <span className="searchbar_icons"><SocialDistanceIcon sx={{ fontSize: 40, color: "rgb(244, 59, 108)" }} /></span>
                            <div className="search_fields">
                                <h6>Day&Night</h6>
                                <input type="text" placeholder="Day&Night" className="search_inputs" ref={distanceRef} />
                            </div>
                        </div>
                        <div className="form_fields">
                            <span className="searchbar_icons"><Groups2Icon sx={{ fontSize: 40, color: "rgb(244, 59, 108)" }} /></span>
                            <div className="search_fields">
                                <h6>Max People</h6>
                                <input type="number" placeholder="No of People" className="search_inputs" ref={maxGroupSizeRef} />
                            </div>
                        </div>
                        <div className="form_fields">
                            <div className="btn_field">
                                <input type="submit" value="Search" className="search_btn" onClick={searchHandler} />
                            </div>
                        </div>

                    </div>
                </form>
                <ToastContainer />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`

.search_bar
{
    display:flex;
}

.search_fields
{
    background:white;
    padding:10px;
    margin:4px;
    border-radius:10px;
    text-align:center;
    box-shadow:5px 10px 20px black;
}
.searchbar_icons
{
  margin:71px;
}
.search_inputs
{
    padding:4px;
    border:none;
    outline:none;
    background:none;
    text-align:center;
}

.btn_field
{
    margin:47px 0px;
}
.search_btn
{
    padding:20px 20px;
   color:white;
   background:${({ theme }) => theme.color.bg_btn};
   border-radius:10px;
   border:none;
   outline:none;
   font-size:1.7rem;
}
`

export default SearchBar;
