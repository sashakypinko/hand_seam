import React from 'react';

const Section = ({children, title}) => {
    return (
        <div className="container mt-5">
            <h4 className="text-center my-5">
                <strong>{title}</strong>
            </h4>
            <div className="row">
                {children}
            </div>
        </div>
    );
};

export default Section;
