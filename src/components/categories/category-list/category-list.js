import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CategoryItem from "../category-item";
import {Row} from "styled-bootstrap-grid";
import {selectCategoryList} from "../../../store/selectors";
import {fetchCategories} from "../../../store/actions/category-list";
import ErrorIndicator from "../../error-indicator";
import CategoryListSkeleton from "./category-skeleton";

const CategoryList = ({categories, loading}) => {

    if (loading) {
        return <CategoryListSkeleton/>
    }

    return (
        <Row>
            {
                categories.map((category) => <CategoryItem key={category.id} category={category}/>)
            }
        </Row>
    );
};

const CategoryListContainer = () => {
    const {categories, loading, error} = useSelector(selectCategoryList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    if (error) {
        return <ErrorIndicator/>;
    }

    return <CategoryList categories={categories} loading={loading}/>;
};

export default CategoryListContainer;
