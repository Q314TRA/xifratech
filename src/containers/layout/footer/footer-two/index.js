import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import parse from 'html-react-parser'
import {Container, Row, Col} from 'react-bootstrap'
import {FooterWrap, FooterInner, FooterContent, ButtonWrap} from './footer.style'
import Heading from '../../../../components/ui/heading'
import Button from '../../../../components/ui/button'
 
const Footer = ({heading, subheading}) => {
    const footerData = useStaticQuery(graphql `
        query FooterDataQuery{
            landingJson(id: {eq: "preview-footer-data"}) {
                title
                subtitle
                path
            }
            file(relativePath: {eq: "images/bg/mitech-landing-footer-bg-01.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1920, maxHeight: 628, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const {title, subtitle} = footerData.landingJson;
    const bgImage = footerData.file.childImageSharp.fluid;
    return(
        <FooterWrap>
            <FooterInner fluid={bgImage}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <FooterContent>
                                {title && <Heading {...heading}>{parse(title)}</Heading>}
                                {subtitle && <Heading {...subheading}>{subtitle}</Heading>}                                
                                <ButtonWrap>
                                    <Button 
                                        to="https://hasthemes.com/2fkp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        skin="light">Purchase Now </Button>
                                </ButtonWrap>
                            </FooterContent>
                        </Col>
                    </Row>
                </Container>
            </FooterInner>
        </FooterWrap>
    )
}

Footer.propTypes = {
    heading: PropTypes.object,
    subheading: PropTypes.object
}

Footer.defaultProps = {
    heading: {
        color: '#fff'
    },
    subheading: {
        as: 'h6',
        color: '#fff',
        letterSpacing: '7px',
        mt: '25px'
    }
}

export default Footer;