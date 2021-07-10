import React from 'react';
import CategoryList from '../../category-list';
import Section from "../section";


const CatalogSection = () => {
    return (
        <Section title={'Категории'}>
            <CategoryList />
        </Section>
    );
};

export default CatalogSection;
