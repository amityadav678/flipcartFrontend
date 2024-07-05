import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ThankYou.css'; // Import your CSS file for styles

const ThankYou = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    };

    return (
        <Box className="thank-you-container">
            <Container maxWidth="sm" className="thank-you-content">
                <Typography variant="h3" className="thank-you-text">
                    Thank You for Your Purchase!
                </Typography>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <Typography variant="body1" className="thank-you-subtext">
                    We appreciate your business. Your order is being processed.
                </Typography>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <Button
                    style={{ marginTop: '20px' }}
                    variant="contained"
                    color="primary"
                    onClick={handleRedirect}
                    className="home-button"
                >
                    Go to Home Page
                </Button>
            </Container>
        </Box>
    );
};

export default ThankYou;
