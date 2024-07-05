import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../../data';
import './Slider.css';

const Slider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const sbiimg =
        'https://rukminim2.flixcart.com/fk-p-flap/1000/90/image/606a19936b528d9d.jpg?q=20';

    return (
        <div>
            <Carousel
                className="carouselContainer"
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
            >
                {bannerData.map((e, index) => (
                    <img
                        key={index} // Ensures unique keys for each element
                        src={e.url}
                        alt={`Banner ${index + 1}`} // Provides an alt attribute for accessibility
                        style={{ width: '100%', height: 'auto' }} // Ensures images are responsive
                    />
                ))}
            </Carousel>

            <img
                key={1} // Ensures unique keys for each element
                src={sbiimg}
                alt={`Banner ${1 + 1}`} // Provides an alt attribute for accessibility
                style={{ width: '100%', height: 'auto' }} // Ensures images are responsive
            />
        </div>
    );
};

export default Slider;
