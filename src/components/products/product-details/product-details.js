import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "styled-bootstrap-grid";
import ProductPhotos from "./product-photos";
import Details from "./details";
import Tabs from "./tabs";
import RelatedProducts from "./related-products";
import ProductDetailsSkeleton from "./details/product-details-skeleton";
import ProductPhotosSkeleton from "./product-photos/product-photos-skeleton";
import {selectProduct} from "../../../store/selectors";
import {fetchProduct} from "../../../store/actions/product";
import ErrorIndicator from "../../error-indicator";
import AddedItemModal from "../../cart/added-item-modal";
import {Col} from "react-bootstrap";


const ProductDetails = ({product, loading}) => {
    const {
        photos = [],
    } = product;

    return (
        <Container>
            <section className="mb-5">
                <div className="row">
                    {
                        loading ?
                            <ProductPhotosSkeleton/> :
                            <ProductPhotos photos={photos}/>
                    }
                    <Col md={6}>
                        {
                            loading ?
                                <ProductDetailsSkeleton/> :
                                <Details product={product}/>
                        }
                    </Col>
                </div>
            </section>
            <Tabs product={product}/>
            <hr/>
            <RelatedProducts/>
        </Container>
    );
};

const ProductDetailsContainer = ({id}) => {
        const {product, loading, error} = useSelector(selectProduct);

        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchProduct(id));
        }, []);

        if (error) {
            return <ErrorIndicator/>;
        }

        return <ProductDetails product={product} loading={loading}/>;
    }
;

export default ProductDetailsContainer;
