import React from 'react';
import ProductsList from "../../products-list";
import {useTranslation} from "react-i18next";
import Section from "../../../sections/section";

const RelatedProducts = ({products, loading, handleItemClick}) => {
    const {t} = useTranslation();

    return (
        <Section title={t('product.relative-products.title')}>
            <ProductsList
                handleItemClick={handleItemClick}
                products={products}
                loading={loading}
                viewType="tileSimple"/>
        </Section>
    );
};

export default RelatedProducts;
