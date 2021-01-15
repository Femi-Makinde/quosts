import React, {useRef } from 'react';
import { NavigationPage, NavigationItem } from '../components/Navigation';
import { StyledNavigationPageContent } from '../styled/StyledNavigation';
import ThemeControl from '../containers/ThemeControl';
import { TertiaryButton } from '../styled/StyledButtons';


function MainNavigation({index, currentIndex, setShowIndex, closeSelfNavigation}){
    return (
     <NavigationPage closeSelfNavigation = {closeSelfNavigation} setShowIndex = {setShowIndex} parent = {{index:-1}} index = {index} currentIndex = {currentIndex}>
       {
         callback=>
         <StyledNavigationPageContent className = "NavigationPageContent">
           <div clickallowed = "true" className="MainNavigationContent">
            <div clickallowed = "true" className="MainContent">
                <div clickallowed = "true" className="NavigationList">
                  <NavigationItem itemText = 'Home'/>
                  <NavigationItem index = {1} setShow = {callback} itemText = 'Learn' hasChild = {true}/>
                  <NavigationItem index = {4} setShow = {callback} itemText = 'Explore' hasChild = {true}/>
                </div>
                <hr/>
                <div className="ThemeControl">
                    <ThemeControl onChange = {closeSelfNavigation}/>
                </div>
            </div>
            
            <div className="AccountSection">
              <TertiaryButton>
                <div clickallowed = "true" className="Button">
                    Create an account
                </div>
              </TertiaryButton>

              <TertiaryButton>
                <div clickallowed = "true" className="Button">
                  Sign in
                </div>
              </TertiaryButton>
            </div>
           </div>
         </StyledNavigationPageContent>
       }
     </NavigationPage>
    );
}
  
   
   
   
function LearnNavigation({index, currentIndex, setShowIndex}){
    const parent = useRef({
        index: 0,
        identity: 'Learn'
    })
    return (
    <NavigationPage currentIndex = {currentIndex} setShowIndex = {setShowIndex} parent = {parent.current} index = {index}>
    {
        callback=>
        <StyledNavigationPageContent className = "NavigationPageContent">
            <NavigationItem itemText = 'Quosts' hasChild = {true} setShow = {callback} index = {2}/>
            <NavigationItem itemText = 'Poll' hasChild = {true} index = {3} setShow = {callback}/>
        </StyledNavigationPageContent>
    }
    </NavigationPage>
    );
}


function QuostLearnNavigation({index, currentIndex, setShowIndex}){
    const parent = useRef({
        index: 1,
        identity: 'Quost'
    })
    return (
    <NavigationPage currentIndex = {currentIndex} setShowIndex = {setShowIndex} parent = {parent.current} index = {index}>
    {
        callback=>
        <StyledNavigationPageContent className = "NavigationPageContent">
            <NavigationItem itemText = 'Creating a Quost'/>
            <NavigationItem itemText = 'Playing a Quost'/>
        </StyledNavigationPageContent>
    }
    </NavigationPage>
    );
}


function PollLearnNavigation({index, currentIndex, setShowIndex}){
    const parent = useRef({
        index: 1,
        identity: 'Poll'
    })
    return (
    <NavigationPage currentIndex = {currentIndex} setShowIndex = {setShowIndex} parent = {parent.current} index = {index}>
    {
        callback=>
        <StyledNavigationPageContent className = "NavigationPageContent">
            <NavigationItem itemText = 'Creating a Post'/>
            <NavigationItem itemText = 'Contributing to a Poll'/>
        </StyledNavigationPageContent>
    }
    </NavigationPage>
    );
}
  
  
  
    
   function ExploreNavigation({index, currentIndex, setShowIndex}){
      const parent = useRef({
         index: 0,
         identity: 'Explore'
     })
    return (
     <NavigationPage currentIndex = {currentIndex} setShowIndex = {setShowIndex} parent = {parent.current} index = {index}>
       {
         callback=>
         <StyledNavigationPageContent className = "NavigationPageContent">
            <NavigationItem itemText = 'Quosts' hasChild = {true} setShow = {callback} index = {5}/>
            <NavigationItem itemText = 'Polls' hasChild = {true} setShow = {callback} index = {6}/>
         </StyledNavigationPageContent>
       }
     </NavigationPage>
    );
   }
  
   
   
    function QuostsNavigation({index, currentIndex,setShowIndex}){
        const parent = useRef({
            index: 4,
            identity: 'Quosts'
        })
     return (
      <NavigationPage index = {index} currentIndex = {currentIndex} setShowIndex = {setShowIndex} parent = {parent.current}>
        {
          callback => 
          <StyledNavigationPageContent className = "NavigationPageContent"> 
             <NavigationItem itemText = 'Education'/>
             <NavigationItem itemText = 'Sports'/>
             <NavigationItem itemText = 'Fashion'/>
             <NavigationItem itemText = 'Music'/>
             <NavigationItem itemText = 'Technology'/>
             <NavigationItem itemText = 'Languages'/>
             <NavigationItem itemText = 'Culture'/>
             <NavigationItem itemText = 'History'/>
             <NavigationItem itemText = 'Social Media'/>
          </StyledNavigationPageContent>
        }
      </NavigationPage>
     );
    }
   
   
    function PollNavigation({index, currentIndex,setShowIndex}){
      const parent = useRef({
          index: 4,
          identity: 'Polls'
      })
     return (
      <NavigationPage currentIndex = {currentIndex} setShowIndex = {setShowIndex} parent = {parent.current} index = {index}>
        {
          callback =>
           <StyledNavigationPageContent className = "NavigationPageContent">
             <NavigationItem itemText = 'Education'/>
             <NavigationItem itemText = 'Sports'/>
             <NavigationItem itemText = 'Fashion'/>
             <NavigationItem itemText = 'Music'/>
             <NavigationItem itemText = 'Technology'/>
             <NavigationItem itemText = 'Languages'/>
             <NavigationItem itemText = 'Culture'/>
             <NavigationItem itemText = 'History'/>
             <NavigationItem itemText = 'Social Media'/>
           </StyledNavigationPageContent>
        }
      </NavigationPage>
     );
    }
   
   const MAIN_PAGE_NAVIGATION  = {
        0: MainNavigation,
        1: LearnNavigation,
        2: QuostLearnNavigation,
        3: PollLearnNavigation,
        4: ExploreNavigation,
        5: QuostsNavigation,
        6: PollNavigation
   }

export default MAIN_PAGE_NAVIGATION