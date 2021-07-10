import React, {useEffect, useState} from 'react';

const SizePicker = ({sizes: availableSizes, onSelect}) => {
    const [sizes, setSizes] = useState(availableSizes);

    const handleChooseItem = (id) => {
        setSizes(sizes.map((item) => {
                item.active = false;

                if (item.id === id) {
                    item.active = true;
                    onSelect(item);
                }

                return item;
            })
        );
    };

    useEffect(() => setSizes(availableSizes), [availableSizes]);

    const activeSize = sizes.find(({active}) => active);

    if (!activeSize && sizes.length) {
        sizes[0].active = true;
        setSizes(sizes);
    }

    return (
        <div className="mt-1">
            {
                sizes.map((size) => {
                    return (
                        <div className="form-check form-check-inline pl-0"
                             onClick={() => handleChooseItem(size.id)}>
                            <input type="radio"
                                   className="form-check-input"
                                   checked={size.active}/>
                            <label
                                className="form-check-label small text-uppercase card-link-secondary pl-4 pr-2"
                                htmlFor="small">{size.name}</label>
                        </div>
                    );
                })
            }
        </div>
    )
};

export default SizePicker;
