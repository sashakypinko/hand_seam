import React from 'react';
import styled from 'styled-components';
import Collapse from '@material-ui/core/Collapse';
import {IconButton} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Trans, useTranslation} from "react-i18next";

const ExpandButton = styled(IconButton)`
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transform: ${({expanded}) => `rotate(${expanded ? 180 : 0}deg)`}
`;

const Discount = () => {
    const [expanded, setExpanded] = React.useState(false);
    const {t} = useTranslation();
    const handleExpandClick = () => setExpanded(!expanded);

    return (
        <div className="card mb-4">
            <div className="card-body">
                <a className="dark-grey-text d-flex justify-content-between">
                    <Trans i18nKey="cart.promo.enter-promo"/>
                    <ExpandButton
                        expanded={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}>
                        <ExpandMoreIcon/>
                    </ExpandButton>
                </a>

                <Collapse in={expanded} timeout={500} unmountOnExit>
                    <div className="mt-3">
                        <div className="md-form md-outline mb-0">
                            <input className="form-control font-weight-light"
                                   placeholder={t('cart.promo.type-promo')}/>
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default Discount;
