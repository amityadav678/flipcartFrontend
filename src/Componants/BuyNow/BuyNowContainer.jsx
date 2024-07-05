import './BuyNowContainer.css';
import React, { useContext, useState, useEffect } from 'react';
import LoginSignup from './LoginSignup';
import DeliveryAddress from './DeliveryAddress';
import OrderSummary from './OrderSummary';
import PaymentOption from './PaymentOption';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import AddIcon from '@mui/icons-material/Add';
import PriceTag from './PriceTag';
import CartDetail from '../AddToCart/CartDetail';
import { DataContext } from '../ContextApi/DataProvider';
import { CircularProgress } from '@mui/material';
import Login from '../Home/Login/Login';
import { Button } from '@mui/material';

const BuyNowContainer = () => {
    const { productPropdata, setProductPropdata } = useContext(DataContext);
    const [findLogin, setFindLogin] = useState(false);
    const [showBox, setShowBox] = useState(1);
    const [address, setAddress] = useState(null);
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [userName, setUserName] = useState(null);
    const handleShowBox = (id) => {
        setShowBox(id);
    };

    useEffect(() => {}, []);

    useEffect(() => {
        var getLogin = localStorage.getItem('Login');
        if (getLogin == null) {
            setUserName(getLogin);
            setFindLogin(true);
            setShowBox(2);
        } else {
            setFindLogin(false);
            setShowBox(1);
        }

        let address = localStorage.getItem('address');
        console.log('address:', address);
        setAddress(address);
        setShowBox(1);
    }, []);

    useEffect(() => {
        let totalPrice = 0;
        let totalDiscount = 0;

        productPropdata.forEach((product) => {
            totalPrice += product.price.mrp;
            totalDiscount += product.price.mrp - product.price.cost || 0;
        });

        setCalculationPrice({
            price: totalPrice,
            discount: totalDiscount,
            totalPrice: totalPrice - totalDiscount,
        });
    }, [productPropdata]);

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

    return (
        <>
            <Login
                show={loginModalShow}
                onHide={() => setLoginModalShow(false)}
                setUserName={setUserName}
            />
            <div style={{ backgroundColor: 'whitesmoke' }}>
                {productPropdata.length == 0 ? (
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
                        <Row className="prj_rowone">
                            <Col lg={8} md={8} xs={12} className="col">
                                <div className="content-container">
                                    <div
                                        onClick={() => {
                                            {
                                                userName ? (
                                                    <>{}</>
                                                ) : (
                                                    <>
                                                        {setLoginModalShow(
                                                            true
                                                        )}
                                                    </>
                                                );
                                            }
                                        }}
                                    >
                                        <div
                                            id="header1"
                                            style={{ display: 'flex' }}
                                            className={`HeaderBox ${
                                                showBox === 1 ? 'active' : ''
                                            }`}
                                        >
                                            <div>
                                                {' '}
                                                <LooksOneIcon id="1Icon" />{' '}
                                                &nbsp; LOGIN OR SIGNUP
                                            </div>
                                            {userName ? (
                                                <>
                                                    {' '}
                                                    <div>
                                                        <Button
                                                            variant="text"
                                                            style={{
                                                                color: 'black',
                                                            }}
                                                        >
                                                            {userName}
                                                        </Button>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    {' '}
                                                    <div>
                                                        <Button
                                                            variant="text"
                                                            style={{
                                                                color: 'black',
                                                            }}
                                                        >
                                                            You Should Login
                                                            First
                                                        </Button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        style={{ display: 'flex' }}
                                        id="header2"
                                        className={`HeaderBox centerBox ${
                                            showBox === 2 ? 'active' : ''
                                        }`}
                                        onClick={() => handleShowBox(2)}
                                    >
                                        <div>
                                            <LooksTwoIcon id="2Icon" />
                                            &nbsp; DELIVERY ADDRESS
                                        </div>
                                        <div style={{ paddingRight: '20px' }}>
                                            &nbsp;
                                            {address == null ? (
                                                <>
                                                    <AddIcon
                                                        style={{
                                                            color: 'blue',
                                                        }}
                                                    />
                                                    <>Add a new address</>
                                                </>
                                            ) : (
                                                <>{address}</>
                                            )}
                                        </div>
                                    </div>
                                    {showBox === 2 && (
                                        <div className="containerBox">
                                            <DeliveryAddress
                                                setShowBox={setShowBox}
                                            />
                                        </div>
                                    )}

                                    <div
                                        id="header3"
                                        className={`HeaderBox ${
                                            showBox === 3 ? 'active' : ''
                                        }`}
                                        onClick={() => handleShowBox(3)}
                                    >
                                        <span>
                                            <Looks3Icon id="3Icon" />
                                        </span>
                                        &nbsp; ORDER SUMMARY
                                    </div>
                                    {showBox === 3 && (
                                        <div
                                            className="containerBox"
                                            style={{ marginTop: '-20px' }}
                                        >
                                            {productPropdata.map((data) => (
                                                <>
                                                    <CartDetail
                                                        key={data.id}
                                                        data={data}
                                                        setProducts={
                                                            setProductPropdata
                                                        }
                                                        products={
                                                            productPropdata
                                                        }
                                                        CalculatePriceWhenQuantityChange={
                                                            CalculatePriceWhenQuantityChange
                                                        }
                                                    />
                                                </>
                                            ))}
                                        </div>
                                    )}

                                    <div
                                        id="header4"
                                        className={`HeaderBox ${
                                            showBox === 4 ? 'active' : ''
                                        }`}
                                        onClick={() => handleShowBox(4)}
                                    >
                                        <Looks4Icon id="4Icon" />
                                        &nbsp; PAYMENT OPTIONS
                                    </div>
                                    {showBox === 4 && (
                                        <div className="containerBox">
                                            <PaymentOption />
                                        </div>
                                    )}
                                </div>
                            </Col>
                            <Col lg={4} md={4} xs={12} className="col">
                                <div className="price-container">
                                    <PriceTag
                                        calculationPrice={calculationPrice}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </>
                )}
            </div>
        </>
    );
};

export default BuyNowContainer;
