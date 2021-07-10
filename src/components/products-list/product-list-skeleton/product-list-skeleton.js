import React from 'react';
import {Skeleton} from "@material-ui/lab";
import {Col} from "styled-bootstrap-grid";

const ProductItemTileSkeleton = ({itemWidth}) => {
    return (
        <div className={`col-md-${itemWidth} mb-5`}>
            <div>
                <div className="view zoom overlay rounded z-depth-2">
                    <Skeleton variant="rect" height={390} width="100%"/>
                </div>
                <div className="pt-4">
                    <div className="d-flex justify-content-center">
                        <Skeleton width="80%" height={80}/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Skeleton width="70%" height={30}/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Skeleton width="90%" height={60}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductItemRowSkeleton = () => {
    return (
        <>
            <Col md={5} lg={3} xl={3} style={{marginBottom: '50px'}}>
                <div className="view zoom overlay mb-3 mb-md-0">
                    <Skeleton variant="rect" height={170} width="100%"/>
                </div>
            </Col>
            <Col md={7} lg={9} xl={9}>
                <div className="row">
                    <div className="col-lg-7 col-xl-7">
                        <Skeleton variant="rect" width="60%" height={50}/>
                        <Skeleton width="100%" height={90}/>
                    </div>
                    <div className="col-lg-5 col-xl-5">
                        <Skeleton width="80%" height={40}/>
                        <Skeleton width="80%" height={50}/>
                        <Skeleton width="80%" height={50}/>
                        <Skeleton width="20%" height={50}/>
                    </div>
                </div>
            </Col>
        </>
    );
};

export const ProductListTilesSkeleton = ({itemWidth}) => {
    return (
        <>
            <ProductItemTileSkeleton itemWidth={itemWidth}/>
            <ProductItemTileSkeleton itemWidth={itemWidth}/>
            <ProductItemTileSkeleton itemWidth={itemWidth}/>
            <ProductItemTileSkeleton itemWidth={itemWidth}/>
            <ProductItemTileSkeleton itemWidth={itemWidth}/>
            <ProductItemTileSkeleton itemWidth={itemWidth}/>
        </>
    );
};

export const ProductListRowsSkeleton = () => {
    return (
        <>
            <ProductItemRowSkeleton/>
            <ProductItemRowSkeleton/>
            <ProductItemRowSkeleton/>
            <ProductItemRowSkeleton/>
            <ProductItemRowSkeleton/>
            <ProductItemRowSkeleton/>
        </>
    );
};

