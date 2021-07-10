import React, {Fragment, useEffect} from 'react';
import {Route, Switch} from 'react-router';
import {CartPage, HomePage, ProductPage, ProductsPage} from '../pages';
import {useDispatch} from "react-redux";
import Header from "../header";
import GoogleMap from "../google-map";
import Cookies from 'js-cookie';
import './app.css';
import {fetchProducts} from "../../store/actions/product-list";
import {fetchFilterFields} from "../../store/actions/filter-fields";
import Footer from "../footer";
import {Container} from "react-bootstrap";

const generateToken = () => Math.random().toString(36).substr(2);

const App = () => {
    if (!Cookies.get('userID')) {
        Cookies.set('userID', generateToken(), {expires: 365})
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchFilterFields());
    }, []);

    return (
        <Fragment>
            <Header/>
            <Container>
                <Switch>
                    <Route path={'/'}
                           component={HomePage}
                           exact/>

                    <Route path={'/cart'}
                           component={CartPage}/>

                    <Route path={'/products/:id'}
                           exact
                           component={ProductPage}/>

                    <Route path={'/products'}
                           component={ProductsPage}/>
                    <Route path={'/map'}
                           component={GoogleMap}/>
                </Switch>
            </Container>
            <Footer/>
        </Fragment>
    );
};

export default App;
