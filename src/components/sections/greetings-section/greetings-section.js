import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {selectPopularProducts, selectProductList} from "../../../store/selectors";
import {Trans} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTshirt} from "@fortawesome/free-solid-svg-icons";

import './greetings-section.css';
import FindProductsButton from "./find-products-button";
import {Col} from "styled-bootstrap-grid";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import ProductsCarousel from "../../products/products-carousel";

const BlueTshirtIcon = () => <FontAwesomeIcon icon={faTshirt}
                                              style={{fontSize: '27px', color: '#1266f1', marginLeft: '-11px'}}/>;

const RedTshirtIcon = () => <FontAwesomeIcon icon={faTshirt}
                                             style={{fontSize: '20px', color: '#ff3d71'}}/>;

const GreetingTitle = styled.p`
    font-size: 38px !important;
    font-family: 'Pangolin', cursive;
    color: #5a5a5a;
`;

const GreetingText = styled.p`
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 22px;
    color: #585858;
    margin-bottom: 40px;
    margin-top: 30px;
`;

const StyledSendRoundedIcon = styled(SendRoundedIcon)`
    margin-left: 20px;
`;

const GreetingsSection = () => {
    const {products} = useSelector(selectPopularProducts);

    return (
        <div className="d-flex flex-wrap justify-content-between mt-4">
            <Col sm={12} lg={6}>
                <GreetingTitle>
                    <Trans i18nKey="home-page.greeting-section.title"/>
                </GreetingTitle>
                <GreetingText>
                    <Trans i18nKey="home-page.greeting-section.text"/>
                </GreetingText>
                <FindProductsButton/>
                <div className="mt-5">
                    <div className="row free-delivery-text">
                        <div className="t-shirt-icon">
                            <RedTshirtIcon/>
                            <BlueTshirtIcon/>
                        </div>
                        <div className="free-delivery greetings-text-content">
                            При заказе от двух вещей - доставка бессплатно
                            <StyledSendRoundedIcon/>
                        </div>
                    </div>
                </div>
            </Col>
            <div className="col-sm-12 col-lg-6">
                <ProductsCarousel images={products.map(({primary_photo}) => primary_photo)}/>
            </div>
        </div>
    );
};

export default GreetingsSection;
