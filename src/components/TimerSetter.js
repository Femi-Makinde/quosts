import React, {useState, useContext, useEffect,useCallback, useRef} from 'react';
import StyledTimerSetter, { StyledTimerSetterElement } from '../styled/StyledTimerSetter';
import { useTrail } from 'react-spring';
import { QuostPageContext } from './QuostPage';
import { useSelector, useDispatch } from 'react-redux';
import { setQuostDuration } from '../actions/quostActions';
import { useOnClickOutside } from '../utils/customHooks';

const times = [10,20,30,45,60,100,120];
const n = ()=>{}
const WIDTH = 40;
const config = { mass: 5, tension: 2000, friction: 200 }

const TimerSetter = ()=>{
    const { pageIndex } = useContext(QuostPageContext);
    const { duration:currentValue } = useSelector(state=>state.quostCreation.quostPages[pageIndex])
    let timer = [...new Set(times)];
    const [validSelectors,setValidSelectors] = useState(timer.filter(time=>time!==currentValue));
    const dispatch = useDispatch();
    const [toggle, set] = useState(false);
    const ref = useRef(null);
    const toggleOff = useCallback(()=>{
        toggle && set(false)
    },[toggle]);
    
    useOnClickOutside(ref,toggleOff)
    const trail = useTrail(validSelectors.length, {
        config,
        x: toggle ? WIDTH + 5 : 0,
        from: {x: 0},
    })

    useEffect(()=>{
        let selectors = timer.filter(time=>time!==currentValue);
        setValidSelectors([...selectors])
    },[currentValue])

    const toggler = ()=>set(!toggle)

    const handleTimerChange = (timerIndex)=>{
        dispatch(setQuostDuration({
            pageIndex,
            duration: validSelectors[timerIndex]
        }))
        toggler();
    }

    return (
        <StyledTimerSetter ref = {ref}>
            {
                trail.map(({ x, ...rest }, index) => (
                    <StyledTimerSetterElement
                        onClick = {()=>handleTimerChange(index)}
                        className = "Flex"
                        key={index}
                        style={{ ...rest, zIndex: validSelectors.length - index, transform: x.interpolate(x => `translate3d(${x * (index + 1)}px,0,0)`) }}
                    >
                        <p className = "Flex">
                            <span>{validSelectors[index]}</span>
                            <span>secs</span>
                        </p>
                    </StyledTimerSetterElement>
                ))
            }
            <StyledTimerSetterElement
                style = {{
                    zIndex: validSelectors.length
                }} 
                onClick = {()=>toggler()} className="CurrentElement">
                <p className = "Flex">
                    <span>{currentValue}</span>
                    <span>secs</span>
                </p>
            </StyledTimerSetterElement>
        </StyledTimerSetter>
    );
}

export default TimerSetter;