import React, {useState} from 'react';
import {Dropdown, OverlayTrigger, Popover} from "react-bootstrap";
import {Flag} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {changeLanguage} from "../../../store/actions/client";
import {useTranslation} from "react-i18next";

const LanguageButton = () => {
    const dispatch = useDispatch();
    const {i18n} = useTranslation();

    const [showTooltip, setShowTooltip] = useState(false);
    const languages = i18n.languages.filter((language) => language !== i18n.language);

    const languageIconNames = {
        ua: 'ua',
        ru: 'ru',
        en: 'gb'
    };

    const handleChangeLanguage = (lng) => {
        dispatch(changeLanguage(lng))
        setShowTooltip(false);
    };

    const handleShowTooltip = () => setShowTooltip(true);

    return (
        <OverlayTrigger
            trigger="click"
            key="bottom"
            placement="bottom"
            show={showTooltip}
            rootClose
            overlay={
                <Popover id={`popover-positioned-bottom`}>
                    {
                        languages.map((language) => {
                            return (
                                <Dropdown.Item key={language} onClick={() => handleChangeLanguage(language)}>
                                    <Flag name={languageIconNames[language]}/>
                                </Dropdown.Item>
                            );
                        })
                    }
                </Popover>
            }>
            <Flag name={languageIconNames[i18n.language]}
                  onClick={handleShowTooltip}/>
        </OverlayTrigger>
    );
};

export default LanguageButton;
