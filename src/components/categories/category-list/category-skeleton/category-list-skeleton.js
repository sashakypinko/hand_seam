import React from 'react';
import {Skeleton} from "@material-ui/lab";
import {Col, Container, Row} from "styled-bootstrap-grid";

const CategorySkeleton = () => {
    return (
        <Col md={6} lg={4} className="mb-4">
            <div className="view zoom brighten z-depth-2 rounded">
                <Skeleton variant="rect" width="100%" height={400}/>
            </div>
        </Col>
    );
}

const CategoryListSkeleton = () => {

    return (
        <Container>
            <Row>
                <CategorySkeleton/>
                <CategorySkeleton/>
                <CategorySkeleton/>
            </Row>
        </Container>
    );
};

export default CategoryListSkeleton;