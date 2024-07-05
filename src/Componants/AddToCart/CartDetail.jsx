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
    const [productQuantity, setProductQuantity] = useState(1);
    const fassured =
        'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const handleDeleteProduct = async (id) => {
        const filteredData = products.filter((product) => product._id !== id);
        setProducts(filteredData);

        const url = process.env.REACT_APP_BACKEND_URL;
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

            await response.json();
        } catch (error) {
            console.error('There was a problem with the fetch request:', error);
        }
    };

    return (
        <div
            style={{
                border: '1px solid white',
                paddingLeft: '20px',
                paddingRight: '20px',
                backgroundColor: 'white',
            }}
        >
            <div key={data.id} className="order-item">
                <div className="item-image">
                    <img
                        src={data.url}
                        style={{ width: 'auto' }}
                        alt={data.title.shortTitle}
                    />
                </div>
                <div className="item-details">
                    <div className="item-title">{data.title.longTitle}</div>
                    <span>
                        <img
                            src={fassured}
                            style={{ width: '60px' }}
                            alt="Fassured"
                        />
                    </span>
                    &nbsp; &nbsp;
                    <div className="item-price" style={{ marginTop: '10px' }}>
                        <span className="item-cost">₹{data.price.cost}</span>
                        <span className="item-mrp">₹{data.price.mrp}</span>
                        <span className="item-discount">
                            {data.price.discount} off
                        </span>
                    </div>
                    <div className="item-tagline">{data.tagline}</div>
                    &nbsp; &nbsp;
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div>
                    <RemoveCircleOutlineIcon
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            if (productQuantity > 1) {
                                setProductQuantity(productQuantity - 1);
                                CalculatePriceWhenQuantityChange(
                                    data.price.cost,
                                    data.price.mrp,
                                    data.price.discount,
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
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            setProductQuantity(productQuantity + 1);
                            CalculatePriceWhenQuantityChange(
                                data.price.cost,
                                data.price.mrp,
                                data.price.discount,
                                'inc'
                            );
                        }}
                    />
                </div>
                &nbsp; &nbsp;
                <Button
                    style={{ color: 'black' }}
                    variant="text"
                    onClick={() => handleDeleteProduct(data._id)}
                >
                    SAVE FOR LATER
                </Button>
                &nbsp; &nbsp;
                <Button
                    style={{ color: 'black' }}
                    variant="text"
                    onClick={() => handleDeleteProduct(data._id)}
                >
                    REMOVE
                </Button>
            </div>
            <hr />
        </div>
    );
};

export default CartDetail;
