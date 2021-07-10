import React from 'react';
import styled from 'styled-components';
import {BASE_BLUE} from "../../../constants/colors";
import {AssignmentReturnRounded, CreditCardRounded, LocalShippingRounded} from '@material-ui/icons';
import {Trans} from "react-i18next";
import {Row} from "styled-bootstrap-grid";


const iconStyles = `
    font-size: 80px;
    color: ${BASE_BLUE};
`;

const TruckIcon = styled(LocalShippingRounded)`${iconStyles}`;
const FileInvoiceIcon = styled(CreditCardRounded)`${iconStyles}`;
const BoxIcon = styled(AssignmentReturnRounded)`${iconStyles}`;

const StyledSection = styled.section`
    text-align: center;
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 40px;
`;

const Label = styled.h5`
    margin: 15px;
    font-size: 25px;
`;

const DeliveryInformationSection = () => {
    return (
        <StyledSection>
            <Title>
                <Trans i18nKey="home-page.delivery-info.title"/>
            </Title>
            <p className="text-center w-sm-75 mx-auto mb-5">
                <Trans i18nKey="home-page.delivery-info.description"/>
            </p>
            <Row>
                <div className="col-md-4 mb-5">
                    <TruckIcon/>
                    <Label>
                        <Trans i18nKey="home-page.delivery-info.delivery-title"/>
                    </Label>
                    <p className="mb-0">
                        <Trans i18nKey="home-page.delivery-info.delivery-body"/>
                    </p>
                </div>
                <div className="col-md-4 mb-5">
                    <FileInvoiceIcon/>
                    <Label>
                        <Trans i18nKey="home-page.delivery-info.payment-title"/>
                    </Label>
                    <p className="mb-0">
                        <Trans i18nKey="home-page.delivery-info.payment-body"/>
                    </p>
                </div>
                <div className="col-md-4 mb-5">
                    <BoxIcon/>
                    <Label>
                        <Trans i18nKey="home-page.delivery-info.returns-title"/>
                    </Label>
                    <p className="mb-0">
                        <Trans i18nKey="home-page.delivery-info.returns-body"/>
                    </p>
                </div>
            </Row>
        </StyledSection>
    );
};

export default DeliveryInformationSection;
