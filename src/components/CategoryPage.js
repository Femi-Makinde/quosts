import React, { useState } from 'react';
import StyledCategoryPage from '../styled/StyledCategoryPage';
import { InputWithIcon } from './Input';
import { Search } from '../svg';
import { SimpleButton } from '../styled/StyledButtons';

function CategoryPage(){
    const [showSearchPage, setShowSearchPage] = useState(false);
    const [searchText,setSearchText] = useState('')

    const handleInputFocus = (focused)=>{
        setShowSearchPage(focused)
    }

    const handleTextChange = (text)=>{
        setSearchText(text)
    }
    return (
        <StyledCategoryPage showSearch = {showSearchPage}>
            <header>
                <div className="Search">
                    <div className = "Search--Container">
                        <div className = "Input">
                            <InputWithIcon 
                            onChange = {handleTextChange}
                            onFocus = {(value)=>handleInputFocus(value)} 
                            icon = {Search}
                            value = {searchText}
                            />
                        </div>
                        <div className = "Cancel Flex">
                            <SimpleButton onClick = {()=>handleInputFocus(false)}>
                                <p>
                                    Cancel
                                </p>
                            </SimpleButton>
                        </div>
                    </div>
                </div>
            </header>
        </StyledCategoryPage>
    );
}

export default CategoryPage;