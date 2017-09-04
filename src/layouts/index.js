import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/Header'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Unfound Door"
      meta={[
        { name: 'description', content: 'The Unfound Door is here for all of your creative needs from photography to videography.' },
        { name: 'keywords', content: 'photography, videography, construction, architecture, lifestyle, engineering' },
      ]}
    />
    <Header/>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
