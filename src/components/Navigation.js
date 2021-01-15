import React, { useEffect,useState,useRef } from 'react';
import {animated,useSpring} from 'react-spring';
import StyledNavigation, {StyledNavigationPage,StyledNavigationItem} from '../styled/StyledNavigation';
import { useHistory } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from '../svg';


const Navigation = ({components,openNavigation = false,setNavigationInternal})=>{
    const [showIndex,setShowIndex]  = useState(-1);
    const overlayProps = useSpring({opacity: openNavigation ? 1:0, pointerEvents: openNavigation ? 'auto':'none',
    config:{
        duration: 100
    }})
    const [navigationContentProps,setNavigationContainerProps] = useSpring(()=>({transform: 'translateX(285px)'}))


    const handleCallbackFromChild = (index)=>setShowIndex(index);

    const closeSelf = ()=>{
        setNavigationInternal && setNavigationInternal(false);
        setShowIndex(-1);
    }

    useEffect(()=>{
        setNavigationContainerProps({transform: openNavigation ? 'translate(0px)' : 'translateX(285px)'})
    },[openNavigation,setNavigationContainerProps])
    

    useEffect(()=>{
        setShowIndex(0)
    },[openNavigation])

    const keys = Object.keys(components);

    return (
        <StyledNavigation>
            <animated.div onClick = {closeSelf} style = {overlayProps} className="NavigationOverlay">

            </animated.div>
            <animated.div clickallowed = "true" style = {navigationContentProps} className="NavigationContent">
                <div clickallowed = "true" className="NavigationContainer">
                    {
                        keys.map((key,index)=>{
                        const Component = components[key];
                        return  <Component closeSelfNavigation = {index === 0 ? closeSelf : null} key = {index} currentIndex = {showIndex} index = {index} setShowIndex = {handleCallbackFromChild}/>
                        })
                    }
                </div>
            </animated.div>
        </StyledNavigation>
    );
}


const NavigationPage = ({parent,children,setShowIndex,currentIndex,index,closeSelfNavigation}) => {
    const [direction,setDirection] = useSpring(()=>({transform: 'translateX(280px)',opacity:0, config:{
        tension: 160
    }}))

    useEffect(()=>{
        const isLeft = index < currentIndex;
        const isRight = index > currentIndex;
        const isCurrent = index === currentIndex;
        setDirection({transform: `translateX(${isLeft ? '-280px': isRight ? '280px': '0px'})`,opacity: isCurrent ? 1:0})
    },[currentIndex,index,setDirection])


    const setShow  = (index)=>{
        setShowIndex(index)
    }


    const closeSelf = ()=>{
        if(closeSelfNavigation){
            closeSelfNavigation();
            return;
        }
        setShowIndex(parent.index)
    }

  return (
    <StyledNavigationPage className = "NavigationPage" style = {direction}>
      <div onClick = {closeSelf} className="NavigationPageHeader">
            <div className="Back">
                <ChevronLeft/>
                {
                parent &&
                <span>{parent.identity}</span>
                }
            </div>
      </div>
      <div clickallowed = "true" className = "NavigationPageContent">
        {
          children(setShow)
        }
      </div>
    </StyledNavigationPage>
  );
}


const NavigationItem = ({itemText, itemLink, index, setShow, hasChild = false})=>{
    const [selected,setSelected] = useState(false);
    const itemRef = useRef(null);
    const history = useHistory();
    
    window.addEventListener('click',(e)=>{
        const elem = e.target;
        if((elem.getAttribute('clickallowed') === 'true'||elem.classList.contains('NavigationItem')||elem.classList.contains('NavigationPageContent')) && e.target !== itemRef.current){
            setSelected(false)
        }
    })

    const handleClick = (e)=>{
        if(itemLink){
            history.push(itemLink)
            return;
        }
        setSelected(true)
        hasChild && setShow(index);
    };

  return (
    <StyledNavigationItem ref = {itemRef} onClick = {handleClick} className={`NavigationItem ${selected ? 'selected':'notselected'}`}>
        <div className="Main">
              <span>{itemText}</span>
              {
                hasChild &&
                <ChevronRight/>
              }
        </div>
    </StyledNavigationItem>
  );
}


export { Navigation as default, NavigationItem, NavigationPage}
