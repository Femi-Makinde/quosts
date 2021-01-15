import React from 'react';
import '../css/loading.css';
import { StyledSearchItemLoader } from '../styled/StyledLoadingPlaceholders';


const SearchItemLoader = ({index})=>{
    return (
        <StyledSearchItemLoader index = {index}>
            <div className="Container">
                <div className="Container--Child Flex">
                    <div data-index = {index} className="icon loading-v">

                    </div>
                    <div data-index = {index} className="title loading-v">

                    </div>
                </div>
            </div>
        </StyledSearchItemLoader>
    )
}


export { SearchItemLoader }