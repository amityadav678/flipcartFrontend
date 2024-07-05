import './NavBar.css';
import Search from './Search';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
    const navigate = useNavigate();
    const logoURL =
        'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL =
        'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <>
            <div className="navBox">
                <div
                    className="imageWithText"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        navigate(`/`);
                    }}
                >
                    <img src={logoURL} style={{ width: 75 }} />
                    <div style={{ display: 'flex' }}>
                        <p className="explorePluse">
                            Explore
                            <span className="plus"> Plus</span>
                        </p>
                        &nbsp;
                        <img src={subURL} className="suburl" />
                    </div>
                </div>
                <Search />
            </div>
        </>
    );
};
export default NavBar;
