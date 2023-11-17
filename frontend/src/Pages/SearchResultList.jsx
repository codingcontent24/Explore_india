import React, { useState } from 'react';
import CommonSection from '../shared/CommonSection';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import TourCard from '../shared/TourCard';
import styled from 'styled-components';
const SearchResultList = () => {

    const location = useLocation()
    const [data] = useState(location.state)
    console.log(data)

    return (
        <>
            <CommonSection title={"Tour Search Result"} />
            <Maingrid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        data.length == 0 ? <h4 className="text_center">No Tour Found</h4> : data?.map(tour => (
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
const Maingrid = styled.div`

margin:6rem 17rem;
`

export default SearchResultList
