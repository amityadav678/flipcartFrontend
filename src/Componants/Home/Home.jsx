import Categorys from './Categorys/Categorys';
import Slider from './Slider/Slider';
import ProductSlider from './Slider/productSlider';
import './Home.css';
import MidSection from './MidSection/MidSection';
const Home = () => {
    return (
        <>
            <Categorys />
            <div className="givePaddingToAll">
                <Slider />
                <ProductSlider />
            </div>
        </>
    );
};

export default Home;
