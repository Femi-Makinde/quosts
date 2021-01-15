import React from 'react';
import StyledSubCategory from '../styled/StyledSubCategory';


const SubCategory = React.forwardRef(({data},ref)=>{
    const {title,image} = data
    return (
        <StyledSubCategory ref = {ref} draggable = "false">
            <div className="Container">
                <a href={`/search/${title}`}>
                    <div className = "Content">
                        <div className="Background Content--Child">
                            <img src={image} alt=""/>
                        </div> 
                        <div className = "Title Content--Child">
                            <div className = "Flex">
                                {title}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </StyledSubCategory>
    )
})


export default SubCategory;