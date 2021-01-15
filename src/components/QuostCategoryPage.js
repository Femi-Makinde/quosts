import React from 'react';
import StyledQuostCategoryPage from '../styled/StyledQuostCategoryPage';
import {categories} from '../constants/catPage'
import { SearchDropDown } from './Input';
import { useState } from 'react';
import HorizontalScrollView from './HorizontalScrollView';
import SubCategory from './SubCategory';
import SearchListItem from './SearchListItem';
import Quost from './Quost';
import { useOnScreen } from '../utils/customHooks';
import { useRef } from 'react';
import { useTransition, animated } from 'react-spring';


const data = categories[0];
const QuostCategoryPage = ()=>{
    const [searchValue,setSearchValue] = useState('')
    const handleSearchChange = (value)=>{
        setSearchValue(value)
    }

    const headerSection = useRef(null);

    let isIn = useOnScreen(headerSection,'-200px 0px 0px 0px')
    const transition = useTransition(!isIn, null, {
        from: {opacity: 0.5},
        enter: {opacity: 1},
        leave: {opacity: 0},
    })

    return (
        <StyledQuostCategoryPage>
            {
                transition.map(({item,key,props})=>{
                    console.log(item)
                    return item && (
                    <animated.header key = {key} style = {props} className = "Header-Small-Device">
                        <div className = "Header-container">
                        <SearchDropDown/>
                        </div>
                    </animated.header>
                    )
                })
            }
            <main>
                <section ref = {headerSection}>
                    <div className="Wallpaper">
                    <div className="Wallpaper--Container">
                    <div className="BackgroundImage Wallpaper--Child">
                        <img src='https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt=""/>
                    </div>
                    <div className="Content Wallpaper--Child">
                        <div className="Content-Container">
                            <div className = "Content-Container-Child">
                                <div className="Title">
                                    <h1>{data.pageTitle}</h1>
                                </div>
                                <div className="SearchField">
                                    <SearchDropDown 
                                    component = {SearchListItem}
                                    value = {searchValue}
                                    onChange = {handleSearchChange} 
                                    placeHolder = {data.fieldPlaceHolder}/>
                                </div>
                                <div className="Description">
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
                <section>
                    <div className="SubCategories">
                        <div className="SubCategories--Container">
                            <div className="Content">
                                <HorizontalScrollView items = {data.subCategories} component = {SubCategory}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="TopQuosts">
                        <div className="TopQuosts-Container">
                            <div className="TopQuostContent">
                                <div className="heading">
                                    <h1>Top plays</h1>
                                </div>
                                <div className="Quosts">
                                    <HorizontalScrollView items = {data.top} component = {Quost}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </StyledQuostCategoryPage>
    )
}

export default QuostCategoryPage;