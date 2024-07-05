import CartDetail from './CartDetail';
import PriceCalculation from './PriceCalculation';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PriceTag from '../BuyNow/PriceTag';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import Button from '@mui/material/Button';
import BoltIcon from '@mui/icons-material/Bolt';
import Footerpage from '../Footer/Footerpage';
import { DataContext } from '../ContextApi/DataProvider';
import { CircularProgress } from '@mui/material';

const Cart = () => {
    const { setProductPropdata } = useContext(DataContext);
    const [products, setProducts] = useState([]);
    console.log('products:', products);
    const [priceCalculateProduct, setPriceCalculateProduct] = useState([]);

    const [showBox, setShowBox] = useState(1);
    const navigate = useNavigate();

    const [calculationPrice, setCalculationPrice] = useState({
        price: 0,
        discount: 0,
        totalPrice: '',
    });

    const CalculatePriceWhenQuantityChange = (
        pri,
        disc,
        totprice,
        direction
    ) => {
        if (direction === 'dec') {
            setCalculationPrice((prevState) => ({
                price: prevState.price - disc,
                discount: prevState.discount - pri,
                totalPrice: prevState.totalPrice - (disc - pri),
            }));
        } else {
            setCalculationPrice((prevState) => ({
                price: prevState.price + disc,
                discount: prevState.discount + pri,
                totalPrice: prevState.totalPrice + (disc - pri),
            }));
        }
    };

    useEffect(() => {
        let totalPrice = 0;
        let totalDiscount = 0;

        priceCalculateProduct.forEach((product) => {
            totalPrice += product.price.mrp;
            totalDiscount += product.price.mrp - product.price.cost || 0;
        });

        setCalculationPrice({
            price: totalPrice,
            discount: totalDiscount,
            totalPrice: totalPrice - totalDiscount,
        });
    }, [priceCalculateProduct]);

    useEffect(() => {
        handleGetProducts();
    }, []);

    const handleShowBox = (id) => {
        setShowBox(id);
    };

    const handleGetProducts = async () => {
        var url = process.env.REACT_APP_BACKEND_URL;
        try {
            const response = await fetch(`${url}/find-cart`, {
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
            setPriceCalculateProduct(products);
        } catch (error) {
            console.error('There was a problem with the fetch request:', error);
        }
    };
    return (
        <>
            <div style={{ backgroundColor: 'whitesmoke' }}>
                {products.length == 0 ? (
                    <>
                        {' '}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '100vh', // Ensures it covers the entire viewport height
                            }}
                        >
                            <div>
                                <CircularProgress size={30} />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {' '}
                        <Row>
                            <Col lg={8} md={8} sm={6} xs={12} className="col">
                                <div className="content-container">
                                    <div
                                        id="header1"
                                        className={`HeaderBox ${
                                            showBox === 1 ? 'active' : ''
                                        }`}
                                        onClick={() => handleShowBox(1)}
                                    >
                                        <LooksOneIcon id="1Icon" /> &nbsp; ORDER
                                        SUMMARY
                                    </div>
                                    {showBox === 1 && (
                                        <div
                                            className="containerBox"
                                            style={{ marginTop: '-20px' }}
                                        >
                                            {products.map((data) => (
                                                <>
                                                    <CartDetail
                                                        key={data.id}
                                                        data={data}
                                                        setProducts={
                                                            setProducts
                                                        }
                                                        products={products}
                                                        CalculatePriceWhenQuantityChange={
                                                            CalculatePriceWhenQuantityChange
                                                        }
                                                    />
                                                </>
                                            ))}
                                        </div>
                                    )}

                                    <div
                                        style={{
                                            padding: '20px',
                                            backgroundColor: 'white',
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                        }}
                                    >
                                        <Button
                                            onClick={() => {
                                                setProductPropdata(products);
                                                navigate(`/place-order`);
                                            }}
                                            style={{
                                                backgroundColor: '#fb641b',
                                                width: '300px',
                                                color: 'white',
                                                height: '55px',
                                                borderRadius: '2px',
                                            }}
                                        >
                                            <BoltIcon />
                                            PLACE ORDER
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="price-container">
                                    <PriceTag
                                        calculationPrice={calculationPrice}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Footerpage />
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
