import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'

// import Header from '../containers/layout/header/header-one'
import Header from '../containers/layout/header/header-two'
// import Header from '../containers/layout/header/header-three';// 
// import Header from '../containers/layout/header/header-four'
// import Header from '../containers/layout/header/header-five'

import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index-processing/hero-area'
import AboutArea from '../containers/index-processing/about-area'
import FeaturesArea from '../containers/index-processing/features-area'
import FunFactArea from '../containers/global/funfact-area/section-three'
import CTAArea from '../containers/index-processing/cta-area'
import ServicesArea from '../containers/index-processing/services-area'
import TestimonialArea from '../containers/global/testimonial-area/section-one'
import ClientsArea from '../containers/global/clients-area'
import ContactAreaCall from '../containers/global/contact-area/contact-three'
import ContactArea from '../containers/index-appointment/contact-area'
import CTA from '../containers/global/cta-area/section-one'

const IndexProcessing = ({ location }) => (
  <Layout location={location}>
    <SEO/>
    <Header />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <AboutArea />
      <FeaturesArea />
      <CTA />
      <ServicesArea />
      <ContactArea />
    </main>
  </Layout>
)

export default IndexProcessing
