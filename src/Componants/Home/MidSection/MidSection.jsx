import './MidSection.css';
import { imageURL } from '../../../data.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const MidSection = () => {
    return (
        <>
            <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
                <div style={{ display: 'flex' }}>
                    {imageURL.map((e) => (
                        <Col lg={4} md={4} xs={12}>
                            <img
                                src={e}
                                alt=""
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Col>
                    ))}
                </div>
            </Row>
        </>
    );
};

export default MidSection;
