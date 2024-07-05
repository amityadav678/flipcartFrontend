import './App.css';
import Home from './Componants/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componants/Home/Header/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetailsView from './Componants/DetailView/ProductDetailView';
import Cart from './Componants/AddToCart/Cart';
import BuyNowContainer from './Componants/BuyNow/BuyNowContainer';
import { DataProvider } from './Componants/ContextApi/DataProvider';
import ThankYou from './Componants/ThanksPage/ThankYou';
function App() {
    return (
        <div className="App">
            <div>
                <BrowserRouter>
                    <DataProvider>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/product/:id"
                                element={<ProductDetailsView />}
                            />
                            <Route path="/cart" element={<Cart />} />
                            <Route
                                path="/place-order"
                                element={<BuyNowContainer />}
                            />
                            <Route path="/thanks" element={<ThankYou />} />
                        </Routes>
                    </DataProvider>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
