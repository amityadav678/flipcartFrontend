import { useState } from 'react';
import { Button } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CartDetail = ({
    data,
    products,
    setProducts,
    CalculatePriceWhenQuantityChange,
}) => {
    const [productData, setProductData] = useState([data]);

    const [productQuantity, setProductQuantity] = useState(1);
    const fassured =
        'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const handleDeleteProduct = async (id) => {
        const filteredData = products.filter((product) => product._id !== id);
        setProducts(filteredData);

        var url = process.env.REACT_APP_BACKEND_URL;
        try {
            const response = await fetch(`${url}/cart/${id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            // Optionally, you can update the state or UI here if needed
            // For example, you can remove the deleted product from the list of products
        } catch (error) {
            console.error('There was a problem with the fetch request:', error);
        }
    };

    return (
        <>
            <div
                style={{
                    border: '1px solid white',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    backgroundColor: 'white',
                }}
            >
                <div key={productData[0].id} className="order-item">
                    <div className="item-image">
                        <img
                            src={productData[0].url}
                            style={{ width: 'auto' }}
                            alt={productData[0].title.shortTitle}
                        />
                    </div>
                    <div className="item-details">
                        <div className="item-title">
                            {productData[0].title.longTitle}
                        </div>
                        <span>
                            <img
                                src={fassured}
                                style={{
                                    width: '60px',
                                }}
                                alt=""
                            />
                        </span>
                        &nbsp; &nbsp;
                        <div
                            className="item-price"
                            style={{ marginTop: '10px' }}
                        >
                            <span className="item-cost">
                                ₹{productData[0].price.cost}
                            </span>
                            <span className="item-mrp">
                                ₹{productData[0].price.mrp}
                            </span>
                            <span className="item-discount">
                                {productData[0].price.discount} off
                            </span>
                        </div>
                        <div className="item-tagline">
                            {productData[0].tagline}
                        </div>
                        &nbsp; &nbsp;
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div>
                        <RemoveCircleOutlineIcon
                            style={{ courser: 'pointer' }}
                            onClick={() => {
                                if (productQuantity > 1) {
                                    setProductQuantity(productQuantity - 1);
                                    CalculatePriceWhenQuantityChange(
                                        productData[0].price.cost,
                                        productData[0].price.mrp,
                                        productData[0].price.discount,
                                        'dec'
                                    );
                                }
                            }}
                        />
                        &nbsp;
                        <input
                            style={{
                                width: '40px',
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }}
                            type="text"
                            value={productQuantity}
                            readOnly
                        />
                        &nbsp;
                        <ControlPointIcon
                            onClick={() => {
                                setProductQuantity(productQuantity + 1);
                                CalculatePriceWhenQuantityChange(
                                    productData[0].price.cost,
                                    productData[0].price.mrp,
                                    productData[0].price.discount,
                                    'inc'
                                );
                            }}
                        />
                    </div>
                    &nbsp; &nbsp;
                    <Button
                        style={{ color: 'black' }}
                        variant="text"
                        onClick={() => {
                            handleDeleteProduct(productData[0]._id);
                        }}
                    >
                        SAVE FOR LATER
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                        style={{ color: 'black' }}
                        variant="text"
                        onClick={() => {
                            handleDeleteProduct(productData[0]._id);
                        }}
                    >
                        REMOVE
                    </Button>
                </div>
                <hr />
            </div>
        </>
    );
};

export default CartDetail;
