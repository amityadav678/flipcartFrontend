import './Login.css';
import Dialog from '@mui/material/Dialog';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const Login = (props) => {
    console.log('props:', props.onHide);
    const [loginSignUp, setLoginSignUp] = useState(true);
    console.log('loginSignUp:', loginSignUp);
    const [userName, setUserName] = useState('');

    const formdata = {
        mobileNumber: '',
        password: '',
        name: '',
    };

    const [enterUserData, setEnterUserData] = useState(formdata);

    const handleForm = (e) => {
        setEnterUserData({ ...enterUserData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (prop) => {
        var url = process.env.REACT_APP_BACKEND_URL;
        console.log('url:', url);
        try {
            const response = await fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: prop.password,
                    phoneNumber: prop.phoneNumber,
                }),
            });

            const userData = await response.json();
            console.log('User Data:', userData.userName);
            props.setUserName(userData.userName.substring(0, 5));
            props.onHide((e) => e(false));
            toast.success('Succesfully Login');
            localStorage.removeItem('Login');
            localStorage.removeItem('address');
            localStorage.setItem('Login', true);
        } catch (error) {
            toast.error('Login fail');
            console.error(
                'There was a problem with the sign-in request:',
                error
            );
        }
    };
    const handleSignin = async (prop) => {
        var url = process.env.REACT_APP_BACKEND_URL;
        try {
            const response = await fetch(`${url}/signin`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: prop.name,
                    password: prop.password,
                    phoneNumber: prop.phoneNumber,
                }),
            });
            props.onHide((e) => e(false));

            if (!response) {
                toast.error('Signing fail');
            } else {
                toast.success('Succesfully Signing');
                props.onHide((e) => e(false));
                props.setUserName(prop.name.substring(0, 5));
                localStorage.removeItem('Login');
                localStorage.removeItem('address');
                localStorage.setItem('Login', true);
            }

            const data = await response.json();
        } catch (error) {
            console.error(
                'There was a problem with the sign-in request:',
                error
            );
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
        trigger,
    } = useForm();

    const handleFormdata = (data) => {
        if (loginSignUp) {
            handleLogin(data);
        } else {
            handleSignin(data);
        }
    };

    return (
        <>
            <Toaster />
            <Modal
                {...props}
                size="lg"
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Body style={{ padding: 0 }}>
                    <Row style={{ height: '550px', color: 'white' }}>
                        <Col
                            style={{ backgroundColor: '#2874f0' }}
                            lg={5}
                            md={5}
                            sm={0}
                            xs={0}
                        >
                            <div className="contanerFirst">
                                {loginSignUp ? (
                                    <>
                                        <h3>Login</h3>
                                        <p>
                                            Get access to your Orders, Wishlist
                                            and Recommendations
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        {' '}
                                        <h3>Looks like you're new here!</h3>
                                        <p>
                                            Sign up with your mobile number to
                                            get started
                                        </p>
                                    </>
                                )}
                            </div>
                        </Col>
                        <Col lg={7} md={7} sm={12} xs={12}>
                            <form onSubmit={handleSubmit(handleFormdata)}>
                                <div className="inputData">
                                    <TextField
                                        {...register('phoneNumber', {
                                            required: 'This field is Required',
                                            pattern: {
                                                value: /^\d{10}$/,
                                                message:
                                                    'Please enter a valid 10-digit phone number',
                                            },
                                        })}
                                        id="standard-basic"
                                        label="Enter Mobile number"
                                        variant="standard"
                                        size="medium"
                                        fullWidth={true}
                                    />
                                    {errors.phoneNumber && (
                                        <span style={{ color: 'red' }}>
                                            {errors.phoneNumber.message}
                                        </span>
                                    )}

                                    <TextField
                                        style={{ marginTop: '20px' }}
                                        {...register('password', {
                                            required: 'This field is Required',

                                            pattern: {
                                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                message:
                                                    'Password must contain at least one letter, one number, one special character, and be at least 8 characters long',
                                            },
                                        })}
                                        id="standard-basic"
                                        label="Enter Password"
                                        variant="standard"
                                        size="medium"
                                        fullWidth={true}
                                    />
                                    {errors.password && (
                                        <span style={{ color: 'red' }}>
                                            {errors.password.message}
                                        </span>
                                    )}

                                    {loginSignUp ? (
                                        <></>
                                    ) : (
                                        <>
                                            <TextField
                                                style={{ marginTop: '20px' }}
                                                {...register('name', {
                                                    required:
                                                        'This field is Required',

                                                    pattern: {
                                                        value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                                                        message:
                                                            'Name must be a string and cannot start with a space',
                                                    },
                                                })}
                                                id="standard-basic"
                                                label="Enter Name"
                                                variant="standard"
                                                size="medium"
                                                fullWidth={true}
                                            />
                                            {errors.name && (
                                                <span style={{ color: 'red' }}>
                                                    {errors.name.message}
                                                </span>
                                            )}
                                        </>
                                    )}

                                    <p
                                        style={{
                                            color: 'black',
                                            marginTop: '20px',
                                        }}
                                    >
                                        By continuing, you agree to Flipkart's
                                        Terms of Use and Privacy Policy.
                                    </p>

                                    <div className="buttonAliment">
                                        {loginSignUp ? (
                                            <>
                                                {' '}
                                                <Button
                                                    type="submit"
                                                    style={{
                                                        backgroundColor:
                                                            '#f86418',
                                                    }}
                                                    // onClick={() => {
                                                    //     handleLogin();
                                                    // }}
                                                >
                                                    Login
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                {' '}
                                                <Button
                                                    type="submit"
                                                    style={{
                                                        backgroundColor:
                                                            '#f86418',
                                                    }}
                                                    // onClick={() => {
                                                    //     handleSignin();
                                                    // }}
                                                >
                                                    Continue
                                                </Button>
                                            </>
                                        )}

                                        <p style={{ marginTop: '20px' }}>OR</p>
                                        {loginSignUp ? (
                                            <>
                                                {' '}
                                                <Button
                                                    className="loginButton"
                                                    style={{
                                                        backgroundColor:
                                                            '#ffff',
                                                        marginTop: '20px',
                                                        marginBottom: '20px',
                                                        color: '#2874f0',
                                                        boxShadow:
                                                            '0 2px 4px 0 rgb(0 0 0 / 20%)',
                                                    }}
                                                >
                                                    Request otp
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button
                                                    className="loginButton"
                                                    style={{
                                                        backgroundColor:
                                                            '#ffff',
                                                        marginTop: '20px',
                                                        marginBottom: '20px',
                                                        color: '#2874f0',
                                                        boxShadow:
                                                            '0 2px 4px 0 rgb(0 0 0 / 20%)',
                                                    }}
                                                    onClick={() => {
                                                        setLoginSignUp(true);
                                                    }}
                                                >
                                                    Existing User? Log in
                                                </Button>
                                            </>
                                        )}

                                        {loginSignUp ? (
                                            <>
                                                {' '}
                                                <p
                                                    onClick={() => {
                                                        setLoginSignUp(false);
                                                    }}
                                                >
                                                    New to flipcart? Create an
                                                    account
                                                </p>
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Login;
