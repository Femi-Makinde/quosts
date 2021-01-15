import React, { useRef, useEffect } from 'react';
import StyledQuostScrollViewer, { StyledQuostScrollViewComponent } from '../styled/StyledQuostScrollViewer';
import { useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import _ from 'lodash-es';
import { isPositive } from '../utils/appUtils';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuostPage } from '../actions/quostActions';
import { useWindowSize } from '../utils/customHooks';


const QuostScrollViewer = ({editorProps, component: Component })=>{
    const isFirstRender = useRef(true);

    const [props,set] = useSpring(()=>({transform: 'translateX(0px)',immediate: isFirstRender.current}))
    const { width: WIDTH } = useWindowSize();
    const currentIndex = useRef(0);
    
    const dispatch = useDispatch();
    const { currentQuostPage: index, quostPages } = useSelector(state=>state.quostCreation);
    const ITEMS_NO = Object.keys(quostPages).length - 1;
    const UPPERBOUND = ((-(ITEMS_NO)* WIDTH) - WIDTH/2);

    useEffect(()=>{
        set({transform: `translate(${-WIDTH * _.clamp(index,0,ITEMS_NO)})`,immediate: isFirstRender.current});
        currentIndex.current = index;
    },[index,ITEMS_NO,WIDTH,set])

    useEffect(()=>{
     isFirstRender.current = false;
    },[])

    const bind = useDrag(({down, movement: [x]}) => {
        
        let value = Math.round((x + -currentIndex.current * WIDTH) / WIDTH);

        const index = _.clamp(value, value, ITEMS_NO)
        const isPos = isPositive(index);
        
        const translateDistance = -currentIndex.current * WIDTH + x;
        set({transform: `transformX(${Math.sign(index) === 1 ? _.clamp(x,0, WIDTH/1.5) : translateDistance <= UPPERBOUND ? UPPERBOUND:translateDistance}px)`,immediate: isFirstRender.current})

        if(!down){
            const translateIndex = isPos ? 0 : index;
            let distance = - WIDTH  * _.clamp(Math.abs(translateIndex),0,ITEMS_NO); 
            set({transform: `transformX(${distance}px)`,immediate: isFirstRender.current})
            let newIndex = _.clamp(Math.abs(translateIndex),0,ITEMS_NO);
            if(currentIndex.current !== newIndex){
                currentIndex.current = newIndex
                dispatch(setCurrentQuostPage(currentIndex.current))
            }
        }
    })

    return (
        <StyledQuostScrollViewer style={props}>
            {_.values(quostPages).map((page,i)=> (
                <StyledQuostScrollViewComponent
                {...bind(i)}
                key={i}>
                    <Component pageIndex = {i} {...editorProps} item ={page}/>
                </StyledQuostScrollViewComponent>
            ))}
        </StyledQuostScrollViewer>
    );
}

export default QuostScrollViewer;