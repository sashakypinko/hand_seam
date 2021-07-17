import React, {useState} from 'react';
import Filters from "./fllters";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../store/actions/product-list";
import {selectProductPagesCount} from "../../store/selectors";
import ControlPanel from "./control-panel";
import Breadcrumbs from "../breadcrumbs";
import {Container} from "react-bootstrap";
import ProductsListContainer from "./product-list-container";

const VIEW_TYPE_ROW = 'row';
const VIEW_TYPE_TILE = 'tile';

const Products = ({loadProducts, pagesCount}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [viewType, setViewType] = useState(VIEW_TYPE_TILE);

    const handleChangePage = (page) => {
        if (page < 1 || page > pagesCount) {
            return;
        }

        setCurrentPage(page);
    };

    const handleChangeView = (type) => setViewType(type);

    return (
        <Container>
            <div className="row mt-5">
                <div className="col-md-4 mb-4 pr-5">
                    <Filters loadProducts={loadProducts}/>
                </div>
                <div className="col-md-8 mb-4">
                    <Breadcrumbs/>
                    <ControlPanel
                        pagesCount={pagesCount}
                        currentPage={currentPage}
                        viewType={viewType}
                        handleChangeView={handleChangeView}
                        handleChangePage={handleChangePage}/>

                    <ProductsListContainer itemWidth={6} viewType={viewType}/>

                    <ControlPanel
                        pagesCount={pagesCount}
                        currentPage={currentPage}
                        viewType={viewType}
                        handleChangeView={handleChangeView}
                        handleChangePage={handleChangePage}/>
                </div>
            </div>
        </Container>
    );
};

const ProductsContainer = () => {
    const dispatch = useDispatch();
    const loadProducts = (data) => dispatch(fetchProducts(data));
    const pagesCount = useSelector(selectProductPagesCount);

    return <Products loadProducts={loadProducts} pagesCount={pagesCount}/>
}

export default ProductsContainer;
