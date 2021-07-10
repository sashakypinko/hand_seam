import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ErrorIndicator from "../error-indicator";
import {fetchProduct} from "../../store/actions/product";
import {selectProduct} from "../../store/selectors";
import {Container} from "styled-bootstrap-grid";
import {addCartItem} from "../../store/actions/cart";
import ProductPhotos from "./product-photos";
import Details from "./details";
import Tabs from "./tabs";
import RelatedProducts from "./related-products";
import ProductDetailsSkeleton from "./details/product-details-skeleton";
import ProductPhotosSkeleton from "./product-photos/product-photos-skeleton";
import AddedItemModal from '../added-item-modal';


const ProductDetails = ({product, loading}) => {
    const {
        id,
        name,
        photos = [],
        price,
        old_price,
        description = '',
        category = {},
        sizes = [],
        color = {}
    } = product;

    const initOrder = {
        product,
        size: sizes.length ? sizes[0] : {},
        count: 1
    };

    const [order, setOrder] = useState(initOrder);

    useEffect(() => setOrder(initOrder), [product]);

    const setOrderSize = (size) => {
        setOrder({
            ...order,
            size
        });
    };

    const updateOrderCount = (count) => {
        if (count < 1) {
            count = 1;
        }

        setOrder({...order, count});
    };

    const dispatch = useDispatch();

    const handleAddCartItem = () => dispatch(addCartItem({order}));

    return (
        <Container>
            <section className="mb-5">
                <div className="row">
                    {
                        loading ?
                            <ProductPhotosSkeleton/> :
                            <ProductPhotos photos={photos}/>
                    }
                    {
                        loading ?
                            <ProductDetailsSkeleton/> :
                            <Details name={name}
                                     category={category.title}
                                     price={price}
                                     oldPrice={old_price}
                                     color={color}
                                     sizes={sizes}
                                     count={order.count}
                                     description={description}
                                     handleChangeSize={setOrderSize}
                                     handleAddCartItem={handleAddCartItem}
                                     updateOrderCount={updateOrderCount}
                            />
                    }
                </div>
            </section>
            <Tabs product={product}/>
            <hr/>
            <RelatedProducts/>
            <AddedItemModal/>
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
