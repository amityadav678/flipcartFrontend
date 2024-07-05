import React, { useState } from 'react';
import {
    Container,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Button,
    TextField,
    Card,
    CardContent,
    Grid,
} from '@mui/material';
import './PaymentOption.css';

const PaymentOption = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');

    const handleChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Payment Successful');
    };

    return (
        <Container className="payment-container">
            <form onSubmit={handleSubmit}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">
                        Select Payment Method
                    </FormLabel>
                    <RadioGroup
                        aria-label="payment-method"
                        name="paymentMethod"
                        value={paymentMethod}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value="card"
                            control={<Radio />}
                            label="Card Payment"
                        />
                        <FormControlLabel
                            value="cod"
                            control={<Radio />}
                            label="Cash on Delivery"
                        />
                    </RadioGroup>
                </FormControl>
                {paymentMethod === 'card' && (
                    <Card className="card-details">
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Card Number"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Expiry Date"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="CVV"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Card Holder Name"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                )}

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        style={{
                            width: '30%',
                            height: '50px',
                            backgroundColor: 'rgb(251, 100, 27)',
                            marginTop: '20px',
                        }}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="submit-button"
                    >
                        Pay Now
                    </Button>
                </div>
            </form>
        </Container>
    );
};

export default PaymentOption;
