import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {lightTheme,darkTheme} from '../constants/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector } from "react-redux";
import { ThemeProvider } from 'styled-components'
import { persistedStore } from '../store';
import StyledContainer from '../styled/StyledContainer';
import App from '../App';
import { DARK, LIGHT } from "../constants/labels";


const Root = ()=>{
    const themeSelector = useSelector(state=>state.appTheme);
    const light = themeSelector === DARK;
    
    return (
            <PersistGate persistor = {persistedStore}>
                <ThemeProvider theme = {light ? lightTheme:darkTheme}>
                    <StyledContainer>
                        <Router>
                            <App/>
                        </Router>
                    </StyledContainer>
                </ThemeProvider>
            </PersistGate>
    );
}


export default Root;