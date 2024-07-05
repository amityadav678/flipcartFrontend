import React from 'react';
import './PriceTag.css';

const PriceTag = ({ calculationPrice }) => {
    return (
        <div className="price-tag-container">
            <div className="price-tag-content">
                <h6 className="price-tag-heading">PRICE DETAILS</h6>
                <hr className="price-tag-hr" />
                <div className="price-details">
                    <div className="alignPriceItems">
                        <p>Price</p>
                        <p>₹{calculationPrice.price.toLocaleString()}</p>
                    </div>
                    <div className="alignPriceItems">
                        <p>Discount</p>
                        <p style={{ color: 'green' }}>
                            - ₹{calculationPrice.discount.toLocaleString()}
                        </p>
                    </div>
                    <div className="alignPriceItems">
                        <p>Delivery Charges</p>
                        <p>
                            <strike>₹40</strike>
                            &nbsp;
                            <span style={{ color: 'green' }}>Free</span>
                        </p>
                    </div>
                    <hr className="price-tag-hr" />
                    <div className="alignPriceItems total-amount">
                        <p>Total Amount</p>
                        <p>₹{calculationPrice.totalPrice.toLocaleString()}</p>
                    </div>
                    <hr className="price-tag-hr" />
                </div>
                <p className="savings-text">
                    You will save ₹{calculationPrice.discount.toLocaleString()}{' '}
                    on this order
                </p>
            </div>
        </div>
    );
};

export default PriceTag;
