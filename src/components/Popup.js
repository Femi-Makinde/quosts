import React, { useRef,useEffect, useCallback, useContext } from 'react';
import StyledSlidePopup, { StyledPopContent } from '../styled/StyledSlidePopup';
import { useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { useDispatch } from 'react-redux';
import { setPopup } from '../actions/popupActions';


function Popup({children,label}){
    const contentRef = useRef();
    const TRANS = 240;
    const dispatch = useDispatch();
    const close = useCallback(()=>{
        dispatch(setPopup({
            value: false,
            popup: label
        }))
    })
    const [{opacity},setOpacity] = useSpring(()=>({opacity: 0.4, config: {
        duration: 200
    }, from: {opacity:0}}));

    const [{transform},setTransform]  = useSpring(()=>({transform: 'translateY(0px)', from: { transform: `translateY(${TRANS}px)` }}));

    const rect = useRef(null);

    useEffect(()=>{
       rect.current = contentRef.current.getBoundingClientRect()
    },[])

    const closePop = useCallback((from)=>{
        setOpacity({opacity: 0, config: {
            duration: 200
        }})
        setTransform({transform: `translateY(${TRANS}px)`, from: {transform: `translateY(${from || 0}px)`}, config: {
            duration: 150
        }, reset: true, onRest:()=>{close()}})
    },[rect.current])

    const bind = useDrag(({down, direction: [,dY], movement: [,y],distance}) => {
        const { height } = rect.current;
      
        setTransform({transform: `translateY${y}px`,})
        setOpacity({opacity: 0.4 * (height - y)/height,immediate:true})

        if(!down){
            if(distance > 60 && Math.sign(dY) === 1){
                closePop(y)
            }else{
                setTransform({transform: 'translateY(0px)'}) 
            }
        }
    },{
        bounds: { top: 0 },
    })

    const bindFull = useDrag(({swipe: [,swipeY]}) => {
        if(swipeY === 1){
            closePop(0)
        }
    })

    return (
        <StyledSlidePopup onClick = {()=>closePop(0)} style = {{
            backgroundColor: opacity.interpolate(o => `rgba(0, 0, 0, ${o})`)
        }} className = "Pop">
            <StyledPopContent onClick = {(e)=>e.stopPropagation()} {...bindFull()} style = {{
                transform,
            }} ref = {contentRef}>
                <div  { ...bind()} className="Drag Flex">
                    <div>
                        <div className="DragButton">
                        
                        </div>
                    </div>
                </div>
                <div className="Content">
                    {children}
                </div>
            </StyledPopContent>
        </StyledSlidePopup>
    );
}

export default Popup;