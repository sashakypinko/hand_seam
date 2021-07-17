import React from 'react';
import Section from "../section";
import ProductsListContainer from "../../products/product-list-container";

const PopularProductsSection = () => {
    return (
        <Section title="Популярные Товары">
            <ProductsListContainer/>
        </Section>
    );
};

export default PopularProductsSection;
