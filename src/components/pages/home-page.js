import React from "react";
import CatalogSection from "../sections/catalog-section";
import AdvantagesSection from "../sections/advantages-section";
import PopularProductsSection from "../sections/popular-products-section";
import Divider from "../divider";
import TestimonialsSection from "../sections/testimonials-section";
import GreetingsSection from "../sections/greetings-section";
import DeliveryInformationSection from "../sections/delivery-information-section";
import {useSelector} from "react-redux";

const HomePage = () => {
    return (
        <div>
            <GreetingsSection/>
            <Divider/>
            <CatalogSection/>
            <Divider/>
            <PopularProductsSection/>
            <Divider/>
            <TestimonialsSection/>
            <Divider/>
            <DeliveryInformationSection/>
            <Divider/>
        </div>
    );
};

export default HomePage;
