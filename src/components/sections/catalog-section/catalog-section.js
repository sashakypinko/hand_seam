import React from 'react';
import Section from "../section";
import CategoryList from "../../categories/category-list";


const CatalogSection = () => {
    return (
        <Section title={'Категории'}>
            <CategoryList />
        </Section>
    );
};

export default CatalogSection;
