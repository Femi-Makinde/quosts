import React from 'react';
import StyledQuostOrdering from '../styled/StyledQuostOrdering';
import { animated, useSpring } from 'react-spring';

const QuostOrdering = ({open:openNavigation, handleNavigation})=>{
    const overlayProps = useSpring({opacity: openNavigation ? 1:0, pointerEvents: openNavigation ? 'auto':'none',
    config:{
        duration: 100
    }})
    const navigationContentProps = useSpring({transform: `translateX(${openNavigation ? 0: -300}px)`});

    const closeNavigation = ()=>{
        handleNavigation(false)
    }

    return (
        <StyledQuostOrdering>
            <animated.div onClick = {closeNavigation} style = {overlayProps} className="NavigationOverlay">

            </animated.div>
            <animated.div style = {navigationContentProps} className="NavigationContent">

            </animated.div>
        </StyledQuostOrdering>
    );
}

export default QuostOrdering;