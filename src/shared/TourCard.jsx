import React from 'react'
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom'
import "./tour-card.css"
import calculateAvgRating from '../utils/avgRating';


const TourCard = ({ tour }) => {

    const { id, title, city, photo, price, featured, reviews } = tour;

    const { totalRating, avgRating } = calculateAvgRating(reviews)


    return (

        <div className='tour__card p-1'>
            <Card>
                <div className='tour__img'>
                    <img src={photo} alt='tour-img' />
                    {featured && <span>Featured</span>}

                </div>
                <CardBody>
                    <div className='card__top d-flex align-items-center justify-content-between '>
                        <span className='tour__location d-flex align-item-center gap-1'>
                            <i className='ri-map-pin-line'></i>  {city}
                        </span>
                        {/* <span className='tour__rating d-flex align-items-center gap-1'>
                            <i className='ri-star-fill'></i> {avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ? (
                                'Not rated'
                            ) : (
                                <span>({reviews.length})</span>
                            )}

                        </span> */}
                        <span className='tour__rating d-flex align-items-center gap-1'>
                            <i className='ri-star-fill'></i> {avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ? (
                                <span>Not rated</span>
                            ) : (
                                <span>({reviews.length})</span>
                            )}
                        </span>

                    </div>

                    <h5 className='tour__title'><Link to={`/tours/${id}`}>{title}</Link></h5>

                    <div className='card_bottom d-flex align-item-center justify-content-between mt-3 '>
                        <h5 className='text-warning fs-6'>${price}<span className='text-dark'>/per person</span></h5>

                        <button className='btn booking__btn '>
                            <Link to={`/tours/${id}`}>Book Now</Link>
                        </button>


                    </div>

                </CardBody>
            </Card>


        </div>

    )
};



export default TourCard;