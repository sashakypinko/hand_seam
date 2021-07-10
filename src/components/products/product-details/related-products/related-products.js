import React from 'react';
import ProductsList from "../../products-list";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Section from "../../../sections/section";
import ErrorIndicator from "../../../error-indicator";
import {selectProductList} from "../../../../store/selectors";

const RelatedProducts = () => {
    const {products, loading, error} = useSelector(selectProductList);
    const {t} = useTranslation();

    if (error) {
        return <ErrorIndicator/>;
    }

    return (
        <Section title={t('product.relative-products.title')}>
            <ProductsList
                products={products.slice(0, 4)}
                loading={loading}
                viewType="tileSimple"/>
        </Section>
    );
};

export default RelatedProducts;
