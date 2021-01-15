import React, { useRef } from 'react'
import StyledOrderQuostPages, {StyledOrderQuostPagesComponent} from '../styled/StyledOrderQuostPages';
import { useDrag } from 'react-use-gesture'
import { useSprings, interpolate } from 'react-spring'

// Returns fitting styles for dragged/idle items
const animateFunction = (down, y,x,movedIndex) => index =>
!down && index !== movedIndex ? {y: 0, x:0, scale:1, zIndex:0,shadow:0,immediate: true}:
 { y, x, scale: 1.1, zIndex: 1, shadow: 1, immediate: false}

const OrderQuostPages = ({ items }) => {
    const [springs, setSprings] = useSprings(items.length, animateFunction());
   
    
    const bind = useDrag(({ args: [movedIndex], down,movement: [x,y] }) => {
        console.log(movedIndex)
        setSprings(animateFunction(down,y,x,movedIndex))
    })


    return (
        <StyledOrderQuostPages>
            {springs.map(({ zIndex, shadow, y, x, scale }, i) => (
            <StyledOrderQuostPagesComponent
                {...bind(i)}
                key={i}
                style={{
                    zIndex,
                    boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
                    transform: interpolate([y, scale, x], (y, s, x) => `translate3d(${x}px, ${y}px,0) scale(${s})`)
                }}
                >
                    {/* <Component item ={items[i]}/> */}
                </StyledOrderQuostPagesComponent>
            ))}
        </StyledOrderQuostPages>
    )
}




export default OrderQuostPages;
