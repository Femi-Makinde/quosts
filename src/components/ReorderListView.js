import React, { useRef,useState,useEffect } from 'react'
import StyledReorderListView, {StyledReorderListViewComponent} from '../styled/StyledReorderListView';
import clamp from 'lodash-es/clamp';
import swap from 'lodash-move';
import { useDrag } from 'react-use-gesture'
import { useSprings, interpolate, useSpring } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash-es';
import { setCurrentQuost, setCurrentQuostPage } from '../actions/quostActions';


const animateFunction = (order, height, down, originalIndex, curIndex, y) => index =>
  down && index === originalIndex
    ? { y: (curIndex * height) + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex'}
    : { y: order.indexOf(index) * height, scale: 1, zIndex: '0', shadow: 0, immediate: false}

const ReorderListView = ({ component: Component, onOrderChange = ()=>{}, contentHeight }) => {
    const {quostPages} = useSelector(state=>state.quostCreation);
    const items = _.values(quostPages);
    const order = useRef(items.map((_, index) => index)) 
    const HEIGHT = contentHeight + 20;
    const [springs, setSprings] = useSprings(items.length, animateFunction(order.current,HEIGHT));
    const dispatch = useDispatch();

    const bind = useDrag(({ args: [originalIndex], down, movement: [, y] }) => {
        const curIndex = order.current.indexOf(originalIndex)
        const curRow = clamp(Math.round((curIndex * contentHeight + y) / HEIGHT), 0, items.length - 1);
        const newOrder = swap(order.current, curIndex, curRow);
        setSprings(animateFunction(newOrder, HEIGHT, down, originalIndex, curIndex, y))

        if (!down) {
            order.current = newOrder
            // onOrderChange && onOrderChange(newOrder);
        }
    },{
        delay:2000
    })


    return (
        <StyledReorderListView height = {HEIGHT} className = 'Scroll-Y-Show'>
            <div className="PageNumber">
                {
                    items.map((item,index)=>{
                        return (
                            <div key = {index}>
                                <p>{index+1}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className = "Content">
                {springs.map(({ zIndex, shadow, y, scale }, i) => (
                    <StyledReorderListViewComponent
                        onClick = {()=>{
                            dispatch(setCurrentQuostPage(i))
                        }}
                        {...bind(i)}
                        key={i}
                        style={{
                            zIndex,
                            boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
                            transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`)
                        }}
                        className = "ReorderComponent"
                    >
                        <Component index = {i} quostPage ={quostPages[i]}/>
                    </StyledReorderListViewComponent>
                ))}
            </div>
        </StyledReorderListView>
    )
}


export default ReorderListView;
