import Button from '@mui/material/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import { FavoriteBorder, Favorite } from '@mui/icons-material'; // Import Material-UI icons
import { useNavigate } from 'react-router-dom';
import BuyNowContainer from '../BuyNow/BuyNowContainer';
import { DataContext } from '../ContextApi/DataProvider';
import { useContext } from 'react';
const ProductLSideView = (props) => {
    const { setProductPropdata } = useContext(DataContext);
    var data = props.products;
    const navigate = useNavigate();

    const handleAddCart = async () => {
        var url = process.env.REACT_APP_BACKEND_URL;
        try {
            const response = await fetch(`${url}/cart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            navigate(`/cart`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
                navigate(`/cart`);
            }
            const Productdata = await response.json();
        } catch (error) {
            navigate(`/cart`);
            console.error(
                'There was a problem with the add to cart request:',
                error
            );
        }
    };

    return (
        <>
            {data ? (
                <>
                    <div
                        style={{
                            border: '1px solid #f0f0f0',
                            // padding: '40px 0 0 80px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src={data.detailUrl} alt="" style={{}} srcset="" />
                    </div>
                    <Row style={{ marginTop: '20px' }}>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Button
                                style={{
                                    backgroundColor: '#ff9f00',
                                    width: '100%',
                                    color: 'white',
                                    height: '55px',
                                    borderRadius: '2px',
                                }}
                                onClick={handleAddCart}
                            >
                                <ShoppingCartIcon />
                                ADD TO CART
                            </Button>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Button
                                onClick={() => {
                                    setProductPropdata([data]);
                                    navigate(`/place-order`);
                                }}
                                style={{
                                    backgroundColor: '#fb641b',
                                    width: '100%',
                                    color: 'white',
                                    height: '55px',
                                    borderRadius: '2px',
                                }}
                            >
                                <BoltIcon />
                                BUY NOW
                            </Button>
                        </Col>
                    </Row>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default ProductLSideView;
