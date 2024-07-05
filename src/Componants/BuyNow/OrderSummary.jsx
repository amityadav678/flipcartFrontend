import React from 'react';
import './OrderSummary.css';

const OrderSummary = () => {
    const cartData = [
        {
            id: 'product1',
            url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
            detailUrl:
                'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
            title: {
                shortTitle: 'Home & Kitchen',
                longTitle:
                    'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)',
            },
            price: {
                mrp: 1195,
                cost: 625,
                discount: '47%',
            },
            quantity: 1,
            description:
                'This electric kettle from Pigeon will soon become a traveler’s best friend, a hostelite’s savior, and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee, and green tea.',
            discount: 'Extra 10% Off',
            tagline: 'Deal of the day',
        },
        {
            id: 'product1',
            url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
            detailUrl:
                'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
            title: {
                shortTitle: 'Home & Kitchen',
                longTitle:
                    'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)',
            },
            price: {
                mrp: 1195,
                cost: 625,
                discount: '47%',
            },
            quantity: 1,
            description:
                'This electric kettle from Pigeon will soon become a traveler’s best friend, a hostelite’s savior, and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee, and green tea.',
            discount: 'Extra 10% Off',
            tagline: 'Deal of the day',
        },
    ];

    return (
        <div className="order-summary">
            {cartData.map((item) => (
                <>
                    <div key={item.id} className="order-item">
                        <div className="item-image">
                            <img src={item.url} alt={item.title.shortTitle} />
                        </div>
                        <div className="item-details">
                            <div className="item-title">
                                {item.title.longTitle}
                            </div>
                            <div className="item-price">
                                <span className="item-cost">
                                    ₹{item.price.cost}
                                </span>
                                <span className="item-mrp">
                                    ₹{item.price.mrp}
                                </span>
                                <span className="item-discount">
                                    {item.price.discount} off
                                </span>
                            </div>

                            <div className="item-tagline">{item.tagline}</div>
                        </div>
                    </div>
                    <div>GST Invoice not available Details</div>
                </>
            ))}
        </div>
    );
};

export default OrderSummary;
// <div>GST Invoice not available Details</div>
