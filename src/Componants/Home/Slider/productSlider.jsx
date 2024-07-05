import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../../data';
import './productSlider.css';
import Countdown from 'react-countdown';
import Button from '@mui/material/Button';
import MidSection from '../MidSection/MidSection';
import Slider from './Slider';
import { useNavigate } from 'react-router-dom';

const ProductSlider = () => {
    const navigate = useNavigate();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    useEffect(() => {
        // Call the function to fetch products
        handleGetProducts();
    }, []);

    const [products, setProducts] = useState([]);
    const sbiimg =
        'https://rukminim2.flixcart.com/fk-p-flap/1000/90/image/606a19936b528d9d.jpg?q=20';

    const handleGetProducts = async () => {
        var url = process.env.REACT_APP_BACKEND_URL;
        try {
            const response = await fetch(`${url}/products`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const products = await response.json();
            setProducts(products);
        } catch (error) {
            console.error('There was a problem with the fetch request:', error);
        }
    };

    const timerURL =
        'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <div style={{}}>
                {hours}:{minutes}:{seconds} Left
            </div>
        );
    };

    return (
        <>
            <div style={{ backgroundColor: 'white', height: '58px' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: '10px', // Corrected from 'alignContent' to 'alignItems'
                    }}
                >
                    <p className="deal"> Deal of the day</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={timerURL} alt="" style={{ width: 24 }} />
                        <Countdown
                            date={Date.now() + 5.04e7}
                            renderer={renderer}
                        />
                        &nbsp;
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center', // Corrected from 'alignContent' to 'alignItems'
                            justifyContent: 'flex-end',
                            marginLeft: 'auto', // Added to push this div to the right
                        }}
                    >
                        <Button variant="contained">View All</Button>
                    </div>
                </div>
                <Carousel
                    className="carouselContainer"
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    infinite={true}
                    swipeable={false}
                    draggable={false}
                    // showDots={true}
                    keyBoardControl={true}
                    centerMode={true}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {products.map((e, index) => (
                        <div
                            className="productBox"
                            style={{
                                padding: '25px 15px',
                                textAlign: 'center',
                            }}
                            onClick={() => navigate(`product/${e._id}`)}
                        >
                            <img
                                key={index} // Ensures unique keys for each element
                                src={e.url}
                                alt={`Banner ${index + 1}`} // Provides an alt attribute for accessibility
                                style={{ width: 'auto', height: '150px' }} // Ensures images are responsive
                            />
                            <p>{e.title.shortTitle}</p>
                            <p style={{ color: 'green' }}>{e.discount}</p>
                            <p>{e.tagline}</p>
                        </div>
                    ))}
                </Carousel>
                <MidSection />
                <Slider />
            </div>
        </>
    );
};

export default ProductSlider;
