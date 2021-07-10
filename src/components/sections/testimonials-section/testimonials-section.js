import React from "react";
import Section from "../section";
import Testimonials from "../../testimonials";
import {useTranslation} from "react-i18next";

const TestimonialsSection = () => {
    const {t} = useTranslation();

    return (
        <Section title={t('home-page.testimonials.title')}>
            <Testimonials/>
        </Section>
    );
};

export default TestimonialsSection;
