import styled from 'styled-components'
import {device} from '../../../theme'
import BackgroundImage from 'gatsby-background-image'

// background-color: #f6f2ed;
export const ContactWrapper = styled(BackgroundImage) `
    padding-top: 89px;
    padding-bottom: 100px;
    background-position: center right;
    background-size: auto;
    background-color: #F8F8F8;
    @media ${device.medium}{
        padding-top: 69px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 49px;
        padding-bottom: 60px;
    }
`;

export const ContactInfoBox = styled.div `
    @media ${device.medium}{
        margin-top: 60px;
    }
`;