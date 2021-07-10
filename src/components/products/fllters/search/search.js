import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";

const Search = ({handleChange, handleSearch}) => {
    const {t} = useTranslation();
    return (
        <section className="mb-4">
            <div
                className="md-form md-outline mt-0 d-flex justify-content-between align-items-center">
                <input type="text"
                       className="form-control mb-0"
                       placeholder={t('filter.find')}
                       onKeyPress={(e) => e.code === 'Enter' && handleSearch()}
                       onChange={handleChange}/>
                <button className="btn btn-flat btn-md px-3 waves-effect"
                        onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} style={{fontSize: 20}}/>
                </button>
            </div>
        </section>
    );
};

export default Search;
