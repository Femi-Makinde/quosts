import React from 'react';
import StyledQuost from '../styled/StyledQuost';

const Quost = React.forwardRef(({data},ref)=>{
    const {title,image,id,questionNo, createdBy,plays} = data
    return (
        <StyledQuost ref = {ref} draggable = "false">
            <div className="Container">
                <div className="Image">
                        <img src={image} alt=""/>
                </div>
                <div className="Details">
                    <div className = "Details-Container">
                        <div className = "Title">
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className = "details">
                            <span className="questions">
                                <span>
                                    {questionNo}
                                </span>
                                &nbsp;
                                questions
                            </span>
                            <span className = "dot">
                            &#8226; 
                            </span>
                            <span>
                                <span>
                                    {plays}
                                </span>
                                &nbsp; 
                                plays
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </StyledQuost>
    )
})



export default Quost;