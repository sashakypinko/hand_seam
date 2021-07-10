import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {Trans} from "react-i18next";

const CategoriesFilter = ({categories, selectedCategories, handleChange}) => {

    return (
        <section className="mb-4">
            <FormControl fullWidth>
                <InputLabel htmlFor="age-native-simple">
                    <Trans i18nKey="filter.categories"/>
                </InputLabel>
                <Select
                    multiple
                    value={selectedCategories}
                    onChange={e => handleChange(e, 'categories')}>
                    {
                        categories.map(({title, id}) => (
                            <MenuItem key={title} value={id}>{title}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </section>
    );
};

export default CategoriesFilter;
