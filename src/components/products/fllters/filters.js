import React, {useEffect, useState} from 'react';
import {Button} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectFilterFields} from "../../../store/selectors";
import ErrorIndicator from "../../error-indicator";
import Search from "./search";
import CategoriesFilter from "./categories-filter";
import SizesFilter from "./sizes-filter";
import PriceFilter from "./price-filter";
import ColorsFilter from "./colors-filter";
import {Trans} from "react-i18next";

const Filters = ({filterFields, loadProducts}) => {
    const {
        categories = [],
        sizes = [],
        colors = [],
        priceRange = {},
    } = filterFields;


    const defaultFilter = {
        search: '',
        categories: [],
        sizes: [],
        colors: [],
        genders: [],
        price: {
            min: priceRange.min || '',
            max: priceRange.max || ''
        }
    };

    const [filter, setFilter] = useState(defaultFilter);
    const [search, setSearch] = useState('');

    useEffect(() => setFilter(defaultFilter), [filterFields]);
    useEffect(() => loadProducts({filter}), [filter]);

    const handleChangeFilter = (e, name) => {
        const newFilter = Object.assign({}, filter);
        newFilter[name] = e.target.value;
        setFilter(newFilter);
    };

    const handleChangePrice = (event, [min, max]) => {
        const newFilter = Object.assign({}, filter);
        newFilter.price = {min, max}
        setFilter(newFilter);
    };

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const setFilterSearch = () => {
        const newFilter = Object.assign({}, filter);
        newFilter.search = search;
        setFilter(newFilter);
    }

    const clearFilter = () => setFilter(defaultFilter);

    return (
        <section>
            <h5 className="pt-2 mb-4"><Trans i18nKey="filter.title"/></h5>
            <Search handleChange={handleChangeSearch} handleSearch={setFilterSearch}/>

            <CategoriesFilter
                categories={categories}
                selectedCategories={filter.categories}
                handleChange={handleChangeFilter}/>

            <SizesFilter
                sizes={sizes}
                selectedSizes={filter.sizes}
                handleChange={handleChangeFilter}/>

            <PriceFilter
                price={filter.price}
                priceRange={priceRange}
                handleChange={handleChangePrice}/>

            <ColorsFilter colors={colors}/>

            <section className="mb-4">
                <Button onClick={clearFilter}>
                    <Trans i18nKey="filter.clear"/>
                </Button>
            </section>
        </section>
    );
};

const FiltersContainer = ({loadProducts}) => {
    const {fields, error} = useSelector(selectFilterFields);

    if (error) {
        return <ErrorIndicator/>;
    }

    return <Filters filterFields={fields} loadProducts={loadProducts}/>
};

export default FiltersContainer;
