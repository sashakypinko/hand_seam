import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {Trans} from "react-i18next";

const SizesFilter = ({sizes, selectedSizes, handleChange}) => {

    return(
        <section className="mb-4">
            <FormControl fullWidth>
                <InputLabel htmlFor="age-native-simple"><Trans i18nKey="filter.sizes" /></InputLabel>
                <Select
                    multiple
                    value={selectedSizes}
                    onChange={e => handleChange(e, 'sizes')}>
                    {
                        sizes.map(({name, id}) => (
                            <MenuItem key={name} value={id}>{name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </section>
    );
};

export default SizesFilter;
