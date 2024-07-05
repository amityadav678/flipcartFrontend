import React from 'react';
import './LoginSignup.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import StarIcon from '@mui/icons-material/Star';
const LoginSignup = () => {
    return (
        <div className="container">
            <Row className="prj_rowone">
                <Col lg={6} md={6} xs={12} className="col">
                    <div style={{ marginTop: '-10px' }}>
                        <TextField
                            id="standard-basic"
                            label="Enter Mobile number"
                            variant="standard"
                            fullWidth
                            required
                            InputProps={{ style: { fontSize: '12px' } }}
                            InputLabelProps={{ style: { fontSize: '12px' } }}
                        />
                    </div>
                    &nbsp;
                    <div style={{ marginTop: '-10px' }}>
                        <TextField
                            id="standard-basic"
                            label="Enter Password"
                            variant="standard"
                            fullWidth
                            required
                            InputProps={{ style: { fontSize: '12px' } }}
                            InputLabelProps={{ style: { fontSize: '12px' } }}
                        />
                    </div>
                    &nbsp;
                    <div style={{ fontSize: '10px' }}>
                        <Typography
                            style={{ fontSize: '10px' }}
                            variant="body2"
                            color="textSecondary"
                        >
                            By continuing, you agree to Flipkart's{' '}
                            <a href="#">Terms of Use</a> and{' '}
                            <a href="#">Privacy Policy</a>.
                        </Typography>
                    </div>
                    &nbsp;
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="continue-button"
                        style={{
                            backgroundColor: '#fb641b',
                            height: '50px',
                            borderRadius: '1px ',
                            fontWeight: '600',
                        }}
                    >
                        CONTINUE
                    </Button>
                </Col>
                <Col lg={6} md={6} xs={12} className="col">
                    <div className="advantagedata">
                        <p
                            style={{
                                color: '#878787',
                                fontFamily: 'Roboto, Arial, sans-serif',
                            }}
                        >
                            Advantage of our secure login
                        </p>
                        <p className="secure">
                            <LocalShippingIcon
                                style={{ color: 'blue', fontSize: '18' }}
                            />
                            &nbsp; Easily Track Order, Hassle free Return
                        </p>
                        <p className="secure">
                            <NotificationsNoneIcon
                                style={{ color: 'blue', fontSize: '18' }}
                            />{' '}
                            &nbsp;Get Relevant Alert and Recommendation
                        </p>
                        <p className="secure">
                            <StarIcon
                                style={{ color: 'blue', fontSize: '18' }}
                            />
                            &nbsp; Wishlist, Reviews,Rating and more
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LoginSignup;
