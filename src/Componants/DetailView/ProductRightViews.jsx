import LoyaltyIcon from '@mui/icons-material/Loyalty';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useState, useEffect } from 'react';
import './ProductRightView.css';
const ProductRightViews = (props) => {
    var data = props.products;

    const fassured =
        'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const [countdown, setCountdown] = useState('');

    // Calculate time remaining until 5:55 AM
    const calculateTimeLeft = () => {
        const now = new Date();
        const targetTime = new Date();
        targetTime.setHours(5, 55, 0, 0); // Set target time to 5:55 AM

        let difference = targetTime.getTime() - now.getTime();

        if (difference < 0) {
            difference += 5 * 60 * 60 * 1000; // If target time is already passed, add 24 hours
        }

        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return `${hours}h ${minutes}m ${seconds}s`;
    };

    // Update countdown every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [deliveryDate, setDeliveryDate] = useState('');

    useEffect(() => {
        // Calculate delivery date
        const today = new Date();
        const deliveryDate = new Date(today);
        deliveryDate.setDate(today.getDate() + 2); // Adding 2 days
        const options = { day: 'numeric', month: 'short', weekday: 'long' };
        const formattedDeliveryDate = deliveryDate.toLocaleDateString(
            'en-US',
            options
        );
        setDeliveryDate(formattedDeliveryDate);
    }, []);

    return (
        <>
            {data ? (
                <>
                    <div>
                        <p>{data.title.longTitle}</p>
                        <p
                            style={{
                                marginTop: '-15px',
                                color: '#878787',
                                fontSize: '14px',
                            }}
                        >
                            8 Rating & 1 Reviews
                            <span>
                                <img
                                    src={fassured}
                                    style={{
                                        width: '77px',
                                        marginLeft: '20px',
                                    }}
                                    alt=""
                                />
                            </span>
                            <div>
                                <span style={{ fontSize: '28px' }}>
                                    ₹{data.price.cost}
                                </span>
                                &nbsp; &nbsp;
                                <span>
                                    <strike style={{ color: '#878787' }}>
                                        ₹{data.price.mrp}
                                    </strike>
                                </span>
                                &nbsp; &nbsp;
                                <span style={{ color: 'green' }}>
                                    {data.price.discount} off
                                </span>
                            </div>
                            <div
                                style={{
                                    fontSize: '14px',
                                    marginTop: '10px',
                                    color: 'black',
                                }}
                            >
                                <p>
                                    <strong>Available offers</strong>
                                </p>
                                <p>
                                    <LoyaltyIcon
                                        fontSize="small"
                                        style={{ color: '#00CC00' }}
                                    />{' '}
                                    <strong style={{ color: 'black' }}>
                                        Bank Offer
                                    </strong>{' '}
                                    Get ₹50 instant discount on first Flipkart
                                    UPI transaction on order of ₹200 and above{' '}
                                    <span style={{ color: 'blue' }}>
                                        <strong>T&C</strong>
                                    </span>
                                </p>
                                <p>
                                    <LoyaltyIcon
                                        fontSize="small"
                                        style={{ color: '#00CC00' }}
                                    />{' '}
                                    <strong style={{ color: 'black' }}>
                                        Bank Offer
                                    </strong>{' '}
                                    5% Cashback on Flipkart Axis Bank Card{' '}
                                    <span style={{ color: 'blue' }}>
                                        <strong>T&C</strong>
                                    </span>
                                </p>
                                <p>
                                    <LoyaltyIcon
                                        fontSize="small"
                                        style={{ color: '#00CC00' }}
                                    />{' '}
                                    <strong style={{ color: 'black' }}>
                                        Bank Offer
                                    </strong>{' '}
                                    10% off on ICICI Bank Credit Card
                                    Transactions, up to ₹1000 on orders of
                                    ₹5,000 and above{' '}
                                    <span style={{ color: 'blue' }}>
                                        <strong>T&C</strong>
                                    </span>
                                </p>
                                <p>
                                    <LoyaltyIcon
                                        fontSize="small"
                                        style={{ color: '#00CC00' }}
                                    />{' '}
                                    <strong style={{ color: 'black' }}>
                                        Special Price
                                    </strong>{' '}
                                    Get extra 5% off (price inclusive of
                                    cashback/coupon){' '}
                                    <span style={{ color: 'blue' }}>
                                        <strong>T&C</strong>
                                    </span>
                                </p>
                                <p>
                                    <DateRangeIcon
                                        fontSize="small"
                                        style={{ color: '#00CC00' }}
                                    />{' '}
                                    <strong style={{ color: 'black' }}>
                                        No cost EMI ₹{' '}
                                        {Math.floor(data.price.cost / 3)}/month.
                                    </strong>{' '}
                                    Standard EMI also available{' '}
                                    <span style={{ color: 'blue' }}>
                                        <strong>View Plans</strong>
                                    </span>
                                </p>
                                <p>
                                    <LoyaltyIcon
                                        fontSize="small"
                                        style={{ color: '#00CC00' }}
                                    />{' '}
                                    <strong style={{ color: 'black' }}>
                                        Bank Offer
                                    </strong>{' '}
                                    10% off on ICICI Bank Credit Card EMI
                                    Transactions, up to ₹1250 on orders of
                                    ₹5,000 and above{' '}
                                    <span style={{ color: 'blue' }}>
                                        <strong>T&C</strong>
                                    </span>
                                </p>
                                <p>
                                    <LoyaltyIcon
                                        fontSize="small"
                                        style={{ color: '#00CC00' }}
                                    />{' '}
                                    <strong style={{ color: 'black' }}>
                                        Bank Offer
                                    </strong>{' '}
                                    Extra ₹1000 off on IDFC FIRST Bank Credit
                                    Card EMI Txns on a Net Cart Value of ₹40,000
                                    and above{' '}
                                    <span style={{ color: 'blue' }}>
                                        <strong>T&C</strong>
                                    </span>
                                </p>
                                <p>
                                    <LoyaltyIcon
                                        fontSize="small"
                                        style={{ color: '#00CC00' }}
                                    />{' '}
                                    <strong style={{ color: 'black' }}>
                                        Bank Offer
                                    </strong>{' '}
                                    Extra ₹750 off on OneCard Credit Card EMI
                                    Transactions on products priced ₹30,000 and
                                    above{' '}
                                    <span style={{ color: 'blue' }}>
                                        <strong>T&C</strong>
                                    </span>
                                </p>
                                <p>
                                    <LoyaltyIcon
                                        fontSize="small"
                                        style={{ color: '#00CC00' }}
                                    />{' '}
                                    <strong style={{ color: 'black' }}>
                                        Bank Offer
                                    </strong>{' '}
                                    Extra ₹750 off on OneCard Credit Card EMI
                                    Transactions on products priced ₹50,000 and
                                    above{' '}
                                    <span style={{ color: 'blue' }}>
                                        <strong>T&C</strong>
                                    </span>
                                </p>
                                <p>
                                    <LoyaltyIcon
                                        fontSize="small"
                                        style={{ color: '#00CC00' }}
                                    />{' '}
                                    <strong style={{ color: 'black' }}>
                                        Partner Offer
                                    </strong>{' '}
                                    Make a purchase and enjoy a surprise
                                    cashback/ coupon that you can redeem later!{' '}
                                    <span style={{ color: 'blue' }}>
                                        <strong>Know More</strong>
                                    </span>
                                </p>
                            </div>
                        </p>
                    </div>
                    <div className="product-detail-container">
                        <div className="warranty-section">
                            <span className="highlight-text">
                                3 Years Warranty
                            </span>
                            <span className="know-more">Know More</span>
                        </div>

                        {data.description ? (
                            <>
                                {' '}
                                <div className="description-section">
                                    <h4>Description</h4>
                                    <p>{data.description}</p>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}

                        <div className="delivery-section">
                            <h4>Delivery</h4>
                            <div className="delivery-pincode">
                                <input
                                    type="text"
                                    placeholder="Enter Delivery Pincode"
                                />
                                <button>Check</button>
                            </div>
                            <div className="delivery-details">
                                <span>Delivery by {deliveryDate}</span>
                                <span>
                                    <strike>₹40</strike> if ordered before{' '}
                                    {countdown}
                                </span>
                                <span className="view-details">
                                    View Details
                                </span>
                            </div>
                        </div>

                        <div className="payment-options-section">
                            <h4>Easy Payment Options</h4>
                            <p>
                                No cost EMI starting from ₹
                                {Math.floor(data.price.cost / 3)}
                                /month
                            </p>
                            <p>Cash on Delivery</p>
                            <p>Net banking & Credit/ Debit/ ATM card</p>
                            <span className="view-details">View Details</span>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default ProductRightViews;
