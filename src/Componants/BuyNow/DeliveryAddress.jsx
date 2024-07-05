import React from 'react';
import './DeliveryAddress.css';
import { useForm } from 'react-hook-form';
import { Button, TextField, Paper } from '@mui/material';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const DeliveryAddress = ({ setShowBox }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
        trigger,
    } = useForm();

    const handleFormdata = (data) => {
        console.log('data:', data);
        localStorage.removeItem('address');
        localStorage.setItem('address', data.city);
        setShowBox(3);
    };
    return (
        <div className="">
            <Paper className="">
                <div className="step-content">
                    <form onSubmit={handleSubmit(handleFormdata)}>
                        <Row className="prj_rowone">
                            <Col lg={6} md={6} xs={12} className="col">
                                {' '}
                                <TextField
                                    id="name"
                                    label="Full Name"
                                    variant="standard"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{ style: { fontSize: '12px' } }}
                                    InputLabelProps={{
                                        style: { fontSize: '12px' },
                                    }}
                                    {...register('name', {
                                        required: 'This field is Required',

                                        pattern: {
                                            value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                                            message:
                                                'Name must be a string and cannot start with a space',
                                        },
                                    })}
                                />
                                {errors.name && (
                                    <span
                                        style={{
                                            color: 'red',
                                            fontSize: '10px',
                                        }}
                                    >
                                        {errors.name.message}
                                    </span>
                                )}
                            </Col>
                            <Col lg={6} md={6} xs={12} className="col">
                                {' '}
                                <TextField
                                    id="city"
                                    label="City"
                                    variant="standard"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{ style: { fontSize: '12px' } }}
                                    InputLabelProps={{
                                        style: { fontSize: '12px' },
                                    }}
                                    {...register('city', {
                                        required: 'This field is Required',

                                        pattern: {
                                            value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                                            message:
                                                'Name must be a string and cannot start with a space',
                                        },
                                    })}
                                />
                                {errors.city && (
                                    <span
                                        style={{
                                            color: 'red',
                                            fontSize: '10px',
                                        }}
                                    >
                                        {errors.city.message}
                                    </span>
                                )}
                            </Col>
                        </Row>
                        <Row className="prj_rowone">
                            <Col lg={6} md={6} xs={12} className="col">
                                {' '}
                                <TextField
                                    id="state"
                                    label="State"
                                    variant="standard"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{ style: { fontSize: '12px' } }}
                                    InputLabelProps={{
                                        style: { fontSize: '12px' },
                                    }}
                                    {...register('state', {
                                        required: 'This field is Required',

                                        pattern: {
                                            value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                                            message:
                                                'Name must be a string and cannot start with a space',
                                        },
                                    })}
                                />
                                {errors.state && (
                                    <span
                                        style={{
                                            color: 'red',
                                            fontSize: '10px',
                                        }}
                                    >
                                        {errors.state.message}
                                    </span>
                                )}
                            </Col>
                            <Col lg={6} md={6} xs={12} className="col">
                                {' '}
                                <TextField
                                    label="Zip Code"
                                    variant="standard"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{ style: { fontSize: '12px' } }}
                                    InputLabelProps={{
                                        style: { fontSize: '12px' },
                                    }}
                                    {...register('zipcode', {
                                        required: 'This field is required',
                                        pattern: {
                                            value: /^\d{6}(-\d{5})?$/,
                                            message: 'Zipcode must be 6 digits',
                                        },
                                    })}
                                />
                                {errors.zipcode && (
                                    <span
                                        style={{
                                            color: 'red',
                                            fontSize: '10px',
                                        }}
                                    >
                                        {errors.zipcode.message}
                                    </span>
                                )}
                            </Col>
                        </Row>
                        <TextField
                            id="address"
                            label="Address"
                            variant="standard"
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontSize: '12px' } }}
                            InputLabelProps={{ style: { fontSize: '12px' } }}
                            {...register('address', {
                                required: 'This field is Required',

                                pattern: {
                                    value: /^[A-Za-z0-9\s,.-]+$/,
                                    message:
                                        'Name must be a string and cannot start with a space',
                                },
                            })}
                        />
                        {errors.address && (
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                {errors.address.message}
                            </span>
                        )}
                        &nbsp;
                        <Row className="prj_rowone">
                            <Col lg={6} md={6} xs={12} className="col">
                                {' '}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    className="continue-button"
                                    style={{
                                        height: '45px',
                                        backgroundColor: '#fb641b',
                                    }}
                                >
                                    SAVE AND DELIVER HERE
                                </Button>
                            </Col>
                            <Col lg={6} md={6} xs={12} className="col">
                                {' '}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    className="continue-button"
                                    style={{
                                        height: '45px',
                                        color: 'blue',
                                        backgroundColor: 'white',
                                    }}
                                >
                                    CANCLE
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Paper>
        </div>
    );
};

export default DeliveryAddress;
