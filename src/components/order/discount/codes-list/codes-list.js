import React from 'react';
import CodesItem from "../codes-item";

const CodesList = ({codes, loading}) => {

    return (
        <div>
            <p className="mt-4 font-small">Ваши промокоды:</p>
            <hr/>
            {
                loading ? '' :
                    (codes || []).map((code) => {
                        return <CodesItem
                            key={code.id}
                            code={code}/>
                    })
            }
        </div>
    );
};

export default CodesList;