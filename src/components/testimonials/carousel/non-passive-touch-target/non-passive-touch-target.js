import React, {useEffect} from "react";

const OPTIONS = {passive: false};

const NonPassiveTouchTarget = (props) => {
    const {
        component: Component = 'div',
        onTouchMove = () => {
        },
        ...rest
    } = props;

    let currentNode = '';

    useEffect(() => currentNode.addEventListener('touchmove', onTouchMove, OPTIONS), []);

    useEffect(() => {
        currentNode.removeEventListener('touchmove', onTouchMove, OPTIONS)
        currentNode.addEventListener('touchmove', onTouchMove, OPTIONS)
    }, [onTouchMove]);

    return (
        <Component
            ref={(node) => currentNode = node}
            {...rest}
        />
    );
};

export default NonPassiveTouchTarget;
