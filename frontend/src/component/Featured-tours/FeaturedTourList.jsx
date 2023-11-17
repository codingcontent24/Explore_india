import React, { useEffect } from 'react'
import styled from 'styled-components';
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours';
import Grid from '@mui/material/Grid';
import useFetch from '../../hooks/useFetch';
import {  BASE_URL } from '../../utils/config';

const FeaturedTourList = () => {

  const{data:featuredTours,loading,error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)

  
   console.log(featuredTours);
   
    return (
        <>
        {
            loading && <h4>Loading.......</h4>
        }
        {
            loading && <h4>{error}</h4>
        }
         <Maingrid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            
                {!loading && !error && featuredTours?.map(tour => (
                        <Grid item lg={4} xs={4} sm={4} md={4} key={tour._id} >
                            <TourCard tour={tour} />
                        </Grid>
                    ))
                }
              
            </Grid>
            </Maingrid>
        </>
    )
}
const Maingrid=styled.div`

margin:6rem 17rem;
`

export default FeaturedTourList;
