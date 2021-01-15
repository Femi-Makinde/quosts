import React from 'react';
import { DARK, LIGHT } from '../constants/labels';
import Icon from '../components/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { setAppTheme } from '../actions/appActions';
import StyledThemeControl from '../styled/StyledThemeControl';

const ThemeControl = ({onChange})=>{
    const themeSelector = useSelector(state=>state.appTheme);
    const isDark = themeSelector === DARK;
    const dispatch = useDispatch();
    const changeTheme = ()=>{
        dispatch(setAppTheme(isDark ? LIGHT : DARK))
        onChange()
    }

    return (
        <StyledThemeControl>
            <Icon modifier = 'solid' onClick = {changeTheme} icon = {isDark ? 'wb_sunny':'nights_stay'}/>
        </StyledThemeControl>
    );
}

export default ThemeControl;