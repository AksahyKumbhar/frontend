import React from 'react';
import TourCard from '../../shared/TourCard';
import { Col } from 'reactstrap';
import tourData from '../../assets/data/tours'
import useFetch from './../../hooks/useFetch'
import { BASE_URL } from './../../utils/config'

const FeaturedTourList = () => {
    const { data: featuredTours, 
        loading, 
        error, } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

    // console.log("featuredTours:", featuredTours);

    return (
        <>
            {loading && <h4>Loading..............</h4>}
            {error && <h4>{error}</h4>}
            {!loading && !error && featuredTours && tourData?.map((tour) => (
                <Col lg="3" className="mb-6" sm='6'  key={tour.id}>
                    <TourCard tour={tour} />
                </Col>
            ))}
        </>
    );
};

export default FeaturedTourList;
