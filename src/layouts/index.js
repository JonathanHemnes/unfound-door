import React from 'react'
import propTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import ContactUs from '../components/contactUs'
import Footer from '../components/footer'
import './index.css'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="The Unfound Door"
      meta={[
        { name: 'description', content: 'The Unfound Door is here for all of your creative needs from photography to videography.' },
        { name: 'keywords', content: 'photography, videography, construction, architecture, lifestyle, engineering' },
      ]}
      link={[
        { rel: 'stylesheet', href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" }
      ]}
  >
      <meta name="theme-color" content="#9ea2a8"/>
      <html lang="en" />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </Helmet>
    <Header />
    <div>
      {children}
    </div>
    <ContactUs />
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: propTypes.object,
}

export default TemplateWrapper

