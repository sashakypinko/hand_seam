import React, {Fragment, useEffect} from 'react';
import {Route, Switch} from 'react-router';
import {CartPage, HomePage, ProductPage, ProductsPage} from '../pages';
import {useDispatch, useSelector} from "react-redux";
import Header from "../header";
import GoogleMap from "../google-map";
import Cookies from 'js-cookie';
import './app.css';
import {fetchFilterFields} from "../../store/actions/filter-fields";
import Footer from "../footer";
import {Container} from "react-bootstrap";
import VisitDiscountModal from '../modals/discount-modal/visit-discount-modal';
import {fetchClient} from "../../store/actions/client";
import {selectClient} from "../../store/selectors";
import {useTranslation} from "react-i18next";
import MainLoader from "../main-loader/main-loader";

const generateToken = () => Math.random().toString(36).substr(2);

const App = () => {
    if (!Cookies.get('userID')) {
        Cookies.set('userID', generateToken(), {expires: 365})
    }
    const {i18n} = useTranslation();
    const {client, loading} = useSelector(selectClient);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchClient());
    }, []);

    useEffect(() => {
        if (client.hasOwnProperty('language')) {
            i18n.changeLanguage(client.language);
        }
    }, [client]);

    return (
        <Fragment>
            <Header/>
            <Container>
                <MainLoader loading={loading}/>
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
                <VisitDiscountModal/>
            </Container>
            <Footer/>
        </Fragment>
    );
};

export default App;
