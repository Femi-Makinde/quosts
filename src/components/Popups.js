import React from 'react';
import { StyledAddPopup, StyledImagePopup } from '../styled/StyledPopups';
import Popup from './Popup';
import Image from './Image';
import { CLOUDINARY_URL } from '../constants/general';
import { ADD_POPUP_LABEL, CODE_POPUP_LABEL, IMAGE_POPUP_LABEL } from '../constants/popuplabels';
import AddCode from './AddCode';
import { useDispatch } from 'react-redux';
import { setPopup } from '../actions/popupActions';
import { TertiaryButton } from '../styled/StyledButtons';
import { File, Link } from '../svg';
import { useState } from 'react';


const addons = [
    {
        text: "Code",
        image: 'code',
        label: CODE_POPUP_LABEL
    },
    {
        text: "Equation",
        image: 'math',
        label: ""
    },
    {
        text: "Image",
        image: 'photos',
        label: IMAGE_POPUP_LABEL
    }
]

const AddPopup = ()=>{
    const dispatch  = useDispatch();
    return (
       <Popup label = {ADD_POPUP_LABEL}>
           <StyledAddPopup>
                <div className="AddOns">
                    {
                        addons.map((addon,index)=>{
                            return (
                                    <div onClick = {()=>{
                                        dispatch(setPopup({
                                            value: true,
                                            popup: addon.label
                                        }))
                                    }} key = {index} className="AddOn Flex">
                                        <div className="AddBox">
                                            <Image height = {55} width = {55} src = {`${CLOUDINARY_URL + addon.image}`}/>
                                            <p>{addon.text}</p>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>
            </StyledAddPopup>
       </Popup>
    );
}


const CodePopup = ()=>{
    return (
        <Popup label = {CODE_POPUP_LABEL}>
            <AddCode/>
        </Popup>
    )
}

const ImagePopup = ()=>{
    const [showLinkField,setShowLinkField] = useState(false);
    return (
        <Popup label = {IMAGE_POPUP_LABEL}>
            <StyledImagePopup>
                <div className="ImagePopup">
                    <div className="Type">
                        <div className="button">
                            <div className = "FakeInput">
                                <TertiaryButton  className = "FC">
                                    <File stroke = "white"/>
                                    <p>From Gallery</p>
                                </TertiaryButton>
                                <input type = "file" className = "FC"/>
                            </div>
                        </div>
                        <div className = "button">
                        <TertiaryButton onClick = {()=>setShowLinkField(!showLinkField)}>
                            <Link stroke = "white"/>
                            <p>From Link</p>
                        </TertiaryButton>
                        </div>
                    </div>
                </div>
            </StyledImagePopup>
        </Popup>
    )
}


export { AddPopup, CodePopup, ImagePopup }