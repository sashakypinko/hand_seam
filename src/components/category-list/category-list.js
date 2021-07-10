import React, {useEffect} from 'react';
import styled from 'styled-components';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import {fetchCategories} from "../../store/actions/category-list";
import {useDispatch, useSelector} from 'react-redux';
import {selectCategoryList} from "../../store/selectors";
import CategoryItem from "../category-item";
import {Row} from "styled-bootstrap-grid";

const CategoryList = ({categories}) => {
    return (
        <Row>
            {
                categories.map((category) => <CategoryItem category={category}/>)
            }
        </Row>
    );
};

const CategoryListContainer = () => {
    const {categories, loading, error} = useSelector(selectCategoryList);
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchCategories()), []);

    if (loading) {
        return <Spinner/>;
    }

    if (error) {
        return <ErrorIndicator/>;
    }

    return <CategoryList categories={categories}/>
}

export default CategoryListContainer;
