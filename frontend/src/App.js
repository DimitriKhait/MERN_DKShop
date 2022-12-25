import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from './screens/CartScreen.js';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ErrorScreen from './screens/ErrorScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />

                        <Route
                            path="/page/:pageNumber"
                            element={<HomeScreen />}
                        />

                        <Route
                            path="/search/:keyword/page/:pageNumber"
                            element={<HomeScreen />}
                        />

                        <Route path="/login" element={<LoginScreen />} />

                        <Route path="/register" element={<RegisterScreen />} />

                        <Route path="/profile" element={<ProfileScreen />} />

                        <Route path="/shipping" element={<ShippingScreen />} />

                        <Route path="/payment" element={<PaymentScreen />} />

                        <Route
                            path="/search/:keyword"
                            element={<HomeScreen />}
                        />

                        <Route
                            path="/placeorder"
                            element={<PlaceOrderScreen />}
                        />

                        <Route path="/order/:id" element={<OrderScreen />} />

                        <Route
                            path="/product/:id"
                            element={<ProductScreen />}
                        />

                        <Route path="/cart" element={<CartScreen />}>
                            <Route path=":id/:qty" element={<CartScreen />} />
                        </Route>

                        <Route
                            path="/admin/userlist"
                            element={<UserListScreen />}
                        />

                        <Route
                            path="/admin/user/:id/edit"
                            element={<UserEditScreen />}
                        />

                        <Route
                            path="/admin/productlist"
                            element={<ProductListScreen />}
                        />

                        <Route
                            path="/admin/productlist/:pageNumber"
                            element={<ProductListScreen />}
                        />

                        <Route
                            path="/admin/product/:id/edit"
                            element={<ProductEditScreen />}
                        />

                        <Route
                            path="/admin/orderlist"
                            element={<OrderListScreen />}
                        />

                        <Route path="*" element={<ErrorScreen />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
