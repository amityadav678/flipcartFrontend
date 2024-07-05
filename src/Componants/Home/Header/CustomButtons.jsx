import React, { useState } from 'react';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RedeemIcon from '@mui/icons-material/Redeem';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import './CustomButtons.css';
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const CustomButtons = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [userName, setUserName] = useState(null);
    const navigate = useNavigate();

    const handleLogin = () => {
        setUserName(null);
        localStorage.removeItem('Login');
        localStorage.removeItem('address');
    };

    return (
        <>
            <Login
                show={loginModalShow}
                onHide={() => setLoginModalShow(false)}
                setUserName={setUserName}
            />
            <div className="customBox">
                <div
                    className="loginContainer"
                    onMouseEnter={() => setShowPopup(true)}
                    onMouseLeave={() => setShowPopup(false)}
                >
                    {userName === null ? (
                        <>
                            {' '}
                            <Button
                                variant="contained"
                                style={{ weight: '100px' }}
                                onClick={() => setLoginModalShow(true)}
                            >
                                Login
                            </Button>
                        </>
                    ) : (
                        <>
                            {' '}
                            <Button
                                variant="contained"
                                style={{ weight: '100px' }}
                                onClick={() => handleLogin()}
                            >
                                <PowerSettingsNewIcon
                                    style={{ fontSize: '18px' }}
                                />{' '}
                                &nbsp;
                                {userName}
                            </Button>
                        </>
                    )}

                    {showPopup && (
                        <div className="popup">
                            <div className="popupHeader">
                                <p style={{ color: 'black', fontSize: '11px' }}>
                                    New customer?
                                </p>
                                <Button
                                    variant="text"
                                    color="primary"
                                    onClick={() => setLoginModalShow(true)}
                                >
                                    Sign Up
                                </Button>
                            </div>
                            <div className="popupItem">
                                <AccountCircleIcon
                                    style={{ color: 'blue', height: '20px' }}
                                />
                                <p>My Profile</p>
                            </div>
                            <div className="popupItem">
                                <StarIcon
                                    style={{ color: 'blue', height: '20px' }}
                                />
                                <p>Flipkart Plus Zone</p>
                            </div>
                            <div className="popupItem">
                                <ListAltIcon
                                    style={{ color: 'blue', height: '20px' }}
                                />
                                <p>Orders</p>
                            </div>
                            <div className="popupItem">
                                <FavoriteIcon
                                    style={{ color: 'blue', height: '20px' }}
                                />
                                <p>Wishlist</p>
                            </div>
                            <div className="popupItem">
                                <EmojiEventsIcon
                                    style={{ color: 'blue', height: '20px' }}
                                />
                                <p>Rewards</p>
                            </div>
                            <div className="popupItem">
                                <CardGiftcardIcon
                                    style={{ color: 'blue', height: '20px' }}
                                />
                                <p>Gift Cards</p>
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className="Cart"
                    style={{ cursor: 'pointer' }}
                    //   cursor: pointer;
                    onClick={() => {
                        navigate(`/cart`);
                    }}
                >
                    <ShoppingCartIcon />
                    <p>Cart</p>
                </div>
                <div className="Cart">
                    <AddBusinessIcon />
                    <p>Become a Seller</p>
                </div>
                <div className="Cart">
                    <p>More</p>
                </div>
            </div>
        </>
    );
};

export default CustomButtons;
