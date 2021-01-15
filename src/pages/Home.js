import React, { useState } from 'react';
import StyledHome from '../styled/StyledHome';
import QuostsCreator from '../components/QuostsCreator';
import Navigation from '../components/Navigation';
import MAIN_PAGE_NAVIGATION from '../components/NavigationPages';
import OrderQuostPages from '../components/OrderQuostPages';
import AddCoverImage from '../components/AddCoverImage';
import { useMatch } from '../utils/customHooks';
import QuostCreatorLarge from '../components/QuostCreatorLarge';
import CategoryPage from '../components/CategoryPage';
import QuostCategoryPage from '../components/QuostCategoryPage';


const Home = ()=>{
    const [showNavigation,setShowNavigation] = useState(true)
    const closeNavigation = (showNavigation)=>setShowNavigation(showNavigation)
    const matches = useMatch('(max-width: 550px)');
    return (
        <StyledHome>
            {/* {
                matches ?
                <QuostsCreator/>:
                <QuostCreatorLarge/>
            } */}
            {/* <CategoryPage/> */}
            <QuostCategoryPage/>
            {/* <AddCoverImage/> */}
            {/* <OrderQuostPages items = {items}/> */}
            <Navigation setNavigationInternal = {closeNavigation} components = {MAIN_PAGE_NAVIGATION} openNavigation = {showNavigation}/>
        </StyledHome>
    );
}



export default Home;