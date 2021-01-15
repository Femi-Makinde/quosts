import React, { useRef, useState, useEffect } from 'react';
import StyledHorizontalScrollView from '../styled/StyledHorizontalScrollView';
import { useMatch, useWindowSize } from '../utils/customHooks';
import { animated, useSpring } from 'react-spring';
import { BorderButton, DirectionButton } from '../styled/StyledButtons';
import Icon from './Icon';
import { ChevronLeft, ChevronRight } from '../svg';
import { useCallback } from 'react';

const HorizontalScrollView  = ({items,handleSeeAll = ()=>{},component: Component, hasViewAll = false})=>{
    const matches = useMatch('(max-width:600px)'),
    [showScrollLeftButton,setShowScrollLeftButton] = useState(false),
    [showScrollRightButton,setShowScrollRightButton] = useState(true),
    scrollContainerRef = useRef(null),
    [scrollProps,setScrollProps] = useSpring(()=>({ scroll: 0, config: {
        // friction: 24,
        tension: 162
    }})),
    scrollDistance = useRef(0);
    
    const componentRef = useRef();
    const remain = useRef(0);

    
    const getRef = useCallback(()=>{
        const component = componentRef.current;
        const scrollContainer = scrollContainerRef.current
        
        let elementWidth = component.getBoundingClientRect().width;
        let containerWidth = scrollContainer.getBoundingClientRect().width;
        let rem = containerWidth - (elementWidth * Math.floor(containerWidth / elementWidth));
        
        remain.current = rem
    },[])
    
    

    useEffect(()=>{
        getRef()
        window.addEventListener('resize', getRef);
        return ()=>window.removeEventListener('resize',getRef)
    },[])

    console.log(remain.current)

    const scrollWatcher = (event)=>{
        let element = event.target;
        let scrollLeft = element.scrollLeft;
        let scrollWidth = element.scrollWidth;
        let elementWidth = element.getBoundingClientRect().width;

        let shouldShowLeft = scrollLeft > 0;
        let shouldShowRight = (scrollLeft + elementWidth) < scrollWidth - 45;

        shouldShowLeft !== showScrollLeftButton && setShowScrollLeftButton(shouldShowLeft);
        shouldShowRight !== showScrollRightButton && setShowScrollRightButton(shouldShowRight);
    }

    const scrollLeft = ()=>{
        const elem = scrollContainerRef.current;
        const elementWidth = elem.getBoundingClientRect().width;
        const distance = scrollDistance.current - elementWidth + remain.current
        setScrollProps({scroll: distance});
        scrollDistance.current = distance
    }

    const scrollRight = ()=>{
        const elem = scrollContainerRef.current;
        const elementWidth = elem.getBoundingClientRect().width;
        const distance = scrollDistance.current + elementWidth - remain.current;
        setScrollProps({scroll: distance});
        scrollDistance.current = distance
    }

    return (
        <StyledHorizontalScrollView matches = {matches}>
                <div className="ScrollContainerHolder">
                    <animated.div scrollLeft = {scrollProps.scroll} ref = {scrollContainerRef} onScroll = {scrollWatcher} className="ScrollContainer Scroll-X">
                        {
                            items.map((item,index)=>{
                                  return  <Component ref = {index === 0 ? componentRef: null} key = {index} data = {item}/>
                            })
                        }
                        {
                            hasViewAll &&
                                <div className="ViewAllButton">
                                <div className="Button">
                                    <BorderButton onClick = {handleSeeAll}>
                                        <Icon icon = "arrow_forward"/>
                                    </BorderButton>
                                    <p>Explore All</p>
                                </div>
                                </div>
                        }
                    </animated.div>
                </div>
                {
                    !matches && showScrollLeftButton && remain.current > 0 &&
                    <div className="DirectionButton Left">
                        <DirectionButton onClick = {scrollLeft}>
                            <ChevronLeft/>
                        </DirectionButton>
                    </div>
                }
                {
                    !matches && showScrollRightButton && 
                    <div className="DirectionButton Right">
                        <DirectionButton onClick = {scrollRight}>
                            <ChevronRight/>
                        </DirectionButton>
                    </div>
                }
        </StyledHorizontalScrollView>
    );
}


export default HorizontalScrollView;