import React from 'react';
import Section from "../../sections/section";
import ProductsList from "../../products-list";
import {useSelector} from "react-redux";
import {selectProductList} from "../../../store/selectors";
import ErrorIndicator from "../../error-indicator";
import {useTranslation} from "react-i18next";

const RelatedProducts = () => {
    const {products, loading, error} = useSelector(selectProductList);
    const {t} = useTranslation();

    if (error) {
        return <ErrorIndicator/>;
    }

    return (
        <Section title={t('product.relative-products.title')}>
            <div className="row m-2">
                <ProductsList
                    products={products.slice(0, 4)}
                    loading={loading}
                    viewType="tileSimple"/>
            </div>
        </Section>
    );
};

export default RelatedProducts;
