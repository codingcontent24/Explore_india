import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import CommonSection from '../shared/CommonSection';
import tourData from './../assets/data/tours';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Grid from '@mui/material/Grid';
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'


const Tour = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0)

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`)
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)


  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0,0);
  }, [page, tourCount, tours]);


  
  return (
    <>
      <CommonSection title={"All Tours"} />
      <Common_searchbar>
        <div className="search_bar">
          <SearchBar />
        </div>
      </Common_searchbar>
      <Tour_section>
        <div className="maingrid">
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {loading && <h4 className="text_center">Loading.....</h4>}
            {error && <h4 className="text_center">{error}</h4>}
            {!loading && !error && tours?.map(tour => (
              <Grid item lg={4} xs={4} sm={4} md={4} >
                <TourCard tour={tour} />
              </Grid>
            ))
            }

          </Grid>

          <div className="pagination">
            {[...Array(pageCount).keys()].map(number => (
              <span key={number} onClick={() => setPage(number)}
                className={page === number ? 'active__page' : ""}
              >
                {number + 1}
              </span>
            ))}
          </div>
        </div>
      </Tour_section>
    </>
  )
}
const Common_searchbar = styled.section`



.search_bar
{
    justify-content:center;
    margin: 2rem 0;
}

`
const Tour_section = styled.section`
.maingrid{
 margin:6rem 17rem;
}

.pagination
{
 
  margin:4rem;
  justify-content:center;
  text-align:center;
}
.pagination span
{
  border:2px solid rgb(244, 59, 108);
  padding:3px 9px;
  font-size:1.7rem;
  border-radius:50%;
  margin:4px;
}

.active__page {
  background:rgb(244, 59, 108);
  color:#fff;
}
`
export default Tour
