import React from "react";
import CatalogSection from "../sections/catalog-section";
import PopularProductsSection from "../sections/popular-products-section";
import Divider from "../divider";
import TestimonialsSection from "../sections/testimonials-section";
import GreetingsSection from "../sections/greetings-section";
import DeliveryInformationSection from "../sections/delivery-information-section";
import AddToCartModal from "../products/add-to-cart-modal";
import AddedItemModal from "../cart/added-item-modal";
import DiscountModal from "../modals/discount-modal";

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
            <AddToCartModal/>
            <AddedItemModal/>
        </div>
    );
};

export default HomePage;
