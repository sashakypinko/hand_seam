const compose = (...func) => {
    return (comp) => func.reduceRight(
        (wrapped, f) => f(wrapped)
        , comp
    );
};

export default compose;