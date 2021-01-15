import React, {useState} from 'react';
import StyledAddCoverImage from '../styled/StyledAddCoverImage';
import { ArrowLeft } from '../svg';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { SecondaryButton } from '../styled/StyledButtons';

function AddCoverImage(){
    const theme = useContext(ThemeContext)
    const [selectedImage,setSelectedImage] = useState(null);
    return (
        <StyledAddCoverImage>
            <div className="Header">
                <div className = "FlexHS">
                    <div className = "FlexHS">
                        <div className="header--child">
                            <ArrowLeft width = "20" stroke= {theme.primaryTextColor}/>
                        </div>
                        <h1>Add cover photo</h1>
                    </div>
                </div>
            </div>
            <div className="Content">
                <div className="Images">

                </div>
                <div className="FromFile">
                        <SecondaryButton>
                            Select from file
                        </SecondaryButton>
                </div>
            </div>
        </StyledAddCoverImage>
    );
}

export default AddCoverImage;