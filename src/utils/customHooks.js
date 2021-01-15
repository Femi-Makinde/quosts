import React, {useEffect,useState,useRef} from 'react';
import { useSpring } from 'react-spring';



export const useMatch = (query)=>{
    const [matches,setMatches] = useState(window.matchMedia(query).matches)
  
    useEffect(()=>{
      const media = window.matchMedia(query)
      if(media.matches !== matches){
        setMatches(media.matches)
      } 
      const listener = ()=> setMatches(media.matches)
      media.addListener(listener)
      return ()=> media.removeListener(listener)
    },[query,matches])

    return matches
}

export function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export function useHold(ref,callback,duration){
  
  let invokeAfterDuration = null;
  let savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  },[callback]);
  
  useEffect(()=>{
    if(!ref.current) throw Error("Invalid Ref Object");
    let element = ref.current;

    function handleFunction(){
      invokeAfterDuration = setTimeout(savedCallback.current,duration);
    }

    function clearEvent(){
      ref.current.removeEventListener('mousedown', handleFunction);
      ref.current.removeEventListener('touchstart', handleFunction);
     invokeAfterDuration && clearTimeout(invokeAfterDuration)
    }
  
    element.addEventListener('mouseup', clearEvent)
    element.addEventListener('touchend', clearEvent)
    element.addEventListener('mousedown',handleFunction)
    element.addEventListener('touchstart',handleFunction)
  
    return () => {
      element.removeEventListener('mousedown', handleFunction);
      element.removeEventListener('touchstart', handleFunction);
    };
  })

}



export function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}