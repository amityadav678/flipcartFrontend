import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductLSideView from './ProductLSideView';
import ProductRightView from './ProductRightViews';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../Footer/Footerpage';
import { CircularProgress } from '@mui/material';

const ProductDetailsView = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Call the function to fetch products
        handleGetProducts();
    }, [id]);

    const handleGetProducts = async () => {
        var url = process.env.REACT_APP_BACKEND_URL;
        try {
            const response = await fetch(`${url}/product/${id}`, {
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
        } catch (error) {
            console.error('There was a problem with the fetch request:', error);
        }
    };
    return (
        <>
            {products.length != 0 ? (
                <>
                    <div style={{ marginTop: '30px', marginLeft: '150px' }}>
                        <Row>
                            <Col
                                lg={5}
                                md={6}
                                sm={12}
                                xs={12}
                                className="fixed-column"
                            >
                                <ProductLSideView products={products} />
                            </Col>
                            <Col
                                lg={7}
                                md={6}
                                sm={12}
                                xs={12}
                                className="scrollable-column"
                            >
                                <div className="scrollable-content">
                                    <ProductRightView products={products} />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <Footer />
                </>
            ) : (
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
            )}
        </>
    );
};

export default ProductDetailsView;
