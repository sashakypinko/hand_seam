import React, {useState} from 'react';
import Description from "./description";
import Information from "./information";
import {Trans} from "react-i18next";

const TAB_INFORMATION = 'information';
const TAB_DESCRIPTION = 'description';

const Tabs = ({product}) => {

    const [activeTab, setActiveTab] = useState(TAB_DESCRIPTION);
    const tabs = {};

    tabs[TAB_INFORMATION] = Information;
    tabs[TAB_DESCRIPTION] = Description;

    const Tab = tabs[activeTab];

    const handleChangeTab = (tab) => setActiveTab(tab);

    return (
        <div className="classic-tabs">
            <ul className="nav tabs-primary nav-justified">
                <li className="nav-item">
                    <a className={`nav-link ${(activeTab === TAB_DESCRIPTION) && 'active'}`}
                       onClick={() => handleChangeTab(TAB_DESCRIPTION)}>
                        <Trans i18nKey="product.tabs.description.label" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${(activeTab === TAB_INFORMATION) && 'active'}`}
                       onClick={() => handleChangeTab(TAB_INFORMATION)}>
                        <Trans i18nKey="product.tabs.information.label" />
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <Tab product={product}/>
            </div>
        </div>
    );
};

export default Tabs;
