import React from 'react'
import { MdPlace } from "react-icons/md";
import {LocationBtnWrap, LocationBtnText} from './location-button.style'

const LocationButton = (props) => {
    return (
        <LocationBtnWrap {...props}>
            <LocationBtnText target="__blank" href="https://goo.gl/maps/Pautv3GvDoFEGkdD6" type="button">
                <span className="button-icon"><MdPlace className="icon"/></span> 
                <span className="button-text">Ver en Google maps</span>
            </LocationBtnText>
        </LocationBtnWrap>
    )
}
 
export default LocationButton;