import React, {Component} from 'react';
import {Row,Col} from 'reactstrap';
import CategoryListCategory from '../categories/CategoryList.category';
import ProductListCategory from '../products/ProductList.product';

class DashboardRoot extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={"3"}>
                        <CategoryListCategory>

                        </CategoryListCategory>
                    </Col>
                    <Col xs={"9"}>
                        <ProductListCategory>

                        </ProductListCategory>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DashboardRoot;