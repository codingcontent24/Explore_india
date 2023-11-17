import express from 'express';
import { 
    createTour,
    updateTour,
    deleteTour,
    getSingleTour,
    getAllTour, 
    getTourBySearch,
    getFeaturedTour,
    getTourCount
} from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyTokens.js';
    
const router =express.Router();
// crteate a new tour
router.post('/',verifyAdmin,createTour);

// update new tour
router.put('/:id',verifyAdmin,updateTour);

// delete a tour
router.delete('/:id',verifyAdmin,deleteTour);

//get single tour 
router.get('/:id',getSingleTour);

// get all the tours
router.get('/',getAllTour);

// get tour by search
router.get("/search/getTourBysearch",getTourBySearch);

// get featured tour
router.get("/search/getFeaturedTours",getFeaturedTour);

//  get tour count
router.get("/search/getTourCount",getTourCount);

export default router;